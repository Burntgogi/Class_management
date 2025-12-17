import { Student, Zone } from '../types';

interface PersistenceData {
  classNameValue: string;
  zones: Zone[];
  students: Student[];
}

interface UsePersistenceProps {
  classNameValue: string;
  zones: Zone[];
  students: Student[];
  setClassNameValue: (val: string) => void;
  setZones: (zones: Zone[]) => void;
  setStudents: (students: Student[]) => void;
  setAppState: (state: any) => void; // Using 'any' for AppState to avoid circular deps or generic complexity, or we can import AppState
}

export const usePersistence = ({
  classNameValue,
  zones,
  students,
  setClassNameValue,
  setZones,
  setStudents,
  setAppState
}: UsePersistenceProps) => {

  const getPersistentData = () => {
    return {
      version: 2,
      date: new Date().toISOString(),
      className: classNameValue,
      zones,
      students
    };
  };

  const handleExportFile = () => {
    const data = getPersistentData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${classNameValue}_청소구역설정_${new Date().toLocaleDateString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        loadDataIntoState(data);
        alert('파일에서 데이터를 불러왔습니다.');
      } catch (err) {
        alert('올바르지 않은 파일 형식입니다.');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const loadDataIntoState = (data: any) => {
    if (data.className) setClassNameValue(data.className);
    if (data.zones) setZones(data.zones);

    if (data.students) {
      setStudents(data.students);
      const hasAssignments = data.students.some((s: any) => s.assignedZoneId);
      if (hasAssignments) {
        setAppState('result');
      } else {
        setAppState('input');
      }
    } else {
      setAppState('input');
    }
  };

  return {
    handleExportFile,
    handleImportFile
  };
};
