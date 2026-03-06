import {
  BookOpenText,
  CloudSun,
  GraduationCap,
  LayoutGrid,
  Sparkles,
  WandSparkles,
} from 'lucide-react';
import { DashboardCardItem } from '../types';

export const classManagementTools: DashboardCardItem[] = [
  {
    title: '청소구역 배정',
    description: '학생 수와 구역 수를 바로 맞춰 공정하게 배정하고, 공개 연출과 인쇄까지 한 번에 처리합니다.',
    highlight: '학급 운영 루틴을 빠르게 정리하는 대표 도구',
    href: '/cleaning',
    kicker: 'Class Flow',
    ctaLabel: '도구 열기',
    accent: 'blue',
    icon: Sparkles,
    badge: '운영 중',
  },
  {
    title: 'RBF Word Search',
    description: '수업 도입, 영어 활동, 자투리 시간용 낱말 찾기 도구를 앱 안에서 바로 실행할 수 있게 연결했습니다.',
    highlight: '교실 활동 전환이 필요한 순간에 바로 꺼내 쓰는 단어 탐색 도구',
    href: '/wordsearch',
    kicker: 'Lesson Boost',
    ctaLabel: '활동 열기',
    accent: 'green',
    icon: WandSparkles,
    badge: '신규',
  },
];

export const personalProjects: DashboardCardItem[] = [
  {
    title: '대구 날씨 앱',
    description: '지역 날씨를 빠르게 확인하고 등하교, 야외 활동, 행사 준비 판단에 활용할 수 있습니다.',
    highlight: '학교 운영과 생활지도를 위한 실용 정보',
    href: 'https://daeguwa.netlify.app/',
    kicker: 'Daily Utility',
    ctaLabel: '사이트 열기',
    accent: 'blue',
    icon: CloudSun,
    external: true,
  },
  {
    title: 'SAT 고난도 어휘 학습',
    description: '고급 어휘를 반복 학습할 수 있도록 설계된 영어 학습용 프로젝트입니다.',
    highlight: '시험 대비와 심화 수업용 단어 훈련',
    href: 'https://gemshw.netlify.app/',
    kicker: 'English Lab',
    ctaLabel: '사이트 열기',
    accent: 'amber',
    icon: GraduationCap,
    external: true,
  },
  {
    title: '영차영단',
    description: '단계별 어휘 학습 흐름을 중심으로 만든 중학생 대상 영어 단어 학습 보조 도구입니다.',
    highlight: '학년별 학습 루틴에 맞춘 어휘 훈련',
    href: 'https://edpp-m.netlify.app/',
    kicker: 'Vocabulary',
    ctaLabel: '사이트 열기',
    accent: 'slate',
    icon: BookOpenText,
    external: true,
  },
];

export const dashboardSignals = [
  {
    label: '빠른 실행',
    value: '2개',
    description: '학급 운영에 바로 쓰는 핵심 도구',
  },
  {
    label: '교사 관점',
    value: '현장형',
    description: '준비 시간을 줄이고 즉시 활용하도록 구성',
  },
  {
    label: '수업 연결',
    value: '활동 중심',
    description: '운영 도구와 학습 활동을 한 화면에서 연결',
  },
];

export const designPrinciples = [
  {
    title: '빠른 시선 이동',
    description: '교사용 대시보드답게 첫 화면에서 도구 목적과 실행 경로가 바로 보이도록 구성했습니다.',
    icon: LayoutGrid,
  },
  {
    title: '학교 톤의 안정감',
    description: '과한 네온 대신 교실과 행정 화면에 어울리는 블루, 그린, 슬레이트 계열로 정리했습니다.',
    icon: Sparkles,
  },
];
