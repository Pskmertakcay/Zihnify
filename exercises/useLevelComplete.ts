import { useEffect, useRef, useState } from 'react';

export const STREAK_NEEDED = 5;

export function useLevelComplete(
  won: boolean,
  phase: string,
  level: number,
  onLevelComplete: (level: number) => void,
  onPractice: () => void,
  needed = STREAK_NEEDED
) {
  const [streak, setStreak] = useState(0);
  const [cleared, setCleared] = useState(false);
  const handled = useRef(false);

  useEffect(() => {
    if (phase !== 'result') {
      handled.current = false;
      return;
    }
    if (handled.current || cleared) {
      return;
    }
    handled.current = true;
    if (won) {
      onPractice();
      setStreak((prev) => {
        const next = prev + 1;
        if (next >= needed) {
          onLevelComplete(level);
          setCleared(true);
          return needed;
        }
        return next;
      });
    } else {
      setStreak(0);
    }
  }, [phase, won, level, onLevelComplete, onPractice, needed, cleared]);

  return { streak, needed, cleared };
}
