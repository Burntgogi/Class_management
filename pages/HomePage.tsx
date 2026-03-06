import React from 'react';
import { Mail } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';
import { classManagementTools, personalProjects } from '../data/dashboard';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_26%),linear-gradient(180deg,#f8fbff_0%,#f8fafc_42%,#eef3f7_100%)] text-slate-900">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-6 md:px-8 md:py-8">
        <section className="rounded-[36px] border border-white/70 bg-white/88 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.38)] backdrop-blur">
          <div className="mx-auto max-w-3xl px-6 py-8 md:px-10 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Developer Note</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              박준민의 스마트랩
            </h1>

            <dl className="mt-8 grid gap-4 text-sm text-slate-700 md:grid-cols-[120px_1fr] md:gap-x-8">
              <dt className="font-semibold text-slate-500">소속</dt>
              <dd>대건고등학교 교사</dd>

              <dt className="font-semibold text-slate-500">개발 방향</dt>
              <dd>교실에서 바로 쓰는 실용 도구</dd>

              <dt className="font-semibold text-slate-500">연락처</dt>
              <dd className="flex items-center gap-2 break-all">
                <Mail size={16} className="text-slate-400" />
                junmini84@daegun.hs.kr
              </dd>
            </dl>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              학급 경영 자동화 도구
            </h2>
          </div>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {classManagementTools.map((item) => (
              <DashboardCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              개인 개발 프로젝트
            </h2>
          </div>
          <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
            {personalProjects.map((item) => (
              <DashboardCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/70 py-6 text-center text-xs text-slate-500 backdrop-blur">
        제작자: 교사 박준민 ([junmini84@daegun.hs.kr](mailto:junmini84@daegun.hs.kr)) | 해당 제작물의 저작권은 교사 박준민과 ARG에 있습니다.
      </footer>
    </div>
  );
};
