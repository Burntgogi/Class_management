import React from 'react';
import { Mail } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';
import { classManagementTools, personalProjects } from '../data/dashboard';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#d9dbdf_0%,#d4d6da_100%)] px-4 py-5 text-slate-900 md:px-8 md:py-8">
      <main className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-[#f8f7f4] p-4 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.55)] md:p-6">
        <section className="rounded-[34px] bg-white/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:p-5">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center self-start rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.45)]">
              박준민의 스마트랩
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,#f8e4ca_0%,#f3d4b9_28%,#8bd1d3_74%,#2f5f6d_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:min-h-[430px] md:p-7">
              <div className="absolute inset-x-10 top-14 h-28 rounded-[999px] bg-white/20 blur-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(45,92,102,0)_0%,rgba(19,47,56,0.82)_100%)]" />
              <div className="absolute left-0 right-0 top-16 h-32 bg-[radial-gradient(circle_at_left,_rgba(248,145,101,0.55),_transparent_42%),radial-gradient(circle_at_center,_rgba(255,255,255,0.28),_transparent_36%),radial-gradient(circle_at_right,_rgba(241,124,76,0.48),_transparent_34%)]" />
              <div className="absolute inset-x-0 bottom-24 h-24 bg-[linear-gradient(180deg,rgba(240,170,130,0)_0%,rgba(240,170,130,0.4)_100%)] opacity-80" />
              <div className="absolute left-6 top-20 h-24 w-40 rounded-[50%] bg-[#efb091]/55 blur-sm" />
              <div className="absolute left-24 top-16 h-28 w-56 bg-[#d79d80]/40 [clip-path:polygon(0_100%,28%_38%,44%_62%,61%_18%,79%_56%,100%_100%)]" />
              <div className="absolute left-56 top-[4.5rem] h-24 w-52 bg-[#e2aa8e]/45 [clip-path:polygon(0_100%,25%_48%,40%_72%,58%_16%,78%_62%,100%_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,rgba(34,74,84,0)_0%,rgba(21,49,58,0.92)_100%)]" />

              <div className="pointer-events-none absolute bottom-8 right-4 h-40 w-40 md:bottom-auto md:right-10 md:top-1/2 md:h-56 md:w-56 md:-translate-y-1/2">
                <div className="absolute inset-0 rounded-full bg-[#f07e4f]/18 blur-2xl" />
                <div className="absolute right-0 top-[30%] h-[50%] w-[56%] rounded-full bg-[#e96d44]/88" />
                <div className="absolute right-[18%] top-[10%] h-[62%] w-[32%] rounded-b-[38px] rounded-t-[88px] bg-[#ef8051]" />
                <div className="absolute right-[34%] top-[16%] h-[22%] w-[24%] rounded-full bg-[#2f6171]" />
                <div className="absolute right-[28%] top-[34%] h-[56%] w-[12%] rounded-full bg-[#2f6171]" />
                <div className="absolute left-[8%] top-[8%] w-[58%] rounded-[24px] bg-white/78 p-4 shadow-[0_20px_40px_-26px_rgba(15,23,42,0.4)] backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#f97a4b]" />
                    <span className="h-3 w-3 rounded-full bg-[#2f6a78]" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded-full bg-white/90" />
                    <div className="h-2 w-4/5 rounded-full bg-white/85" />
                    <div className="h-2 w-3/5 rounded-full bg-[#2f6a78]" />
                  </div>
                  <div className="mt-5 flex items-end gap-2">
                    <div className="h-8 w-4 rounded-full bg-[#2f6a78]" />
                    <div className="h-12 w-4 rounded-full bg-[#f97a4b]" />
                    <div className="h-7 w-4 rounded-full bg-[#f3c8aa]" />
                    <div className="h-10 w-4 rounded-full bg-[#84c5c6]" />
                  </div>
                </div>
              </div>

              <div className="relative flex h-full items-center">
                <div className="w-full max-w-[560px] rounded-[34px] border border-white/20 bg-[rgba(255,255,255,0.24)] p-7 shadow-[0_24px_56px_-26px_rgba(15,23,42,0.55)] backdrop-blur-md md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd7c6]">
                    Developer Note
                  </p>
                  <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    박준민의 스마트랩
                  </h1>

                  <dl className="mt-8 grid gap-y-5 text-base md:grid-cols-[120px_1fr] md:gap-x-8">
                    <dt className="font-semibold text-[#fce8dd]">소속</dt>
                    <dd className="font-semibold text-white">대건고등학교 교사</dd>

                    <dt className="font-semibold text-[#fce8dd]">개발 방향</dt>
                    <dd className="font-semibold text-white">교실에서 바로 쓰는 실용 도구</dd>

                    <dt className="font-semibold text-[#fce8dd]">연락처</dt>
                    <dd className="flex items-center gap-3 break-all font-semibold text-white">
                      <Mail size={18} className="text-[#ffe7db]" />
                      <span className="underline decoration-white/35 underline-offset-4">
                        junmini84@daegun.hs.kr
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="mt-5 rounded-[34px] bg-white/88 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.32)] md:p-6">
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-slate-950">
            학급 경영 자동화 도구
          </h2>
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            {classManagementTools.map((item) => (
              <DashboardCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-5 rounded-[34px] bg-white/88 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.32)] md:p-6">
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-slate-950">
            개인 개발 프로젝트
          </h2>
          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {personalProjects.map((item) => (
              <DashboardCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-4 max-w-7xl text-center text-xs text-slate-600">
        제작자: 교사 박준민 ([junmini84@daegun.hs.kr](mailto:junmini84@daegun.hs.kr)) | 해당 제작물의 저작권은 교사 박준민과 ARG에 있습니다.
      </footer>
    </div>
  );
};
