import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../components/BackButton';
import { EXERCISE_MARK, useLocale, useT } from '../i18n';
import { Colors, useColors, useSharedStyles } from '../theme';
import { ExerciseLaunch } from './types';
import { useLevelComplete } from './useLevelComplete';

type Phase = 'intro' | 'cue' | 'move' | 'pick' | 'result';

type Ball = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const SIZE = 44;

function ballCount(level: number) {
  return Math.min(6, 3 + Math.floor((level - 1) / 2));
}

function speedFor(level: number) {
  return 2.4 + level * 0.45;
}

function cueMs(level: number) {
  return Math.max(1600, 3400 - level * 180);
}

function moveMs(level: number) {
  return Math.min(8000, 3200 + level * 450);
}

function spawn(
  count: number,
  width: number,
  height: number,
  level: number
): Ball[] {
  const speed = speedFor(level);
  const maxX = Math.max(SIZE, width - SIZE);
  const maxY = Math.max(SIZE, height - SIZE);
  return Array.from({ length: count }, (_, id) => {
    const angle = (Math.PI * 2 * id) / count + 0.4;
    const col = count === 3 ? id : id % 2;
    const row = count === 3 ? 0 : Math.floor(id / 2);
    const cols = count === 3 ? 3 : 2;
    const rows = count === 3 ? 1 : Math.ceil(count / 2);
    const xGap = (maxX - SIZE) / Math.max(1, cols - 1);
    const yGap = (maxY - SIZE) / Math.max(1, rows);
    return {
      id,
      x: SIZE + col * xGap,
      y: SIZE + row * yGap + (count === 3 ? (maxY - SIZE) / 2 : 0),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
    };
  });
}

function step(balls: Ball[], width: number, height: number): Ball[] {
  const maxX = Math.max(0, width - SIZE);
  const maxY = Math.max(0, height - SIZE);
  return balls.map((ball) => {
    let { x, y, vx, vy } = ball;
    x += vx;
    y += vy;
    if (x <= 0) {
      x = 0;
      vx = Math.abs(vx);
    } else if (x >= maxX) {
      x = maxX;
      vx = -Math.abs(vx);
    }
    if (y <= 0) {
      y = 0;
      vy = Math.abs(vy);
    } else if (y >= maxY) {
      y = maxY;
      vy = -Math.abs(vy);
    }
    return { ...ball, x, y, vx, vy };
  });
}

export function KeepTracking({
  onBack,
  initialLevel,
  onLevelComplete,
  onPractice,
}: ExerciseLaunch) {
  const [level, setLevel] = useState(initialLevel);
  const [phase, setPhase] = useState<Phase>('cue');
  const [balls, setBalls] = useState<Ball[]>([]);
  const [targetId, setTargetId] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const ballsRef = useRef<Ball[]>([]);
  const arena = useRef({ w: 320, h: 380 });
  const loop = useRef<ReturnType<typeof setInterval> | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const shared = useSharedStyles();
  const local = stylesFor(useColors());
  const t = useT();
  const { locale } = useLocale();
  const mark = EXERCISE_MARK[locale];

  const count = ballCount(level);
  const correct = picked === targetId;

  function stopLoop() {
    if (loop.current != null) {
      clearInterval(loop.current);
      loop.current = null;
    }
  }

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    stopLoop();
  }

  function startRound(nextLevel: number) {
    clearTimers();
    const next = spawn(
      ballCount(nextLevel),
      arena.current.w,
      arena.current.h,
      nextLevel
    );
    const target = next[Math.floor(Math.random() * next.length)].id;
    ballsRef.current = next;
    setLevel(nextLevel);
    setBalls(next);
    setTargetId(target);
    setPicked(null);
    setPhase('cue');
  }

  const { streak, needed, cleared } = useLevelComplete(
    correct,
    phase,
    level,
    onLevelComplete,
    onPractice
  );

  useEffect(() => {
    startRound(initialLevel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== 'cue') {
      return;
    }
    clearTimers();
    timers.current.push(
      setTimeout(() => setPhase('move'), cueMs(level))
    );
    return clearTimers;
  }, [phase, level]);

  useEffect(() => {
    if (phase !== 'move') {
      return;
    }
    stopLoop();
    const started = Date.now();
    const duration = moveMs(level);
    loop.current = setInterval(() => {
      const next = step(ballsRef.current, arena.current.w, arena.current.h);
      ballsRef.current = next;
      setBalls(next);
      if (Date.now() - started >= duration) {
        stopLoop();
        setPhase('pick');
      }
    }, 16);
    return stopLoop;
  }, [phase, level]);

  function tapBall(id: number) {
    if (phase !== 'pick') {
      return;
    }
    setPicked(id);
    setPhase('result');
  }

  return (
    <View style={shared.screen}>
      <BackButton onPress={onBack} />
      <Text style={shared.brand}>Zihnify</Text>
      <Text style={shared.meta}>
        {t('play.metaTrack', { level, count, streak, needed })}
      </Text>

      {phase === 'intro' && (
        <View style={shared.card}>
          <Text style={shared.title}>{t('exercises.track.title')}</Text>
          <Text style={shared.body}>{t('howTo.track.body')}</Text>
          <Pressable
            accessibilityRole="button"
            style={shared.primary}
            onPress={() => startRound(1)}
          >
            <Text style={shared.primaryText}>{t('play.start')}</Text>
          </Pressable>
        </View>
      )}

      {phase !== 'intro' && phase !== 'result' && (
        <View style={shared.stage}>
          <Text style={shared.hint}>
            {phase === 'cue'
              ? t('play.trackCue', { mark })
              : phase === 'move'
                ? t('play.trackFollow')
                : t('play.trackPick')}
          </Text>
          <View
            style={local.arena}
            onLayout={(event) => {
              arena.current = {
                w: event.nativeEvent.layout.width,
                h: event.nativeEvent.layout.height,
              };
            }}
          >
            {balls.map((ball) => {
              const isTarget = ball.id === targetId;
              const marking = phase === 'cue' && isTarget;
              const dim = phase === 'cue' && !isTarget;
              const box = marking ? 72 : SIZE;
              return (
                <Pressable
                  key={ball.id}
                  accessibilityRole="button"
                  accessibilityLabel={
                    marking
                      ? t('play.trackTarget')
                      : t('play.trackObject', { n: ball.id + 1 })
                  }
                  disabled={phase !== 'pick'}
                  onPress={() => tapBall(ball.id)}
                  style={[
                    local.ball,
                    {
                      left: ball.x - (marking ? 14 : 0),
                      top: ball.y - (marking ? 14 : 0),
                      width: box,
                      height: box,
                      borderRadius: box / 2,
                      opacity: dim ? 0.22 : 1,
                      borderWidth: marking ? 5 : 0,
                      borderColor: '#E8C36A',
                    },
                  ]}
                >
                  {marking ? <Text style={local.mark}>{mark}</Text> : null}
                </Pressable>
              );
            })}
          </View>
        </View>
      )}

      {phase === 'result' && (
        <View style={shared.card}>
          <Text style={shared.title}>
            {correct ? t('play.correct') : t('play.trackWrong')}
          </Text>
          <Text style={shared.body}>
            {correct ? t('play.trackHitBody') : t('play.trackMissBody')}
          </Text>
          <Pressable
            accessibilityRole="button"
            style={shared.primary}
            onPress={() => (cleared ? onBack() : startRound(level))}
          >
            <Text style={shared.primaryText}>
              {cleared
                ? t('play.backToLevels')
                : correct
                  ? t('play.continueStreak', { streak, needed })
                  : t('play.again')}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

function stylesFor(colors: Colors) {
  return StyleSheet.create({
  arena: {
    width: '100%',
    flex: 1,
    maxHeight: 420,
    minHeight: 320,
    backgroundColor: colors.card,
    borderRadius: 24,
    overflow: 'hidden',
  },
  ball: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mark: {
    color: '#F4F1EA',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
}
