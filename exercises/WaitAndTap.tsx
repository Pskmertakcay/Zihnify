import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../components/BackButton';
import { useT } from '../i18n';
import { Colors, useColors, useSharedStyles } from '../theme';
import { ExerciseLaunch } from './types';
import { useLevelComplete } from './useLevelComplete';

type Phase = 'intro' | 'waiting' | 'ready' | 'result';
type Outcome = 'hit' | 'early' | 'late';

function waitMs(level: number) {
  const min = 900 + level * 200;
  const extra = 700 + level * 250;
  return min + Math.floor(Math.random() * extra);
}

function windowMs(level: number) {
  return Math.max(800, 2200 - level * 140);
}

export function WaitAndTap({
  onBack,
  initialLevel,
  onLevelComplete,
  onPractice,
}: ExerciseLaunch) {
  const [level, setLevel] = useState(initialLevel);
  const [phase, setPhase] = useState<Phase>('intro');
  const [outcome, setOutcome] = useState<Outcome>('hit');
  const [delay, setDelay] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const shared = useSharedStyles();
  const local = stylesFor(useColors());
  const t = useT();

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function startRound(nextLevel: number) {
    clearTimers();
    setLevel(nextLevel);
    setDelay(waitMs(nextLevel));
    setPhase('waiting');
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
    if (phase !== 'waiting') {
      return;
    }

    clearTimers();
    timers.current.push(
      setTimeout(() => setPhase('ready'), delay)
    );
    return clearTimers;
  }, [phase, delay]);

  useEffect(() => {
    if (phase !== 'ready') {
      return;
    }

    const limit = windowMs(level);
    timers.current.push(
      setTimeout(() => {
        setOutcome('late');
        setPhase('result');
      }, limit)
    );
    return clearTimers;
  }, [phase, level]);

  function tapPad() {
    if (phase === 'waiting') {
      clearTimers();
      setOutcome('early');
      setPhase('result');
      return;
    }
    if (phase === 'ready') {
      clearTimers();
      setOutcome('hit');
      setPhase('result');
    }
  }

  const resultTitle =
    outcome === 'hit'
      ? t('play.correct')
      : outcome === 'early'
        ? t('play.waitEarly')
        : t('play.waitMissed');
  const resultBody =
    outcome === 'hit'
      ? t('play.waitHitBody')
      : outcome === 'early'
        ? t('play.waitEarlyBody')
        : t('play.waitLateBody');

  return (
    <View style={shared.screen}>
      <BackButton onPress={onBack} />
      <Text style={shared.brand}>Zihnify</Text>
      <Text style={shared.meta}>
        {t('play.meta', { level, streak, needed })}
      </Text>

      {phase === 'intro' && (
        <View style={shared.card}>
          <Text style={shared.title}>{t('exercises.wait.title')}</Text>
          <Text style={shared.body}>{t('play.waitIntro')}</Text>
          <Pressable
            accessibilityRole="button"
            style={shared.primary}
            onPress={() => startRound(1)}
          >
            <Text style={shared.primaryText}>{t('play.start')}</Text>
          </Pressable>
        </View>
      )}

      {(phase === 'waiting' || phase === 'ready') && (
        <View style={shared.stage}>
          <Text style={shared.hint}>
            {phase === 'waiting' ? t('play.waitWait') : t('play.waitNow')}
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              phase === 'ready' ? t('play.waitReady') : t('play.waitHold')
            }
            onPress={tapPad}
            style={[local.pad, phase === 'ready' && local.padReady]}
          >
            <View
              style={[local.dot, phase === 'ready' && local.dotReady]}
            />
          </Pressable>
        </View>
      )}

      {phase === 'result' && (
        <View style={shared.card}>
          <Text style={shared.title}>{resultTitle}</Text>
          <Text style={shared.body}>{resultBody}</Text>
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
  pad: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padReady: {
    backgroundColor: colors.primary,
  },
  dot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#D9D2C5',
  },
  dotReady: {
    backgroundColor: colors.primaryText,
  },
});
}
