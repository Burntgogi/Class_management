import { Student, Zone, Settings, AppState } from '../types';

// Utility: Shuffle Array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
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
  triggerResultEffects
}: UseAssignmentLogicProps) => {

  const calculateScore = (assignment: Student[]): number => {
    let overlapCount = 0;
    assignment.forEach(s => {
      if (s.previousZoneId && s.assignedZoneId === s.previousZoneId) {
        overlapCount++;
      }
    });
    return overlapCount;
  };

  const handleAssign = () => {
    const activeStudents = students.filter(s => !s.isExcluded);
    const totalCapacity = zones.reduce((sum, z) => sum + z.allocation, 0);

    if (activeStudents.length !== totalCapacity) {
      alert(`배정 대상 학생 수(${activeStudents.length}명)와 구역 수용 인원(${totalCapacity}명)이 일치하지 않습니다.\n(제외된 학생은 배정 인원에서 빠집니다)`);
      return;
    }

    let bestAssignment: Student[] = [];
    let bestScore = Infinity;

    const iterations = settings.avoidPrevious ? 100 : 1;

    for (let k = 0; k < iterations; k++) {
      const shuffledActive: Student[] = shuffleArray(activeStudents);
      let assignedIndex = 0;
      const currentRunStudents = [...students];

      zones.forEach(zone => {
        for (let i = 0; i < zone.allocation; i++) {
          if (assignedIndex < shuffledActive.length) {
            const assignedStudent = shuffledActive[assignedIndex];
            const studentIndex = currentRunStudents.findIndex(s => s.id === assignedStudent.id);
            if (studentIndex !== -1) {
              currentRunStudents[studentIndex] = {
                ...currentRunStudents[studentIndex],
                assignedZoneId: zone.id,
                assignedZoneName: zone.name
              };
            }
            assignedIndex++;
          }
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
    } else {
      triggerResultEffects(settings.enableFanfare);
      setAppState('result');
    }
  };

  return {
    handleAssign
  };
};
