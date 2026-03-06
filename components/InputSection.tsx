import React, { useEffect, useState } from 'react';
import { Map, Plus, Trash2, UserCheck, UserX, Users } from 'lucide-react';
import { Student, Zone } from '../types';

interface Props {
  students: Student[];
  zones: Zone[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  setZones: React.Dispatch<React.SetStateAction<Zone[]>>;
}

export const InputSection: React.FC<Props> = ({ students, zones, setStudents, setZones }) => {
  const [studentText, setStudentText] = useState('');

  useEffect(() => {
    if (!studentText && students.length > 0) {
      setStudentText(students.map((student) => `${student.number} ${student.name}`).join('\n'));
    }
  }, []);

  const handleStudentTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setStudentText(text);

    const newStudents: Student[] = [];
    let autoNumber = 1;

    text.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const parts = trimmed.split(/\s+/);
      const firstPartNum = parseInt(parts[0], 10);
      const number = Number.isNaN(firstPartNum) ? autoNumber : firstPartNum;
      const name = Number.isNaN(firstPartNum) ? parts.join(' ') : parts.slice(1).join(' ');

      if (!name) return;

      const id = `s-${number}`;
      const existing = students.find((student) => student.id === id);

      newStudents.push({
        id,
        number,
        name,
        isExcluded: existing ? existing.isExcluded : false,
      });

      autoNumber = number + 1;
    });

    setStudents(newStudents);
  };

  const toggleExclusion = (id: string) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, isExcluded: !student.isExcluded } : student,
      ),
    );
  };

  const handleZoneChange = (id: string, field: keyof Zone, value: string | number) => {
    setZones((prev) => prev.map((zone) => (zone.id === id ? { ...zone, [field]: value } : zone)));
  };

  const addZone = () => {
    setZones((prev) => [...prev, { id: `z-${Date.now()}`, name: '', allocation: 2 }]);
  };

  const removeZone = (id: string) => {
    setZones((prev) => prev.filter((zone) => zone.id !== id));
  };

  const activeStudentsCount = students.filter((student) => !student.isExcluded).length;
  const totalCapacity = zones.reduce((sum, zone) => sum + (Number(zone.allocation) || 0), 0);
  const isBalanced = totalCapacity === activeStudentsCount;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 no-print">
      <div className="rounded-[30px] border border-white/70 bg-white/90 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Users size={20} />
              학생 명단
            </h2>
            <div className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
              배정 대상 {activeStudentsCount}명
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                명단 입력 (번호+이름 또는 이름만)
              </label>
              <textarea
                className="h-80 w-full rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm leading-relaxed outline-none transition focus:border-sky-300 focus:bg-white"
                placeholder={'예시:\n1 홍길동\n김철수 (자동번호)'}
                value={studentText}
                onChange={handleStudentTextChange}
              />
              <p className="mt-2 text-xs text-slate-500">이름만 입력하면 번호가 자동 부여됩니다.</p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                제외 관리 (클릭하여 전환)
              </label>
              <div className="h-80 space-y-2 overflow-y-auto rounded-[22px] border border-slate-200 bg-slate-50/70 p-2">
                {students.length === 0 ? (
                  <div className="py-10 text-center text-sm text-slate-400">명단을 입력해주세요.</div>
                ) : (
                  students.map((student) => (
                    <button
                      type="button"
                      key={student.id}
                      onClick={() => toggleExclusion(student.id)}
                      className={`group flex w-full items-center justify-between rounded-2xl border p-3 text-left transition-all ${
                        student.isExcluded
                          ? 'border-red-200 bg-red-50/90 opacity-70'
                          : 'border-white bg-white hover:border-sky-200 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 text-center font-mono text-xs ${
                            student.isExcluded ? 'text-red-400 line-through' : 'font-bold text-sky-700'
                          }`}
                        >
                          {student.number}
                        </span>
                        <span
                          className={`text-sm ${
                            student.isExcluded ? 'text-slate-400 line-through' : 'text-slate-700'
                          }`}
                        >
                          {student.name}
                        </span>
                      </div>
                      {student.isExcluded ? (
                        <UserX size={16} className="text-red-400" />
                      ) : (
                        <UserCheck size={16} className="text-emerald-500 opacity-60 transition group-hover:opacity-100" />
                      )}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[30px] border border-white/70 bg-white/90 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Map size={20} />
              청소구역 설정
            </h2>
            <div
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                isBalanced ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
              }`}
            >
              수용 인원 {totalCapacity}명
            </div>
          </div>

          <div className="h-[400px] space-y-2 overflow-y-auto pr-2">
            {zones.map((zone, index) => (
              <div key={zone.id} className="flex items-center gap-2">
                <span className="w-6 text-center font-mono text-sm text-slate-400">{index + 1}</span>
                <input
                  type="text"
                  placeholder="구역 이름"
                  className="h-10 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none transition focus:border-sky-300 focus:bg-white"
                  value={zone.name}
                  onChange={(e) => handleZoneChange(zone.id, 'name', e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  className="h-10 w-20 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-center text-sm outline-none transition focus:border-sky-300 focus:bg-white"
                  value={zone.allocation}
                  onChange={(e) => handleZoneChange(zone.id, 'allocation', parseInt(e.target.value, 10) || 0)}
                />
                <button
                  type="button"
                  onClick={() => removeZone(zone.id)}
                  className="rounded-xl p-2 text-rose-500 transition hover:bg-rose-50"
                  title="삭제"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addZone}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-sky-400 hover:text-sky-700"
            >
              <Plus size={16} />
              구역 추가
            </button>
          </div>

          {!isBalanced && (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-700">
              배정 대상 인원({activeStudentsCount})과 구역 수용 인원({totalCapacity})이 일치하지 않습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
