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

export type AppState = 'input' | 'counting' | 'waiting_reveal' | 'result';
