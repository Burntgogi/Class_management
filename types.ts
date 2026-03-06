import { LucideIcon } from 'lucide-react';

export interface Student {
  id: string;
  number: number;
  name: string;
  assignedZoneId?: string;
  assignedZoneName?: string;
  previousZoneId?: string; // To track history
  previousZoneName?: string;
  isExcluded?: boolean;
}

export interface Zone {
  id: string;
  name: string;
  allocation: number;
}

export interface Settings {
  enableCountdown: boolean;
  enableHiddenZones: boolean;
  enableFanfare: boolean;
  avoidPrevious: boolean; // New setting
}

export interface DashboardCardItem {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  accent: 'blue' | 'green' | 'amber' | 'slate';
  icon: LucideIcon;
  badge?: string;
  external?: boolean;
  highlight?: string;
  kicker?: string;
}

export type AppState = 'input' | 'counting' | 'waiting_reveal' | 'result';
