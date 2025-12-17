import React, { useState } from 'react';
import { Student, Zone } from '../types';
import { Printer, ArrowLeft, Eye, EyeOff, Download } from 'lucide-react';

interface Props {
  students: Student[];
  zones: Zone[];
  enableHiddenZones: boolean;
  onReset: () => void;
  title: string;
  onSaveResult?: () => void;
}

export const ResultsSection: React.FC<Props> = ({ students, zones, enableHiddenZones, onReset, title, onSaveResult }) => {
  const [revealedStudentIds, setRevealedStudentIds] = useState<Set<string>>(new Set());

  // Sort students by number for the table
  const sortedStudents = [...students].sort((a, b) => a.number - b.number);

  // Dynamic Density for Print:
  // If > 25 students, reduce padding and font size to fit 1 page.
  const isHighDensity = students.length > 25;
  const printRowClass = isHighDensity ? 'print:h-6 print:text-[8pt]' : 'print:h-8 print:text-[10pt]';
  const printCellClass = isHighDensity ? 'print:py-0.5' : 'print:py-1';

  // Group by Zone for the second table
  const zoneGroups = zones.map(zone => {
    const assigned = students
      .filter(s => s.assignedZoneId === zone.id)
      .sort((a, b) => a.number - b.number)
      .map(s => `${s.number} ${s.name}`);
    return {
      ...zone,
      assigned
    };
  });

  const toggleReveal = (id: string) => {
    if (!enableHiddenZones) return;
    const newSet = new Set(revealedStudentIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setRevealedStudentIds(newSet);
  };

  const handlePrint = () => {
    window.print();
  };

  const revealAll = () => {
    const allIds = new Set(students.map(s => s.id));
    setRevealedStudentIds(allIds);
  };

  return (
    <div className="w-full bg-white print:bg-transparent p-4 md:p-8 rounded-xl shadow-sm print:shadow-none print:p-0">
      {/* Action Buttons (No Print) */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center no-print">
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors shadow"
        >
          <ArrowLeft size={18} /> 다시 설정하기
        </button>

        <button
          type="button"
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow"
        >
          <Printer size={18} /> 인쇄하기
        </button>

        {enableHiddenZones && (
          <button
            type="button"
            onClick={revealAll}
            className="flex items-center gap-2 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors shadow"
          >
            <Eye size={18} /> 모두 공개
          </button>
        )}

        {onSaveResult && (
          <button
            type="button"
            onClick={onSaveResult}
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow"
          >
            <Download size={18} /> 결과 저장
          </button>
        )}
      </div>

      {/* Title */}
      <div className="text-center mb-8 print:mb-4">
        <h1 className="text-3xl font-bold text-gray-800 print:text-2xl">{title}</h1>
      </div>

      {/* 
        Print Layout: Force flex-row via 'print-flex-row' class defined in index.html
        Screen Layout: flex-col on mobile, flex-row on desktop
      */}
      <div className="flex flex-col md:flex-row gap-8 print-flex-row">

        {/* Student Table */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-center mb-4 pb-2 border-b-2 border-gray-300 text-gray-700">
            학생별 청소구역
          </h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 w-16">번호</th>
                <th className="border border-gray-300 p-2">이름</th>
                <th className="border border-gray-300 p-2">청소구역</th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map(student => {
                const isHidden = enableHiddenZones && !revealedStudentIds.has(student.id);

                return (
                  <tr key={student.id} className={`text-center hover:bg-gray-50 ${printRowClass}`}>
                    <td className={`border border-gray-300 p-2 ${printCellClass}`}>{student.number}</td>
                    <td className={`border border-gray-300 p-2 font-medium ${printCellClass}`}>{student.name}</td>
                    <td
                      className={`border border-gray-300 p-2 relative ${enableHiddenZones ? 'cursor-pointer' : ''} ${printCellClass}`}
                      onClick={() => toggleReveal(student.id)}
                    >
                      {isHidden && (
                        <div className="flex items-center justify-center gap-1 text-gray-400 font-bold select-none">
                          <EyeOff size={14} />
                          <span>클릭하여 확인</span>
                        </div>
                      )}
                      <span className={`font-bold text-blue-800 ${isHidden ? 'hidden' : ''}`}>
                        {student.assignedZoneName}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Zone Table */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-center mb-4 pb-2 border-b-2 border-gray-300 text-gray-700 print:text-lg">
            구역별 배정 명단
          </h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 print:bg-gray-100">
                <th className="border border-gray-300 p-2 w-1/4">구역명</th>
                <th className="border border-gray-300 p-2 w-12">인원</th>
                <th className="border border-gray-300 p-2">담당 학생</th>
              </tr>
            </thead>
            <tbody>
              {zoneGroups.map(zone => (
                <tr key={zone.id} className="text-center break-inside-avoid">
                  <td className="border border-gray-300 p-2 font-bold">{zone.name}</td>
                  <td className="border border-gray-300 p-2">{zone.allocation}</td>
                  <td className="border border-gray-300 p-2 text-left pl-4">
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