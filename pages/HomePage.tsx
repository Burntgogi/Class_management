import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ShieldAlert, Sparkles, Coffee } from 'lucide-react';

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Developer Header Section */}
            <header className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                        {/* Developer Profile */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                                🏫 학급 경영 프로그램 모음
                            </h1>

                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                    <span className="text-2xl">👨‍🏫</span> 개발자 소개
                                </h2>
                                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold min-w-20">개발자</span>
                                        <span>교사 박준민 (현 대건고등학교 교사)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold min-w-20">개발이유</span>
                                        <span>나 보기 편하자고 + 다른 선생님들께 도움을 드리고자 제작했습니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold min-w-20">연락처</span>
                                        <span className="flex items-center gap-1">
                                            <Mail size={16} /> junmini84@daegun.hs.kr
                                        </span>
                                    </li>
                                </ul>

                                <div className="mt-4 pt-4 border-t border-blue-200 flex flex-wrap gap-4 items-center">
                                    <div className="flex items-center gap-1 text-xs text-red-500 font-bold bg-white px-3 py-1 rounded-full border border-red-100">
                                        <ShieldAlert size={14} /> 소스코드 임의 사용 및 전용 금지
                                    </div>
                                    <a
                                        href="https://patreon.com/burnt_gogi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-orange-600 transition-colors shadow-sm"
                                    >
                                        <Coffee size={14} /> 커피값 후원하기 (Patreon)
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            {/* Dashboard Grid */}
            <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full space-y-12">

                {/* Section 1: Class Management */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-blue-600 pl-4">
                        ✨ 학급 경영 프로그램 모음
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Cleaning Assignment Card */}
                        <Link
                            to="/cleaning"
                            className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
                        >
                            <div className="h-40 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <Sparkles size={64} className="text-white opacity-80" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    청소구역 배정 프로그램
                                </h3>
                                <p className="text-gray-500 text-sm flex-1">
                                    우리 반 청소 구역을 공정하고 재미있게 랜덤으로 배정하세요.<br />
                                    1인 배정, 다인 배정, 빵빠레 효과까지!
                                </p>
                                <div className="mt-4 flex items-center text-blue-600 font-bold text-sm">
                                    실행하기 &rarr;
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Section 2: Personal Projects */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-l-4 border-purple-600 pl-4">
                        🚀 개인 개발 프로젝트 모음
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Daegu Weather App */}
                        <a
                            href="https://daeguwa.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
                        >
                            <div className="h-40 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                {/* Basic Cloud/Sun Icon representation if we don't import specific ones, or just reuse Sparkles/Coffee logic or add Sun/Book icons */}
                                <span className="text-6xl">🌤️</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                                    대구 날씨 앱
                                </h3>
                                <p className="text-gray-500 text-sm flex-1">
                                    대구 지역의 날씨 정보를 직관적으로 확인하세요.<br />
                                    (개인 프로젝트)
                                </p>
                                <div className="mt-4 flex items-center text-cyan-600 font-bold text-sm">
                                    바로가기 &rarr;
                                </div>
                            </div>
                        </a>

                        {/* SAT Vocab App */}
                        <a
                            href="https://gemshw.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
                        >
                            <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <span className="text-6xl">📚</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                                    SAT 고난이도 어휘 학습
                                </h3>
                                <p className="text-gray-500 text-sm flex-1">
                                    SAT를 대비하기 위한 필수 고급 어휘를 효율적으로 학습하세요.<br />
                                    (개인 프로젝트)
                                </p>
                                <div className="mt-4 flex items-center text-purple-600 font-bold text-sm">
                                    바로가기 &rarr;
                                </div>
                            </div>
                        </a>

                    </div>
                </section>
            </main>

            <footer className="bg-white border-t border-gray-200 py-6 text-center text-gray-400 text-xs">
                제작자 : 교사 박준민 (junmini84@daegun.hs.kr) - 해당 제작물의 저작권은 교사 박준민과 ARG에 있습니다.<br />
                해당 페이지는 AI를 기반으로 제작되었습니다.
            </footer>
        </div>
    );
};
