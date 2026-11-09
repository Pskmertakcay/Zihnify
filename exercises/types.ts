export type ExerciseId = 'find' | 'odd' | 'track' | 'wait' | 'sequence';

export const TOTAL_LEVELS = 35;

export type ExerciseLaunch = {
  onBack: () => void;
  initialLevel: number;
  onLevelComplete: (level: number) => void;
  onPractice: () => void;
};
