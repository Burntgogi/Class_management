import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Student, Zone, Settings, AppState } from '../types';
import { SettingsPanel } from '../components/SettingsPanel';
import { InputSection } from '../components/InputSection';
import { ResultsSection } from '../components/ResultsSection';
import { CountdownOverlay } from '../components/CountdownOverlay';
import { ArrowLeft, Home, Settings as SettingsIcon, Shuffle, Sparkles, Users } from 'lucide-react';
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
  const activeStudentsCount = students.filter((student) => !student.isExcluded).length;
  const totalCapacity = zones.reduce((sum, zone) => sum + zone.allocation, 0);
  const balanceText =
    activeStudentsCount === totalCapacity
      ? '학생 수와 구역 정원이 정확히 맞습니다.'
      : `현재 ${activeStudentsCount}명 배정 대상, 구역 정원은 ${totalCapacity}명입니다.`;

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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_26%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_38%,#eef4ff_100%)]">
      <div className="mx-auto max-w-7xl animate-fade-in px-4 py-6 md:px-8 md:py-8">
        <div className="flex flex-wrap items-center gap-3 no-print">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-200 hover:text-sky-700"
          >
            <ArrowLeft size={16} />
            <Home size={16} />
            메인으로
          </button>
          {appState === 'input' && (
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-200 hover:text-sky-700"
              title="설정 및 데이터 관리"
            >
              <SettingsIcon size={16} />
              설정 및 데이터
            </button>
          )}
        </div>

        <section className={`mt-4 overflow-hidden rounded-[36px] border border-white/70 bg-white/80 shadow-[0_35px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur ${appState === 'result' ? 'no-print' : ''}`}>
          <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                <Sparkles size={14} />
                Cleaning Workflow
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                {classNameValue} 청소구역 배정
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                학급 인원과 청소 구역을 맞추면 공정하게 배정하고, 공개 연출과 결과 저장까지 바로 처리합니다.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] bg-slate-950 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-200">배정 대상</p>
                  <p className="mt-3 text-3xl font-semibold">{activeStudentsCount}</p>
                  <p className="mt-2 text-sm text-slate-300">제외되지 않은 학생 수</p>
                </div>
                <div className="rounded-[24px] bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">구역 수</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">{zones.length}</p>
                  <p className="mt-2 text-sm text-slate-500">현재 관리 중인 청소 구역</p>
                </div>
                <div className="rounded-[24px] bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">정원</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">{totalCapacity}</p>
                  <p className="mt-2 text-sm text-slate-500">배정 가능한 전체 인원</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-sky-600 p-3 text-white">
                    <Users size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">배정 전 확인</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{balanceText}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Guide</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <li>학생 명단은 번호와 이름을 함께 입력하거나 이름만 넣어도 됩니다.</li>
                  <li>결석이나 제외 대상은 오른쪽 목록에서 바로 토글할 수 있습니다.</li>
                  <li>설정에서 이전 구역 겹침 방지, 카운트다운, 결과 가리기를 켤 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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
        <section className="mt-8 space-y-8">
          <InputSection
            students={students}
            zones={zones}
            setStudents={setStudents}
            setZones={setZones}
          />

          <div className="flex justify-center">
            <div className="rounded-[28px] border border-white/70 bg-white/90 px-6 py-6 text-center shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Ready to Assign</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">랜덤 배정을 시작합니다.</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                학생과 구역 구성이 맞으면 바로 추첨을 시작하고 결과를 공개합니다.
              </p>
              <div className="mt-6 flex flex-col items-center gap-2">
                <button
                  onClick={handleAssign}
                  className="group inline-flex items-center justify-center rounded-2xl bg-sky-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-sky-600/25 transition-all duration-200 hover:bg-sky-700 active:scale-95"
                >
                  <Shuffle className="mr-2 transition-transform duration-500 group-hover:rotate-180" />
                  랜덤 배정 시작하기
                </button>
                {settings.avoidPrevious && (
                  <p className="text-xs font-medium text-sky-700">
                    이전 구역 겹침 방지 모드가 활성화되어 있습니다.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
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

      <footer className="mt-12 text-center text-sm text-slate-500 no-print pb-4">
        <p>
          제작자: 교사 박준민 (junmini84@daegun.hs.kr) - 해당 제작물의 저작권은 교사 박준민과 ARG에 있습니다.<br />
          해당 페이지는 AI를 기반으로 제작되었습니다.
        </p>
      </footer>
      </div>
    </div>
  );
};
