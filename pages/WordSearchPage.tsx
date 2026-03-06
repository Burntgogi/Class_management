import React from 'react';
import { ArrowLeft, ExternalLink, Grid2X2, Home, MonitorPlay, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  '생활기록부 문장을 붙여 넣고 금칙어를 빠르게 점검',
  '교사가 기록 검토 전에 바로 확인할 수 있는 실무용 흐름',
  '학급 경영 도구 메뉴 안에서 바로 열어 준비 동선을 단축',
];

export const WordSearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_32%),linear-gradient(180deg,#f7fafc_0%,#eef6f3_42%,#f8fafc_100%)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 md:px-8 md:py-8">
        <div className="flex flex-wrap items-center gap-3 no-print">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-200 hover:text-emerald-700"
          >
            <ArrowLeft size={16} />
            <Home size={16} />
            메인으로
          </Link>
          <a
            href="https://rbfwordsearch.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <ExternalLink size={16} />
            새 창에서 열기
          </a>
        </div>

        <section className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur">
          <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                <Search size={14} />
                Record Check
              </div>
              <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                생활기록부 금칙어 찾기를 학급 경영 화면 안에서 바로 실행합니다.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                생활기록부 기록 속 금칙어를 빠르게 찾을 수 있도록 연결한 실무용 점검 도구입니다.
                기존 학급 운영 도구와 같은 흐름으로 배치해 검토 동선을 줄였습니다.
              </p>
            </div>

            <div className="grid gap-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-emerald-600 p-2 text-white">
                      <Grid2X2 size={18} />
                    </div>
                    <p className="text-sm leading-6 text-slate-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.4)]">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">도구 미리보기</h2>
              <p className="text-sm text-slate-500">앱 안에서 바로 실행할 수 있도록 임베드했습니다.</p>
            </div>
            <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500 md:inline-flex">
              <MonitorPlay size={14} />
              Classroom Display Ready
            </div>
          </div>
          <div className="bg-slate-950/95 p-2 md:p-3">
            <iframe
              title="생활기록부 금칙어 찾기"
              src="https://rbfwordsearch.netlify.app/"
              className="h-[72vh] min-h-[640px] w-full rounded-[24px] bg-white"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
