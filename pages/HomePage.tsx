import React from 'react';
import { Bell, Mail, Search } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';
import { classManagementTools, personalProjects } from '../data/dashboard';

const navItems = ['Home', 'Tools', 'Projects', 'Contact'];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#d9dbdf_0%,#d4d6da_100%)] px-4 py-5 text-slate-900 md:px-8 md:py-8">
      <main className="mx-auto max-w-7xl rounded-[40px] border border-white/70 bg-[#f8f7f4] p-4 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.55)] md:p-6">
        <section className="rounded-[34px] bg-white/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="inline-flex items-center rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.45)]">
                  박준민의 스마트랩
                </div>
                <nav className="grid grid-cols-2 gap-2 rounded-full bg-white/88 p-2 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.35)] sm:grid-cols-4">
                  {navItems.map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-full px-4 py-2 text-center text-sm font-medium ${
                        index === 0 ? 'bg-[#f97a4b] text-white' : 'text-slate-500'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 text-sm text-slate-400 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.35)]">
                  <Search size={16} />
                  <span>Search here...</span>
                </div>
                <div className="flex items-center gap-3 self-start rounded-full bg-white px-4 py-3 text-slate-500 shadow-[0_14px_28px_-22px_rgba(15,23,42,0.35)] sm:self-auto">
                  <Bell size={16} />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f97a4b] text-sm font-semibold text-white">
                    P
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.55fr_0.95fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,#f8e4ca_0%,#f3d4b9_28%,#8bd1d3_74%,#2f5f6d_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:min-h-[430px] md:p-7">
                <div className="absolute inset-x-10 top-14 h-28 rounded-[999px] bg-white/20 blur-3xl" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(45,92,102,0)_0%,rgba(19,47,56,0.82)_100%)]" />
                <div className="absolute left-0 right-0 top-16 h-32 bg-[radial-gradient(circle_at_left,_rgba(248,145,101,0.55),_transparent_42%),radial-gradient(circle_at_center,_rgba(255,255,255,0.28),_transparent_36%),radial-gradient(circle_at_right,_rgba(241,124,76,0.48),_transparent_34%)]" />
                <div className="absolute inset-x-0 bottom-24 h-24 bg-[linear-gradient(180deg,rgba(240,170,130,0)_0%,rgba(240,170,130,0.4)_100%)] opacity-80" />
                <div className="absolute left-6 top-20 h-24 w-40 rounded-[50%] bg-[#efb091]/55 blur-sm" />
                <div className="absolute left-24 top-16 h-28 w-56 bg-[#d79d80]/40 [clip-path:polygon(0_100%,28%_38%,44%_62%,61%_18%,79%_56%,100%_100%)]" />
                <div className="absolute left-56 top-[4.5rem] h-24 w-52 bg-[#e2aa8e]/45 [clip-path:polygon(0_100%,25%_48%,40%_72%,58%_16%,78%_62%,100%_100%)]" />
                <div className="absolute right-10 top-16 h-40 w-44 rounded-[44px] bg-[#f38a5d]/22 blur-sm" />
                <div className="absolute right-12 top-14 h-52 w-32 rounded-b-[34px] rounded-t-[90px] bg-[#ef8051]" />
                <div className="absolute right-20 top-20 h-24 w-[4.5rem] rounded-full bg-[#325f6a]" />
                <div className="absolute right-28 top-32 h-40 w-10 rounded-full bg-[#325f6a]" />
                <div className="absolute right-0 top-28 h-44 w-36 bg-[#e96d44] opacity-90 [clip-path:ellipse(56%_46%_at_72%_52%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,rgba(34,74,84,0)_0%,rgba(21,49,58,0.92)_100%)]" />

                <div className="relative flex h-full items-end">
                  <div className="w-full max-w-[390px] rounded-[30px] border border-black/5 bg-white/92 p-6 shadow-[0_20px_50px_-26px_rgba(15,23,42,0.55)] backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f97a4b]">
                      Developer Note
                    </p>
                    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                      박준민의 스마트랩
                    </h1>

                    <dl className="mt-6 grid gap-4 text-sm text-slate-700 md:grid-cols-[92px_1fr] md:gap-x-6">
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
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[30px] border border-[#ece7dd] bg-[#f8f5ef] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f97a4b]">
                    Classroom Hub
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-950">
                    필요한 도구를
                    <br />
                    바로 실행하는 학급 대시보드
                  </h2>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href="#tools"
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_12px_24px_-18px_rgba(15,23,42,0.35)]"
                    >
                      학급 경영 자동화 도구
                    </a>
                    <a
                      href="#projects"
                      className="rounded-full bg-[#f97a4b] px-4 py-2 text-sm font-medium text-white shadow-[0_12px_24px_-18px_rgba(249,122,75,0.7)]"
                    >
                      개인 개발 프로젝트
                    </a>
                  </div>
                </div>

                <div className="rounded-[30px] border border-[#ece7dd] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Sections
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-[22px] bg-[#f9efe8] px-4 py-4">
                      <span className="text-sm font-medium text-slate-700">학급 경영 자동화 도구</span>
                      <span className="h-3 w-3 rounded-full bg-[#f97a4b]" />
                    </div>
                    <div className="flex items-center justify-between rounded-[22px] bg-[#eef6f5] px-4 py-4">
                      <span className="text-sm font-medium text-slate-700">개인 개발 프로젝트</span>
                      <span className="h-3 w-3 rounded-full bg-[#2f7d81]" />
                    </div>
                  </div>
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
