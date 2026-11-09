import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../components/BackButton';
import { useT } from '../i18n';
import { Colors, useColors, useSharedStyles } from '../theme';
import { ExerciseLaunch } from './types';
import { useLevelComplete } from './useLevelComplete';

type Phase = 'intro' | 'cue' | 'play' | 'result';
type Kind = 'circle' | 'square' | 'plus' | 'triangle';
type Token = { kind: Kind; color: string };

const EASY = ['#1F6B4A', '#C43A32', '#2B5EA8', '#D4A017'] as const;
const HARD = ['#1A7A62', '#B44A28', '#3A5F9A', '#C07A18'] as const;
const KINDS: Kind[] = ['circle', 'square', 'plus', 'triangle'];

function gridSize(level: number) {
  if (level <= 2) {
    return 3;
  }
  if (level <= 4) {
    return 4;
  }
  return 5;
}

function cueMs(level: number) {
  return Math.max(700, 1800 - level * 120);
}

function searchMs(level: number) {
  return Math.max(4000, 12000 - level * 800);
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function sameToken(a: Token, b: Token) {
  return a.kind === b.kind && a.color === b.color;
}

function randomToken(level: number): Token {
  const palette = level <= 2 ? EASY : HARD;
  return { kind: pick(KINDS), color: pick(palette) };
}

function distractor(target: Token, level: number): Token {
  for (let i = 0; i < 24; i += 1) {
    const next = randomToken(level);
    if (!sameToken(next, target)) {
      return next;
    }
  }
  const otherKind = KINDS.find((kind) => kind !== target.kind) ?? 'plus';
  return { kind: otherKind, color: target.color };
}

function buildRound(level: number) {
  const cols = gridSize(level);
  const count = cols * cols;
  const target = randomToken(level);
  const targetIndex = Math.floor(Math.random() * count);
  const tokens = Array.from({ length: count }, (_, index) =>
    index === targetIndex ? target : distractor(target, level)
  );
  return { cols, tokens, target, targetIndex };
}

function Shape({ token, size }: { token: Token; size: number }) {
  const fill = token.color;

  if (token.kind === 'circle') {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: fill,
        }}
      />
    );
  }

  if (token.kind === 'square') {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: Math.max(3, Math.round(size / 10)),
          backgroundColor: fill,
        }}
      />
    );
  }

  if (token.kind === 'triangle') {
    const half = size / 2;
    return (
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: half,
          borderRightWidth: half,
          borderBottomWidth: size,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: fill,
        }}
      />
    );
  }

  const bar = Math.max(5, Math.round(size / 3.4));
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          position: 'absolute',
          width: size,
          height: bar,
          borderRadius: 2,
          backgroundColor: fill,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: bar,
          height: size,
          borderRadius: 2,
          backgroundColor: fill,
        }}
      />
    </View>
  );
}

export function FindTheTarget({
  onBack,
  initialLevel,
  onLevelComplete,
  onPractice,
}: ExerciseLaunch) {
  const [level, setLevel] = useState(initialLevel);
  const [phase, setPhase] = useState<Phase>('cue');
  const [round, setRound] = useState(() => buildRound(initialLevel));
  const [picked, setPicked] = useState<number | null>(null);
  const [outcome, setOutcome] = useState<'hit' | 'miss' | 'late'>('hit');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const shared = useSharedStyles();
  const local = stylesFor(useColors());
  const t = useT();

  const correct = picked === round.targetIndex;
  const tile = round.cols === 3 ? 88 : round.cols === 4 ? 68 : 54;
  const glyph = round.cols === 5 ? 28 : round.cols === 4 ? 34 : 36;

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function startRound(nextLevel: number) {
    clearTimers();
    setLevel(nextLevel);
    setRound(buildRound(nextLevel));
    setPicked(null);
    setPhase('cue');
  }

  const { streak, needed, cleared } = useLevelComplete(
    outcome === 'hit',
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
    timers.current.push(setTimeout(() => setPhase('play'), cueMs(level)));
    return clearTimers;
  }, [phase, level]);

  useEffect(() => {
    if (phase !== 'play') {
      return;
    }
    clearTimers();
    timers.current.push(
      setTimeout(() => {
        setOutcome('late');
        setPhase('result');
      }, searchMs(level))
    );
    return clearTimers;
  }, [phase, level]);

  function tapCell(index: number) {
    if (phase !== 'play') {
      return;
    }
    clearTimers();
    setPicked(index);
    setOutcome(index === round.targetIndex ? 'hit' : 'miss');
    setPhase('result');
  }

  const resultTitle =
    outcome === 'hit'
      ? t('play.correct')
      : outcome === 'late'
        ? t('play.findLate')
        : t('play.findWrong');

  return (
    <View style={shared.screen}>
      <BackButton onPress={onBack} />
      <Text style={shared.brand}>Zihnify</Text>
      <Text style={shared.meta}>
        {t('play.meta', { level, streak, needed })}
      </Text>

      {phase === 'intro' && (
        <View style={shared.card}>
          <Text style={shared.title}>{t('exercises.find.title')}</Text>
          <Text style={shared.body}>{t('play.findIntro')}</Text>
          <Pressable
            accessibilityRole="button"
            style={shared.primary}
            onPress={() => startRound(1)}
          >
            <Text style={shared.primaryText}>{t('play.start')}</Text>
          </Pressable>
        </View>
      )}

      {phase === 'cue' && (
        <View style={shared.stage}>
          <Text style={shared.hint}>{t('play.findCue')}</Text>
          <View style={local.cue}>
            <Shape token={round.target} size={52} />
          </View>
        </View>
      )}

      {phase === 'play' && (
        <View style={shared.stage}>
          <View style={local.reminder}>
            <Text style={shared.hint}>{t('play.findCue')}</Text>
            <View style={local.reminderShape}>
              <Shape token={round.target} size={18} />
            </View>
          </View>
          <View style={[local.grid, { maxWidth: round.cols * (tile + 10) }]}>
            {round.tokens.map((token, index) => (
              <Pressable
                key={index}
                accessibilityRole="button"
                accessibilityLabel={t('play.shapeN', { n: index + 1 })}
                onPress={() => tapCell(index)}
                style={[local.cell, { width: tile, height: tile }]}
              >
                <Shape token={token} size={glyph} />
              </Pressable>
            ))}
          </View>
        </View>
      )}

      {phase === 'result' && (
        <View style={shared.card}>
          <Text style={shared.title}>{resultTitle}</Text>
          <Text style={shared.body}>
            {correct ? t('play.findHit') : t('play.findMiss')}
          </Text>
          <View style={[local.grid, { maxWidth: round.cols * 58 }]}>
            {round.tokens.map((token, index) => (
              <View
                key={index}
                style={[
                  local.mini,
                  index === round.targetIndex && local.cellOdd,
                  index === picked && !correct && local.cellMiss,
                ]}
              >
                <Shape token={token} size={18} />
              </View>
            ))}
          </View>
          <Pressable
            accessibilityRole="button"
            style={shared.primary}
            onPress={() => (cleared ? onBack() : startRound(level))}
          >
            <Text style={shared.primaryText}>
              {cleared
                ? t('play.backToLevels')
                : outcome === 'hit'
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
  cue: {
    width: 140,
    height: 140,
    borderRadius: 24,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reminder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  reminderShape: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  cell: {
    borderRadius: 16,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mini: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellOdd: {
    borderWidth: 2,
    borderColor: colors.accent,
  },
  cellMiss: {
    borderWidth: 2,
    borderColor: colors.miss,
  },
});
}
