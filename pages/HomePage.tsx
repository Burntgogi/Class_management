import React from 'react';
import { Coffee, LayoutGrid, Mail, ShieldAlert } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';
import { classManagementTools, dashboardSignals, designPrinciples, personalProjects } from '../data/dashboard';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_28%),radial-gradient(circle_at_right,_rgba(16,185,129,0.12),_transparent_22%),linear-gradient(180deg,#f7fbff_0%,#f8fafc_38%,#eef4f7_100%)] text-slate-900">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 md:px-8 md:py-8">
        <section className="overflow-hidden rounded-[36px] border border-white/70 bg-white/85 shadow-[0_35px_90px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                <LayoutGrid size={14} />
                Teacher Dashboard
              </div>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                학급 운영과 수업 준비를 하나의 흐름으로 묶은 교사용 대시보드
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                교실에서 자주 쓰는 자동화 도구와 수업 보조 활동을 한곳에 배치했습니다.
                바로 실행할 수 있고, 설명은 짧고 명확하게 유지해 현장 사용성을 우선했습니다.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700">
                  <ShieldAlert size={16} />
                  소스코드 임의 사용 및 전용 금지
                </div>
                <a
                  href="https://patreon.com/burnt_gogi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <Coffee size={16} />
                  커피값 후원하기
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_25px_60px_-40px_rgba(15,23,42,0.9)]">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-200">Developer Note</p>
                <h2 className="mt-3 text-2xl font-semibold">박준민 교사의 스마트 랩</h2>
                <dl className="mt-5 space-y-3 text-sm text-slate-300">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-400">소속</dt>
                    <dd className="text-right">대건고등학교 교사</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-400">개발 방향</dt>
                    <dd className="text-right">교실에서 바로 쓰는 실용 도구</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-400">연락처</dt>
                    <dd className="flex items-center gap-2 text-right">
                      <Mail size={14} />
                      junmini84@daegun.hs.kr
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {dashboardSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-[24px] border border-slate-200 bg-white px-4 py-5 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.55)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {signal.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-slate-900">{signal.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{signal.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Core Tools</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                학급 경영 자동화 시스템
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              반복 업무를 줄이고 수업 전환을 빠르게 만들 수 있는 도구를 우선 배치했습니다.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {classManagementTools.map((item) => (
              <DashboardCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.4)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Renewal Direction</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              학교와 교사를 기준으로 화면을 다시 정리했습니다.
            </h2>
            <div className="mt-6 space-y-4">
              {designPrinciples.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.title} className="rounded-[24px] bg-slate-50 p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{principle.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Connected Projects</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                개인 개발 프로젝트
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {personalProjects.map((item) => (
                <DashboardCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/70 py-6 text-center text-xs text-slate-500 backdrop-blur">
        제작자: 교사 박준민 ([junmini84@daegun.hs.kr](mailto:junmini84@daegun.hs.kr)) | 해당 제작물의 저작권은 교사 박준민과 ARG에 있습니다.
      </footer>
    </div>
  );
};
