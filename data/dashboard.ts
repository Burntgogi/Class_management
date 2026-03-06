import { BookOpenText, CloudSun, GraduationCap, Sparkles, WandSparkles } from 'lucide-react';
import { DashboardCardItem } from '../types';

export const classManagementTools: DashboardCardItem[] = [
  {
    title: '청소구역 배정',
    description: '학생 수와 구역 정원을 맞춰 공정하게 배정하고, 결과 공개와 인쇄까지 한 번에 처리합니다.',
    href: '/cleaning',
    ctaLabel: '도구 열기',
    accent: 'blue',
    icon: Sparkles,
    badge: '운영 중',
  },
  {
    title: '생활기록부 금칙어 찾기',
    description: '생활기록부 기록 속 금칙어를 찾아줍니다.',
    href: '/wordsearch',
    ctaLabel: '도구 열기',
    accent: 'green',
    icon: WandSparkles,
    badge: '신규',
  },
];

export const personalProjects: DashboardCardItem[] = [
  {
    title: '대구 날씨 앱',
    description: '지역 날씨를 빠르게 확인하고 등하교, 야외 활동, 행사 준비 판단에 활용할 수 있습니다.',
    href: 'https://daeguwa.netlify.app/',
    ctaLabel: '사이트 열기',
    accent: 'blue',
    icon: CloudSun,
    external: true,
  },
  {
    title: 'SAT 고난도 어휘 학습',
    description: '고급 어휘를 반복 학습할 수 있도록 설계된 영어 학습용 프로젝트입니다.',
    href: 'https://gemshw.netlify.app/',
    ctaLabel: '사이트 열기',
    accent: 'amber',
    icon: GraduationCap,
    external: true,
  },
  {
    title: '영차영단',
    description: '단계별 어휘 학습 흐름을 중심으로 만든 중학생 대상 영어 학습 보조 도구입니다.',
    href: 'https://edpp-m.netlify.app/',
    ctaLabel: '사이트 열기',
    accent: 'slate',
    icon: BookOpenText,
    external: true,
  },
];
