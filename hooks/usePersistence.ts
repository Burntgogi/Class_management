import { Student, Zone } from '../types';

interface UsePersistenceProps {
  classNameValue: string;
  zones: Zone[];
  students: Student[];
  setClassNameValue: (val: string) => void;
  setZones: (zones: Zone[]) => void;
  setStudents: (students: Student[]) => void;
  setAppState: (state: any) => void;
}

export const usePersistence = ({
  classNameValue,
  zones,
  students,
  setClassNameValue,
  setZones,
  setStudents,
  setAppState,
}: UsePersistenceProps) => {
  const getPersistentData = () => ({
    version: 2,
    date: new Date().toISOString(),
    className: classNameValue,
    zones,
    students,
  });

  const handleExportFile = () => {
    const blob = new Blob([JSON.stringify(getPersistentData(), null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `${classNameValue}_청소구역설정_${new Date().toLocaleDateString()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const loadDataIntoState = (data: any) => {
    if (data.className) setClassNameValue(data.className);
    if (data.zones) setZones(data.zones);

    if (data.students) {
      setStudents(data.students);
      setAppState(data.students.some((student: any) => student.assignedZoneId) ? 'result' : 'input');
      return;
    }

    setAppState('input');
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
      } catch {
        alert('올바르지 않은 파일 형식입니다.');
      }
    };

    reader.readAsText(file);
    e.target.value = '';
  };

  return {
    handleExportFile,
    handleImportFile,
  };
};
