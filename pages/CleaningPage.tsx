import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Student, Zone, Settings, AppState } from '../types';
import { SettingsPanel } from '../components/SettingsPanel';
import { InputSection } from '../components/InputSection';
import { ResultsSection } from '../components/ResultsSection';
import { CountdownOverlay } from '../components/CountdownOverlay';
import { Shuffle, Settings as SettingsIcon, Home, ArrowLeft } from 'lucide-react';
import { useSoundEffects } from '../hooks/useSoundEffects';
import { usePersistence } from '../hooks/usePersistence';
import { useAssignmentLogic } from '../hooks/useAssignmentLogic';

const DEFAULT_STUDENTS = Array.from({ length: 25 }, (_, i) => ({
  id: `s-${i + 1}`,
  number: i + 1,
  name: `학생${i + 1}`
}));

const DEFAULT_ZONES = [
  { id: 'z-1', name: '교실 앞', allocation: 2 },
  { id: 'z-2', name: '교실 뒤', allocation: 2 },
  { id: 'z-3', name: '복도', allocation: 3 },
  { id: 'z-4', name: '칠판', allocation: 2 },
  { id: 'z-5', name: '창가', allocation: 2 },
  { id: 'z-6', name: '교탁', allocation: 1 },
  { id: 'z-7', name: '분리수거', allocation: 2 },
  { id: 'z-8', name: '특별구역', allocation: 2 },
  { id: 'z-9', name: '책상줄 맞추기', allocation: 9 },
];

export const CleaningPage: React.FC = () => {
  const navigate = useNavigate();
  // State
  const [students, setStudents] = useState<Student[]>(DEFAULT_STUDENTS);
  const [zones, setZones] = useState<Zone[]>(DEFAULT_ZONES);
  const [settings, setSettings] = useState<Settings>({
    enableCountdown: true,
    enableHiddenZones: true,
    enableFanfare: true,
    avoidPrevious: false,
  });
  const [classNameValue, setClassNameValue] = useState("우리반");
  const [appState, setAppState] = useState<AppState>('input');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const today = new Date();
  const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
  const title = `${dateStr} ${classNameValue} 청소구역 배정표`;

  // Hooks
  const { playTickSound, triggerResultEffects } = useSoundEffects();
  
  const { handleExportFile, handleImportFile } = usePersistence({
    classNameValue,
    zones,
    students,
    setClassNameValue,
    setZones,
    setStudents,
    setAppState
  });

  const { handleAssign } = useAssignmentLogic({
    students,
    zones,
    settings,
    setStudents,
    setAppState,
    triggerResultEffects
  });

  // Callbacks
  const onCountdownComplete = useCallback(() => {
    setAppState('waiting_reveal');
  }, []);

  const onRevealClick = useCallback(() => {
    triggerResultEffects(settings.enableFanfare);
    setAppState('result');
  }, [settings.enableFanfare, triggerResultEffects]);

  const reset = () => {
    setAppState('input');
  };

  const handlePlaySound = (type: 'tick' | 'complete') => {
    if (type === 'tick') playTickSound();
  };

  return (
    <div className="min-h-screen p-4 md:p-8 font-sans max-w-6xl mx-auto animate-fade-in">
      
      {/* Navigation Header (No Print) */}
      <div className="flex items-center gap-4 mb-4 no-print">
         <button 
           onClick={() => navigate('/')}
           className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50 transition-colors"
         >
           <ArrowLeft size={20} />
           <Home size={20} />
           <span className="font-semibold">메인으로</span>
         </button>
      </div>

      {/* Header */}
      <div className={`flex justify-between items-start mb-8 ${appState === 'result' ? 'no-print' : ''}`}>
        <div className="flex-1 text-center relative">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">
            🧹 {classNameValue} 청소구역 뽑기
          </h1>
          <p className="text-gray-500">공정하고 즐거운 청소 시간 만들기</p>
        </div>

        {/* Settings Button - Only visible in input mode */}
        {appState === 'input' && (
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="absolute right-4 top-4 md:static md:ml-4 p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition-all text-gray-600 group"
            title="설정 및 데이터 관리"
          >
            <SettingsIcon className="group-hover:rotate-45 transition-transform duration-300" />
            <span className="sr-only">설정</span>
          </button>
        )}
      </div>

      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        setSettings={setSettings}
        classNameValue={classNameValue}
        setClassNameValue={setClassNameValue}
        onExportFile={handleExportFile}
        onImportFile={handleImportFile}
      />

      {appState === 'input' && (
        <>
          <InputSection
            students={students}
            zones={zones}
            setStudents={setStudents}
            setZones={setZones}
          />

          <div className="mt-8 flex justify-center flex-col items-center gap-2">
            <button
              onClick={handleAssign}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg"
            >
              <Shuffle className="mr-2 group-hover:rotate-180 transition-transform duration-500" />
              랜덤 배정 시작하기
            </button>
            {settings.avoidPrevious && (
              <p className="text-xs text-blue-600 font-medium">
                ✨ 이전 구역 겹침 방지 모드 동작 중
              </p>
            )}
          </div>
        </>
      )}

      {(appState === 'counting' || appState === 'waiting_reveal') && (
        <CountdownOverlay
          startCount={5}
          onComplete={onCountdownComplete}
          onRevealClick={onRevealClick}
          state={appState}
          playSound={handlePlaySound}
        />
      )}

      {appState === 'result' && (
        <ResultsSection
          students={students}
          zones={zones}
          enableHiddenZones={settings.enableHiddenZones}
          onReset={reset}
          title={title}
          onSaveResult={handleExportFile}
        />
      )}

      {/* Footer (No Print) */}
      <footer className="mt-12 text-center text-gray-400 text-sm no-print pb-4">
        <p>
          제작자 : 교사 박준민 (junmini84@daegun.hs.kr) - 해당 제작물의 저작권은 교사 박준민과 ARG에 있습니다.<br />
          해당 페이지는 AI를 기반으로 제작되었습니다.
        </p>
      </footer>
    </div>
  );
};
