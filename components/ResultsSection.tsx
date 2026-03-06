import React, { useState } from 'react';
import { ArrowLeft, Download, Eye, EyeOff, Printer } from 'lucide-react';
import { Student, Zone } from '../types';

interface Props {
  students: Student[];
  zones: Zone[];
  enableHiddenZones: boolean;
  onReset: () => void;
  title: string;
  onSaveResult?: () => void;
}

export const ResultsSection: React.FC<Props> = ({
  students,
  zones,
  enableHiddenZones,
  onReset,
  title,
  onSaveResult,
}) => {
  const [revealedStudentIds, setRevealedStudentIds] = useState<Set<string>>(new Set());

  const sortedStudents = [...students].sort((a, b) => a.number - b.number);
  const isHighDensity = students.length > 25;
  const printRowClass = isHighDensity ? 'print:h-6 print:text-[8pt]' : 'print:h-8 print:text-[10pt]';
  const printCellClass = isHighDensity ? 'print:py-0.5' : 'print:py-1';
  const zoneGroups = zones.map((zone) => ({
    ...zone,
    assigned: students
      .filter((student) => student.assignedZoneId === zone.id)
      .sort((a, b) => a.number - b.number)
      .map((student) => `${student.number} ${student.name}`),
  }));

  const toggleReveal = (id: string) => {
    if (!enableHiddenZones) return;

    const next = new Set(revealedStudentIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setRevealedStudentIds(next);
  };

  return (
    <div className="mt-8 w-full rounded-[32px] bg-white p-4 shadow-[0_28px_70px_-45px_rgba(15,23,42,0.45)] print:bg-white print:p-0 print:shadow-none md:p-8">
      <div className="mb-8 flex flex-wrap justify-center gap-4 no-print">
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 rounded-2xl bg-gray-500 px-6 py-2 text-white shadow transition-colors hover:bg-gray-600"
        >
          <ArrowLeft size={18} />
          다시 설정하기
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-2 text-white shadow transition-colors hover:bg-blue-700"
        >
          <Printer size={18} />
          인쇄하기
        </button>
        {enableHiddenZones && (
          <button
            type="button"
            onClick={() => setRevealedStudentIds(new Set(students.map((student) => student.id)))}
            className="flex items-center gap-2 rounded-2xl bg-indigo-500 px-6 py-2 text-white shadow transition-colors hover:bg-indigo-600"
          >
            <Eye size={18} />
            모두 공개
          </button>
        )}
        {onSaveResult && (
          <button
            type="button"
            onClick={onSaveResult}
            className="flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-2 text-white shadow transition-colors hover:bg-green-700"
          >
            <Download size={18} />
            결과 저장
          </button>
        )}
      </div>

      <div className="mb-8 text-center print:mb-4">
        <h1 className="text-3xl font-bold text-slate-800 print:text-2xl">{title}</h1>
      </div>

      <div className="flex flex-col gap-8 print-flex-row md:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 border-b-2 border-gray-300 pb-2 text-center text-xl font-bold text-gray-700">
            학생별 청소구역
          </h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-16 border border-gray-300 p-2">번호</th>
                <th className="border border-gray-300 p-2">이름</th>
                <th className="border border-gray-300 p-2">청소구역</th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student) => {
                const isHidden = enableHiddenZones && !revealedStudentIds.has(student.id);

                return (
                  <tr key={student.id} className={`text-center hover:bg-gray-50 ${printRowClass}`}>
                    <td className={`border border-gray-300 p-2 ${printCellClass}`}>{student.number}</td>
                    <td className={`border border-gray-300 p-2 font-medium ${printCellClass}`}>
                      {student.name}
                    </td>
                    <td
                      className={`relative border border-gray-300 p-2 ${enableHiddenZones ? 'cursor-pointer' : ''} ${printCellClass}`}
                      onClick={() => toggleReveal(student.id)}
                    >
                      {isHidden ? (
                        <div className="flex select-none items-center justify-center gap-1 font-bold text-gray-400">
                          <EyeOff size={14} />
                          <span>클릭하여 확인</span>
                        </div>
                      ) : (
                        <span className="font-bold text-blue-800">{student.assignedZoneName}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex-1">
          <h2 className="mb-4 border-b-2 border-gray-300 pb-2 text-center text-xl font-bold text-gray-700 print:text-lg">
            구역별 배정 명단
          </h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 border border-gray-300 p-2">구역명</th>
                <th className="w-12 border border-gray-300 p-2">인원</th>
                <th className="border border-gray-300 p-2">해당 학생</th>
              </tr>
            </thead>
            <tbody>
              {zoneGroups.map((zone) => (
                <tr key={zone.id} className="break-inside-avoid text-center">
                  <td className="border border-gray-300 p-2 font-bold">{zone.name}</td>
                  <td className="border border-gray-300 p-2">{zone.allocation}</td>
                  <td className="border border-gray-300 p-2 pl-4 text-left">
                    {zone.assigned.length > 0 ? zone.assigned.join(', ') : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
