import React, { useState, useEffect } from 'react';
import { Student, Zone } from '../types';
import { Users, Map, Plus, Trash2, UserX, UserCheck } from 'lucide-react';

interface Props {
  students: Student[];
  zones: Zone[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  setZones: React.Dispatch<React.SetStateAction<Zone[]>>;
}

export const InputSection: React.FC<Props> = ({ students, zones, setStudents, setZones }) => {
  const [studentText, setStudentText] = useState('');

  // Sync text with students prop on initial load or if changed externally (though unlikely here)
  // We only do this once to avoid overwriting user edits while typing
  useEffect(() => {
    if (!studentText && students.length > 0) {
      setStudentText(students.map(s => `${s.number} ${s.name}`).join('\n'));
    }
  }, []);

  const handleStudentTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setStudentText(text);

    const lines = text.split('\n');
    const newStudents: Student[] = [];

    // Auto-numbering logic
    let autoNumber = 1;

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      const parts = trimmed.split(/\s+/);
      let number: number;
      let name: string;

      // Check if first part is a number
      const firstPartNum = parseInt(parts[0]);

      if (!isNaN(firstPartNum)) {
        // "1 Name" format
        number = firstPartNum;
        name = parts.slice(1).join(' ');
        // If name is empty but number exists (e.g. just "1"), treat "1" as name? No, treat as invalid or name.
        if (!name) {
          // Fallback: if only number provided, maybe it's a name that is a number?
          // But usually it implies "1 Name".
          // Let's assume if no name, disregard or treat number as name if forcing it.
          // Current logic: strict. New logic: flexible.
          // If "1" is written, name is empty.
        }
      } else {
        // "Name" format (no number)
        number = autoNumber;
        name = parts.join(' '); // Entire line is name
      }

      if (name) {
        // Try to preserve existing exclusion status
        // We match by ID (preferred) or Name if ID changed
        const id = `s-${number}`;
        const existing = students.find(s => s.id === id); // ID Base match

        newStudents.push({
          id,
          number,
          name,
          isExcluded: existing ? existing.isExcluded : false
        });

        // Increment autoNumber only if we used it (or always? Always to keep sequence)
        // If the user explicitly wrote "5 Name", next auto should probably be 6?
        // But usually mixed input is rare. Let's just increment autoNumber.
        autoNumber = number + 1;
      }
    });

    setStudents(newStudents);
  };

  const toggleExclusion = (id: string) => {
    setStudents(prev => prev.map(s =>
      s.id === id ? { ...s, isExcluded: !s.isExcluded } : s
    ));
  };

  const handleZoneChange = (id: string, field: keyof Zone, value: string | number) => {
    setZones(prev => prev.map(z => z.id === id ? { ...z, [field]: value } : z));
  };

  const addZone = () => {
    const newId = `z-${Date.now()}`;
    setZones(prev => [...prev, { id: newId, name: '', allocation: 2 }]);
  };

  const removeZone = (id: string) => {
    setZones(prev => prev.filter(z => z.id !== id));
  };

  const activeStudentsCount = students.filter(s => !s.isExcluded).length;
  const totalCapacity = zones.reduce((sum, z) => sum + (Number(z.allocation) || 0), 0);
  const isBalanced = totalCapacity === activeStudentsCount;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 no-print">
      {/* Student Input & Management */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-6">
          <div className="flex justify-between items-center mb-4 border-b border-base-200 pb-2">
            <h2 className="card-title text-base-content flex items-center gap-2">
              <Users size={20} />
              학생 명단
            </h2>
            <div className="badge badge-primary font-bold">
              배정 대상: {activeStudentsCount}명
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Raw Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">명단 입력 (번호+이름 또는 이름만)</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-80 font-mono text-sm leading-relaxed"
                placeholder="예시:&#13;&#10;1 홍길동&#13;&#10;김철수 (자동번호)"
                value={studentText}
                onChange={handleStudentTextChange}
              />
              <p className="mt-2 text-xs text-base-content/60">
                * 이름만 입력하면 번호가 자동 부여됩니다.
              </p>
            </div>

            {/* Exclusion List */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">제외 관리 (클릭하여 토글)</span>
              </label>
              <div className="h-80 overflow-y-auto border border-base-300 rounded-btn p-2 bg-base-50/50 space-y-1">
                {students.length === 0 ? (
                  <div className="text-center text-gray-400 py-10 text-sm">명단을 입력해주세요</div>
                ) : (
                  students.map(s => (
                    <div
                      key={s.id}
                      onClick={() => toggleExclusion(s.id)}
                      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all border ${s.isExcluded
                          ? 'bg-red-50 border-red-200 opacity-70'
                          : 'bg-white border-base-200 hover:border-primary hover:shadow-sm'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs w-6 text-center ${s.isExcluded ? 'text-red-400 line-through' : 'font-bold text-primary'}`}>
                          {s.number}
                        </span>
                        <span className={`text-sm ${s.isExcluded ? 'text-gray-400 line-through' : 'text-base-content'}`}>
                          {s.name}
                        </span>
                      </div>
                      {s.isExcluded ? (
                        <UserX size={16} className="text-red-400" />
                      ) : (
                        <UserCheck size={16} className="text-green-500 opacity-0 group-hover:opacity-100" />
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Input */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body p-6">
          <div className="flex justify-between items-center mb-4 border-b border-base-200 pb-2">
            <h2 className="card-title text-base-content flex items-center gap-2">
              <Map size={20} />
              청소구역 설정
            </h2>
            <div className={`badge font-bold ${isBalanced ? 'badge-success text-white' : 'badge-error text-white'}`}>
              수용 인원: {totalCapacity}명
            </div>
          </div>

          <div className="h-[400px] overflow-y-auto pr-2 space-y-2 custom-scrollbar">
            {zones.map((zone, index) => (
              <div key={zone.id} className="flex gap-2 items-center">
                <span className="text-base-content/50 text-sm w-6 text-center font-mono">{index + 1}</span>
                <input
                  type="text"
                  placeholder="구역 이름"
                  className="input input-sm input-bordered flex-1"
                  value={zone.name}
                  onChange={(e) => handleZoneChange(zone.id, 'name', e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  className="input input-sm input-bordered w-20 text-center"
                  value={zone.allocation}
                  onChange={(e) => handleZoneChange(zone.id, 'allocation', parseInt(e.target.value) || 0)}
                />
                <button
                  onClick={() => removeZone(zone.id)}
                  className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                  title="삭제"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={addZone}
              className="btn btn-outline btn-block btn-sm border-dashed text-base-content/60 hover:text-primary hover:border-primary mt-4"
            >
              <Plus size={16} /> 구역 추가
            </button>
          </div>
          {!isBalanced && (
            <div role="alert" className="alert alert-error mt-4 py-2 px-4 shadow-sm rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-xs font-bold">
                배정 대상 인원({activeStudentsCount})과 구역 수용 인원({totalCapacity})이 일치하지 않습니다.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};