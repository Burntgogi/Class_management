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
              {'\uBC15\uC900\uBBFC\uC758 \uC2A4\uB9C8\uD2B8\uB7A9'}
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-[34px] bg-[linear-gradient(180deg,#08142f_0%,#140a32_42%,#0a1734_62%,#050b1c_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] md:min-h-[430px] md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,90,184,0.24),transparent_16%),radial-gradient(circle_at_60%_28%,rgba(109,66,231,0.18),transparent_20%),linear-gradient(180deg,rgba(11,26,58,0)_0%,rgba(11,26,58,0.12)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-[52%] bg-[radial-gradient(circle,#fff7d6_1px,transparent_1.5px)] [background-size:24px_24px] opacity-55" />
              <div className="absolute inset-x-0 top-0 h-[52%] bg-[radial-gradient(circle,#7dc4ff_1px,transparent_1.7px)] [background-position:11px_9px] [background-size:37px_37px] opacity-22" />
              <div className="absolute inset-x-0 top-0 h-[52%] bg-[radial-gradient(circle,#ffffff_1.2px,transparent_1.9px)] [background-position:5px_18px] [background-size:53px_41px] opacity-18" />
              <div className="absolute right-[9%] top-[10%] h-24 w-24 rounded-full bg-[linear-gradient(180deg,#ffd84d_0%,#ff8f4e_45%,#ff3e8a_100%)] shadow-[0_0_34px_rgba(255,78,155,0.4)] md:h-36 md:w-36" />
              <div className="absolute right-[9%] top-[10%] h-24 w-24 rounded-full bg-[repeating-linear-gradient(180deg,transparent_0_11px,rgba(21,10,46,0.86)_11px_14px)] md:h-36 md:w-36" />
              <div className="absolute inset-x-0 bottom-[34%] h-px bg-[#46c9ff]/85 shadow-[0_0_16px_rgba(70,201,255,0.72)]" />
              <div className="absolute inset-x-0 bottom-[27%] h-[12%] bg-[linear-gradient(180deg,rgba(110,219,255,0.14)_0%,rgba(110,219,255,0.03)_54%,rgba(0,0,0,0)_100%)]" />
              <div className="absolute inset-x-0 bottom-[30%] h-[10%] bg-[radial-gradient(ellipse_at_center,rgba(100,225,255,0.18)_0%,rgba(100,225,255,0.05)_38%,transparent_72%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(180deg,#0d2952_0%,#091635_42%,#040914_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[repeating-linear-gradient(90deg,transparent_0_60px,rgba(70,201,255,0.3)_60px_62px)] opacity-80" />
              <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[repeating-linear-gradient(180deg,transparent_0_28px,rgba(70,201,255,0.3)_28px_30px)] opacity-82" />
              <div className="absolute inset-x-[12%] bottom-0 h-[34%] bg-[linear-gradient(90deg,transparent_0%,rgba(70,201,255,0.18)_18%,rgba(70,201,255,0.18)_82%,transparent_100%)] [clip-path:polygon(50%_0,100%_100%,0_100%)] opacity-75" />
              <div className="absolute inset-x-[22%] bottom-0 h-[34%] bg-[linear-gradient(90deg,transparent_0%,rgba(70,201,255,0.14)_25%,rgba(70,201,255,0.14)_75%,transparent_100%)] [clip-path:polygon(50%_0,100%_100%,0_100%)] opacity-70" />

              <div className="relative flex h-full items-center md:items-start">
                <div className="w-full max-w-[500px] rounded-[30px] border border-white/16 bg-[linear-gradient(180deg,rgba(247,233,217,0.88)_0%,rgba(242,225,205,0.78)_48%,rgba(113,148,168,0.64)_100%)] p-6 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.58)] backdrop-blur-lg md:mt-5 md:p-8">
                  <p className="inline-flex rounded-full bg-white/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b562f] shadow-[0_12px_24px_-18px_rgba(15,23,42,0.45)]">
                    Vibe Coding Note
                  </p>
                  <h1 className="mt-4 text-[2.2rem] font-semibold tracking-tight text-slate-950 md:text-[3.35rem]">
                    {'\uBC15\uC900\uBBFC\uC758 \uC2A4\uB9C8\uD2B8\uB7A9'}
                  </h1>

                  <dl className="mt-7 grid gap-y-4 text-[15px] md:grid-cols-[110px_1fr] md:gap-x-7 md:gap-y-[18px]">
                    <dt className="font-semibold text-[#8f563a]">{'\uC18C\uC18D'}</dt>
                    <dd className="font-semibold text-slate-800">{'\uB300\uAC74\uACE0\uB4F1\uD559\uAD50 \uAD50\uC0AC'}</dd>

                    <dt className="font-semibold text-[#8f563a]">{'\uAC1C\uBC1C \uBC29\uD5A5'}</dt>
                    <dd className="font-semibold text-slate-800">{'\uAD50\uC2E4\uC5D0\uC11C \uBC14\uB85C \uC4F0\uB294 \uC2E4\uC6A9 \uB3C4\uAD6C'}</dd>

                    <dt className="font-semibold text-[#b26a47]">{'\uC5F0\uB77D\uCC98'}</dt>
                    <dd className="flex items-center gap-3 break-all font-semibold text-[#fff2b8] drop-shadow-[0_2px_10px_rgba(7,30,44,0.82)]">
                      <Mail size={18} className="text-[#ffae68]" />
                      <span className="underline decoration-[#ffe3a7]/60 underline-offset-4">
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
            {'\uD559\uAE09 \uACBD\uC601 \uC790\uB3D9\uD654 \uB3C4\uAD6C'}
          </h2>
          <div className="grid items-stretch gap-5 lg:grid-cols-2">
            {classManagementTools.map((item) => (
              <DashboardCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-5 rounded-[34px] bg-white/88 p-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.32)] md:p-6">
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-slate-950">
            {'\uAC1C\uC778 \uAC1C\uBC1C \uD504\uB85C\uC81D\uD2B8'}
          </h2>
          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {personalProjects.map((item) => (
              <DashboardCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-4 max-w-7xl text-center text-xs text-slate-600">
        {'\uC81C\uC791\uC790: \uAD50\uC0AC \uBC15\uC900\uBBFC ([junmini84@daegun.hs.kr](mailto:junmini84@daegun.hs.kr)) | \uD574\uB2F9 \uC81C\uC791\uBB3C\uC758 \uC800\uC791\uAD8C\uC740 \uAD50\uC0AC \uBC15\uC900\uBBFC\uACFC ARG\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.'}
      </footer>
    </div>
  );
};
