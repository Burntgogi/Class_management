import React, { useRef } from 'react';
import {
  Download,
  EyeOff,
  History,
  PartyPopper,
  Save,
  Settings as SettingsIcon,
  Timer,
  Type,
  Upload,
  X,
} from 'lucide-react';
import { Settings } from '../types';

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
  onImportFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleChange = (key: keyof Settings, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value === 'on',
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 no-print backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-6">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <SettingsIcon className="text-blue-600" />
            <span>환경 설정 및 데이터 관리</span>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 transition hover:bg-slate-100">
            <X size={22} className="text-slate-500" />
          </button>
        </div>

        <div className="space-y-8 p-6">
          <section>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
              <Save size={18} />
              데이터 관리
            </h3>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
              <h4 className="mb-2 font-semibold text-slate-700">파일로 관리</h4>
              <p className="mb-4 text-xs text-slate-500">
                저장한 데이터 파일을 불러오거나 현재 상태를 내보냅니다.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onExportFile}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-green-600 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  <Download size={16} />
                  내보내기
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <Upload size={16} />
                  가져오기
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
            <p className="mt-2 text-xs text-blue-600">
              파일을 불러오면 저장된 <strong>배정 결과가 즉시 화면에 표시</strong>됩니다.
            </p>
          </section>

          <hr className="border-slate-200" />

          <section>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
              <SettingsIcon size={18} />
              프로그램 옵션
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <Type size={18} className="text-slate-500" />
                  <div>
                    <span className="font-medium text-slate-700">학급 이름</span>
                    <p className="text-xs text-slate-500">제목과 인쇄물에 표시될 이름</p>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 p-2 focus:ring-2 focus:ring-blue-500 sm:w-48"
                  value={classNameValue}
                  onChange={(e) => setClassNameValue(e.target.value)}
                />
              </div>

              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <History size={18} className="text-slate-500" />
                  <div>
                    <span className="font-medium text-slate-700">이전 구역 겹침 방지</span>
                    <p className="text-xs text-slate-500">저장한 이전 기록과 겹치지 않도록 배정합니다.</p>
                  </div>
                </div>
                <select
                  className="w-full rounded-2xl border border-slate-300 p-2 focus:ring-2 focus:ring-blue-500 sm:w-32"
                  value={settings.avoidPrevious ? 'on' : 'off'}
                  onChange={(e) => handleChange('avoidPrevious', e.target.value)}
                >
                  <option value="off">OFF</option>
                  <option value="on">ON</option>
                </select>
              </div>

              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <Timer size={18} className="text-slate-500" />
                  <div>
                    <span className="font-medium text-slate-700">카운트다운 (5초)</span>
                    <p className="text-xs text-slate-500">배정 시작 후 효과음과 함께 카운트다운합니다.</p>
                  </div>
                </div>
                <select
                  className="w-full rounded-2xl border border-slate-300 p-2 focus:ring-2 focus:ring-blue-500 sm:w-32"
                  value={settings.enableCountdown ? 'on' : 'off'}
                  onChange={(e) => handleChange('enableCountdown', e.target.value)}
                >
                  <option value="off">OFF</option>
                  <option value="on">ON</option>
                </select>
              </div>

              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <EyeOff size={18} className="text-slate-500" />
                  <div>
                    <span className="font-medium text-slate-700">배정 결과 가리기</span>
                    <p className="text-xs text-slate-500">결과를 가려 두고 클릭해서 확인할 수 있습니다.</p>
                  </div>
                </div>
                <select
                  className="w-full rounded-2xl border border-slate-300 p-2 focus:ring-2 focus:ring-blue-500 sm:w-32"
                  value={settings.enableHiddenZones ? 'on' : 'off'}
                  onChange={(e) => handleChange('enableHiddenZones', e.target.value)}
                >
                  <option value="off">OFF</option>
                  <option value="on">ON</option>
                </select>
              </div>

              <div className="flex flex-col justify-between gap-2 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <PartyPopper size={18} className="text-slate-500" />
                  <div>
                    <span className="font-medium text-slate-700">빵빠레 효과</span>
                    <p className="text-xs text-slate-500">결과 발표 때 축하 효과음을 재생합니다.</p>
                  </div>
                </div>
                <select
                  className="w-full rounded-2xl border border-slate-300 p-2 focus:ring-2 focus:ring-blue-500 sm:w-32"
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

        <div className="flex justify-end border-t border-slate-200 bg-slate-50 p-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl bg-blue-600 px-6 py-2 font-bold text-white shadow transition hover:bg-blue-700"
          >
            설정 완료
          </button>
        </div>
      </div>
    </div>
  );
};
