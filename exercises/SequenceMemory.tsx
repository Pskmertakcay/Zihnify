import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../components/BackButton';
import { useT } from '../i18n';
import { Colors, useColors, useSharedStyles } from '../theme';
import { ExerciseLaunch } from './types';
import { useLevelComplete } from './useLevelComplete';

type Phase = 'intro' | 'showing' | 'input' | 'result';

const SHOW_MS = 900;
const GAP_MS = 280;
const KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

function randomSequence(length: number): number[] {
  return Array.from({ length }, () => 1 + Math.floor(Math.random() * 9));
}

export function SequenceMemory({
  onBack,
  initialLevel,
  onLevelComplete,
  onPractice,
}: ExerciseLaunch) {
  const [level, setLevel] = useState(initialLevel);
  const [phase, setPhase] = useState<Phase>('showing');
  const [sequence, setSequence] = useState<number[]>([]);
  const [shownIndex, setShownIndex] = useState(-1);
  const [guess, setGuess] = useState<number[]>([]);
  const [correct, setCorrect] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const shared = useSharedStyles();
  const local = stylesFor(useColors());
  const t = useT();

  const sequenceLength = level + 1;

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  const { streak, needed, cleared } = useLevelComplete(
    correct,
    phase,
    level,
    onLevelComplete,
    onPractice
  );

  function startRound(nextLevel = level) {
    clearTimers();
    const next = randomSequence(nextLevel + 1);
    setLevel(nextLevel);
    setSequence(next);
    setGuess([]);
    setShownIndex(-1);
    setPhase('showing');
  }

  useEffect(() => {
    startRound(initialLevel);
    // First round from the level map.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== 'showing' || sequence.length === 0) {
      return;
    }

    clearTimers();
    sequence.forEach((_, index) => {
      const showAt = index * (SHOW_MS + GAP_MS);
      timers.current.push(
        setTimeout(() => setShownIndex(index), showAt),
        setTimeout(() => setShownIndex(-1), showAt + SHOW_MS)
      );
    });

    const doneAt = sequence.length * (SHOW_MS + GAP_MS);
    timers.current.push(setTimeout(() => setPhase('input'), doneAt));

    return clearTimers;
  }, [phase, sequence]);

  function tapDigit(digit: number) {
    if (phase !== 'input' || guess.length >= sequence.length) {
      return;
    }

    const nextGuess = [...guess, digit];
    setGuess(nextGuess);

    if (nextGuess.length < sequence.length) {
      return;
    }

    const ok = nextGuess.every((value, index) => value === sequence[index]);
    setCorrect(ok);
    setPhase('result');
  }

  function deleteLast() {
    if (phase !== 'input' || guess.length === 0) {
      return;
    }
    setGuess(guess.slice(0, -1));
  }

  return (
    <View style={shared.screen}>
      <BackButton onPress={onBack} />
      <Text style={shared.brand}>Zihnify</Text>
      <Text style={shared.meta}>
        {t('play.metaSeq', {
          level,
          count: sequenceLength,
          streak,
          needed,
        })}
      </Text>

      {phase === 'intro' && (
        <View style={shared.card}>
          <Text style={shared.title}>{t('exercises.sequence.title')}</Text>
          <Text style={shared.body}>{t('play.seqIntro')}</Text>
          <Pressable style={shared.primary} onPress={() => startRound(1)}>
            <Text style={shared.primaryText}>{t('play.start')}</Text>
          </Pressable>
        </View>
      )}

      {phase === 'showing' && (
        <View style={shared.stage}>
          <Text style={shared.hint}>{t('play.seqWatch')}</Text>
          <Text style={local.digit}>
            {shownIndex >= 0 ? sequence[shownIndex] : ''}
          </Text>
        </View>
      )}

      {phase === 'input' && (
        <View style={shared.stage}>
          <Text style={shared.hint}>{t('play.seqRepeat')}</Text>
          <View style={local.echo}>
            {sequence.map((_, index) => {
              const value = guess[index];
              const filled = value != null;
              return (
                <View
                  key={index}
                  style={[local.echoSlot, filled && local.echoFilled]}
                >
                  <Text style={[local.echoText, !filled && local.echoEmpty]}>
                    {filled ? value : '·'}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={local.pad}>
            {KEYS.map((digit) => (
              <Pressable
                key={digit}
                accessibilityRole="button"
                accessibilityLabel={String(digit)}
                style={local.key}
                onPress={() => tapDigit(digit)}
              >
                <Text style={local.keyText}>{digit}</Text>
              </Pressable>
            ))}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('play.seqDelete')}
              disabled={guess.length === 0}
              onPress={deleteLast}
              style={[local.deleteKey, guess.length === 0 && local.deleteOff]}
            >
              <Text
                style={[
                  local.deleteText,
                  guess.length === 0 && local.deleteTextOff,
                ]}
              >
                {t('play.seqDelete')}
              </Text>
            </Pressable>
          </View>
        </View>
      )}

      {phase === 'result' && (
        <View style={shared.card}>
          <Text style={shared.title}>
            {correct ? t('play.correct') : t('play.seqRetry')}
          </Text>
          <Text style={shared.body}>
            {t('play.seqShown', { seq: sequence.join(' · ') })}
            {'\n'}
            {t('play.seqGuess', { guess: guess.join(' · ') })}
          </Text>
          <Pressable
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
  digit: {
    minHeight: 120,
    fontSize: 88,
    fontWeight: '700',
    color: colors.ink,
  },
  echo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 22,
    minHeight: 56,
  },
  echoSlot: {
    minWidth: 48,
    height: 56,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  echoFilled: {
    backgroundColor: colors.tileDone,
  },
  deleteKey: {
    width: '100%',
    maxWidth: 288,
    height: 52,
    borderRadius: 16,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteOff: {
    opacity: 0.45,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.ink,
  },
  deleteTextOff: {
    color: colors.muted,
  },
  echoText: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.ink,
  },
  echoEmpty: {
    color: colors.muted,
  },
  pad: {
    width: '100%',
    maxWidth: 320,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  key: {
    width: 88,
    height: 88,
    borderRadius: 20,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.ink,
  },
});
}
