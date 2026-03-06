import { AppState, Settings, Student, Zone } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

interface UseAssignmentLogicProps {
  students: Student[];
  zones: Zone[];
  settings: Settings;
  setStudents: (students: Student[]) => void;
  setAppState: (state: AppState) => void;
  triggerResultEffects: (enableFanfare: boolean) => void;
}

export const useAssignmentLogic = ({
  students,
  zones,
  settings,
  setStudents,
  setAppState,
  triggerResultEffects,
}: UseAssignmentLogicProps) => {
  const calculateScore = (assignment: Student[]) =>
    assignment.reduce((score, student) => {
      if (student.previousZoneId && student.assignedZoneId === student.previousZoneId) {
        return score + 1;
      }
      return score;
    }, 0);

  const handleAssign = () => {
    const activeStudents = students.filter((student) => !student.isExcluded);
    const totalCapacity = zones.reduce((sum, zone) => sum + zone.allocation, 0);

    if (activeStudents.length !== totalCapacity) {
      alert(
        `배정 대상 학생 수(${activeStudents.length}명)와 구역 수용 인원(${totalCapacity}명)이 일치하지 않습니다.\n제외된 학생은 배정 인원에서 빠집니다.`,
      );
      return;
    }

    let bestAssignment: Student[] = [];
    let bestScore = Number.POSITIVE_INFINITY;
    const iterations = settings.avoidPrevious ? 100 : 1;

    for (let attempt = 0; attempt < iterations; attempt += 1) {
      const shuffledActive = shuffleArray(activeStudents);
      const currentRunStudents = [...students];
      let assignedIndex = 0;

      zones.forEach((zone) => {
        for (let i = 0; i < zone.allocation; i += 1) {
          if (assignedIndex >= shuffledActive.length) return;

          const assignedStudent = shuffledActive[assignedIndex];
          const studentIndex = currentRunStudents.findIndex((student) => student.id === assignedStudent.id);

          if (studentIndex !== -1) {
            currentRunStudents[studentIndex] = {
              ...currentRunStudents[studentIndex],
              assignedZoneId: zone.id,
              assignedZoneName: zone.name,
            };
          }

          assignedIndex += 1;
        }
      });

      const score = calculateScore(currentRunStudents);
      if (score < bestScore) {
        bestScore = score;
        bestAssignment = currentRunStudents;
      }

      if (score === 0) break;
    }

    setStudents(bestAssignment);

    if (settings.enableCountdown) {
      setAppState('counting');
      return;
    }

    triggerResultEffects(settings.enableFanfare);
    setAppState('result');
  };

  return { handleAssign };
};
