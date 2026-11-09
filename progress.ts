import { ExerciseId } from './exercises/types';
import { getStored, setStored } from './storage';

const STORAGE_KEY = 'zihnify-progress-v1';
export const FREEZES_PER_MONTH = 2;

export type SavedProgress = {
  completed: Record<ExerciseId, number[]>;
  lastPlayed: Record<ExerciseId, number>;
  streak: number;
  freezes: number;
  lastActiveDate: string | null;
  lastFreezeGrantMonth: string | null;
  todayClearedDate: string | null;
  todayCleared: ExerciseId[];
  lessonsRead: string[];
  lessonStreak: number;
  lastLessonDate: string | null;
};

export const EMPTY_DONE: Record<ExerciseId, number[]> = {
  find: [],
  odd: [],
  track: [],
  wait: [],
  sequence: [],
};

export const EMPTY_LAST: Record<ExerciseId, number> = {
  find: 0,
  odd: 0,
  track: 0,
  wait: 0,
  sequence: 0,
};

export const EMPTY_PROGRESS: SavedProgress = {
  completed: EMPTY_DONE,
  lastPlayed: EMPTY_LAST,
  streak: 0,
  freezes: 0,
  lastActiveDate: null,
  lastFreezeGrantMonth: null,
  todayClearedDate: null,
  todayCleared: [],
  lessonsRead: [],
  lessonStreak: 0,
  lastLessonDate: null,
};

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export function todayKey(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function monthKey(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;
}

function dayIndex(key: string) {
  const [year, month, day] = key.split('-').map(Number);
  return Date.UTC(year, month - 1, day) / 86400000;
}

export function daysBetween(from: string, to: string) {
  return dayIndex(to) - dayIndex(from);
}

export function applyCalendar(progress: SavedProgress, now = new Date()): SavedProgress {
  const next = { ...progress };
  const month = monthKey(now);
  if (next.lastFreezeGrantMonth !== month) {
    next.freezes += FREEZES_PER_MONTH;
    next.lastFreezeGrantMonth = month;
  }

  const today = todayKey(now);
  if (!next.lastActiveDate || next.streak === 0) {
    return next;
  }

  const gap = daysBetween(next.lastActiveDate, today);
  if (gap <= 1) {
    return next;
  }

  const missed = gap - 1;
  if (missed <= next.freezes) {
    next.freezes -= missed;
    return next;
  }

  next.streak = 0;
  return next;
}

export function recordPractice(progress: SavedProgress, now = new Date()): SavedProgress {
  const synced = applyCalendar(progress, now);
  const today = todayKey(now);
  if (synced.lastActiveDate === today) {
    return synced;
  }
  return {
    ...synced,
    streak: synced.streak + 1,
    lastActiveDate: today,
  };
}

export function todaysCleared(progress: SavedProgress, now = new Date()): ExerciseId[] {
  const today = todayKey(now);
  if (progress.todayClearedDate !== today) {
    return [];
  }
  return progress.todayCleared;
}

export function lessonDoneToday(progress: SavedProgress, now = new Date()) {
  return progress.lastLessonDate === todayKey(now);
}

export function recordLesson(
  progress: SavedProgress,
  lessonId: string,
  now = new Date()
): SavedProgress {
  const today = todayKey(now);
  const lessonsRead = progress.lessonsRead.includes(lessonId)
    ? progress.lessonsRead
    : [...progress.lessonsRead, lessonId];

  if (progress.lastLessonDate === today) {
    return { ...progress, lessonsRead };
  }

  const prev = progress.lastLessonDate;
  const nextStreak =
    prev && daysBetween(prev, today) === 1 ? progress.lessonStreak + 1 : 1;

  return {
    ...progress,
    lessonsRead,
    lastLessonDate: today,
    lessonStreak: nextStreak,
  };
}

export function recordDailyClear(
  progress: SavedProgress,
  id: ExerciseId,
  now = new Date()
): SavedProgress {
  const today = todayKey(now);
  const current = todaysCleared(progress, now);
  if (current.includes(id)) {
    return {
      ...progress,
      todayClearedDate: today,
      todayCleared: current,
    };
  }
  return {
    ...progress,
    todayClearedDate: today,
    todayCleared: [...current, id],
  };
}

export async function loadProgress(): Promise<SavedProgress> {
  const raw = await getStored(STORAGE_KEY);
  if (!raw) {
    return applyCalendar({ ...EMPTY_PROGRESS });
  }
  try {
    const parsed = JSON.parse(raw) as Partial<SavedProgress>;
    return applyCalendar({
      ...EMPTY_PROGRESS,
      ...parsed,
      completed: { ...EMPTY_DONE, ...parsed.completed },
      lastPlayed: { ...EMPTY_LAST, ...parsed.lastPlayed },
      todayCleared: Array.isArray(parsed.todayCleared)
        ? parsed.todayCleared
        : [],
      lessonsRead: Array.isArray(parsed.lessonsRead) ? parsed.lessonsRead : [],
    });
  } catch {
    return applyCalendar({ ...EMPTY_PROGRESS });
  }
}

export async function saveProgress(progress: SavedProgress) {
  await setStored(STORAGE_KEY, JSON.stringify(progress));
}

export function freshProgress(): SavedProgress {
  return applyCalendar({
    ...EMPTY_PROGRESS,
    completed: { find: [], odd: [], track: [], wait: [], sequence: [] },
    lastPlayed: { ...EMPTY_LAST },
    todayCleared: [],
    lessonsRead: [],
  });
}
