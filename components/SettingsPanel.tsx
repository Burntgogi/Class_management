import React, { useRef } from 'react';
import { Settings } from '../types';
import { Settings as SettingsIcon, Timer, EyeOff, PartyPopper, Type, X, Save, Upload, Download, History, RotateCcw } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  classNameValue: string;
  setClassNameValue: (val: string) => void;
  onExportFile: () => void;
  onImportFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SettingsPanel: React.FC<Props> = ({
  isOpen,
  onClose,
  settings,
  setSettings,
  classNameValue,
  setClassNameValue,
  onExportFile,
  onImportFile
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleChange = (key: keyof Settings, value: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value === 'on'
    }));
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fade-in no-print">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <SettingsIcon className="text-blue-600" />
            <span>환경 설정 및 데이터 관리</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-8">

          {/* Section 1: Data Management */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Save size={18} /> 데이터 관리
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-2">파일로 관리</h4>
              <p className="text-xs text-gray-500 mb-4">저장된 데이터 파일을 불러오거나 현재 상태를 내보냅니다.</p>
              <div className="flex gap-2">
                <button onClick={onExportFile} className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm font-medium">
                  <Download size={16} /> 내보내기
                </button>
                <button onClick={handleImportClick} className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 rounded hover:bg-gray-50 text-sm font-medium">
                  <Upload size={16} /> 가져오기
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept=".json"
                  onChange={onImportFile}
                />
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              * 파일을 불러오면 저장된 <strong>배정 결과가 즉시 화면에 표시</strong>됩니다.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* Section 2: Configuration */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <SettingsIcon size={18} /> 프로그램 옵션
            </h3>
            <div className="space-y-4">
              {/* Class Name */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Type size={18} className="text-gray-500" />
                  <div>
                    <span className="font-medium text-gray-700">학급 이름</span>
                    <p className="text-xs text-gray-500">제목과 인쇄물에 표시될 이름</p>
                  </div>
                </div>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 w-full sm:w-48"
                  value={classNameValue}
                  onChange={(e) => setClassNameValue(e.target.value)}
                />
              </div>

              {/* Avoid Previous */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <History size={18} className="text-gray-500" />
                  <div>
                    <span className="font-medium text-gray-700">이전 구역 겹침 방지</span>
                    <p className="text-xs text-gray-500">저장된 이전 기록과 겹치지 않도록 배정 (최선)</p>
                  </div>
                </div>
                <select
                  className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 w-full sm:w-32"
                  value={settings.avoidPrevious ? 'on' : 'off'}
                  onChange={(e) => handleChange('avoidPrevious', e.target.value)}
                >
                  <option value="off">OFF</option>
                  <option value="on">ON</option>
                </select>
              </div>

              {/* Countdown */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Timer size={18} className="text-gray-500" />
                  <div>
                    <span className="font-medium text-gray-700">카운트다운 (5초)</span>
                    <p className="text-xs text-gray-500">배정 시작 시 효과음과 함께 카운트다운</p>
                  </div>
                </div>
                <select
                  className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 w-full sm:w-32"
                  value={settings.enableCountdown ? 'on' : 'off'}
                  onChange={(e) => handleChange('enableCountdown', e.target.value)}
                >
                  <option value="off">OFF</option>
                  <option value="on">ON</option>
                </select>
              </div>

              {/* Masking */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <EyeOff size={18} className="text-gray-500" />
                  <div>
                    <span className="font-medium text-gray-700">배정 결과 가리기</span>
                    <p className="text-xs text-gray-500">결과를 가려두고 클릭해서 확인</p>
                  </div>
                </div>
                <select
                  className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 w-full sm:w-32"
                  value={settings.enableHiddenZones ? 'on' : 'off'}
                  onChange={(e) => handleChange('enableHiddenZones', e.target.value)}
                >
                  <option value="off">OFF</option>
                  <option value="on">ON</option>
                </select>
              </div>

              {/* Fanfare */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <PartyPopper size={18} className="text-gray-500" />
                  <div>
                    <span className="font-medium text-gray-700">빵빠레 효과</span>
                    <p className="text-xs text-gray-500">결과 발표 시 폭죽과 환호성</p>
                  </div>
                </div>
                <select
                  className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 w-full sm:w-32"
                  value={settings.enableFanfare ? 'on' : 'off'}
                  onChange={(e) => handleChange('enableFanfare', e.target.value)}
                >
                  <option value="off">OFF</option>
                  <option value="on">ON</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 rounded-b-xl flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow"
          >
            설정 완료
          </button>
        </div>
      </div>
    </div>
  );
};
