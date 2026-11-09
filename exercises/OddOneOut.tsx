import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../components/BackButton';
import { useT } from '../i18n';
import { Colors, useColors, useSharedStyles } from '../theme';
import { ExerciseLaunch } from './types';
import { useLevelComplete } from './useLevelComplete';

type Phase = 'intro' | 'play' | 'result';

const ANGLES = [0, 90, 180, 270] as const;

function gridSize(level: number) {
  if (level <= 2) {
    return 3;
  }
  if (level <= 4) {
    return 4;
  }
  return 5;
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function buildRound(level: number) {
  const cols = gridSize(level);
  const count = cols * cols;
  const majority = pick(ANGLES);
  const offset = level <= 2 ? 180 : 90;
  const oddRotation = (majority + offset) % 360;
  const oddIndex = Math.floor(Math.random() * count);
  const rotations = Array.from({ length: count }, (_, index) =>
    index === oddIndex ? oddRotation : majority
  );
  return { cols, rotations, oddIndex };
}

export function OddOneOut({
  onBack,
  initialLevel,
  onLevelComplete,
  onPractice,
}: ExerciseLaunch) {
  const [level, setLevel] = useState(initialLevel);
  const [phase, setPhase] = useState<Phase>('play');
  const [round, setRound] = useState(() => buildRound(initialLevel));
  const [picked, setPicked] = useState<number | null>(null);
  const shared = useSharedStyles();
  const local = stylesFor(useColors());
  const t = useT();

  const correct = picked === round.oddIndex;
  const { streak, needed, cleared } = useLevelComplete(
    correct,
    phase,
    level,
    onLevelComplete,
    onPractice
  );
  const tile = round.cols === 3 ? 88 : round.cols === 4 ? 68 : 54;
  const glyph = round.cols === 5 ? 22 : 28;

  function startRound(nextLevel: number) {
    setLevel(nextLevel);
    setRound(buildRound(nextLevel));
    setPicked(null);
    setPhase('play');
  }

  function tapCell(index: number) {
    if (phase !== 'play') {
      return;
    }
    setPicked(index);
    setPhase('result');
  }

  return (
    <View style={shared.screen}>
      <BackButton onPress={onBack} />
      <Text style={shared.brand}>Zihnify</Text>
      <Text style={shared.meta}>
        {t('play.meta', { level, streak, needed })}
      </Text>

      <View style={shared.stage}>
          <Text style={shared.hint}>
            {phase === 'play'
              ? t('play.oddHint')
              : correct
                ? t('play.correct')
                : t('play.oddMiss')}
          </Text>
          <View style={[local.grid, { maxWidth: round.cols * (tile + 10) }]}>
            {round.rotations.map((deg, index) => {
              const isOdd = index === round.oddIndex;
              const isPick = index === picked;
              return (
                <Pressable
                  key={index}
                  accessibilityRole="button"
                  accessibilityLabel={
                    phase === 'result' && isOdd
                      ? t('play.oddA11y')
                      : t('play.shapeN', { n: index + 1 })
                  }
                  onPress={() => tapCell(index)}
                  style={[
                    local.cell,
                    { width: tile, height: tile },
                    phase === 'result' && isOdd && local.cellOdd,
                    phase === 'result' && isPick && !isOdd && local.cellMiss,
                  ]}
                >
                  <Text
                    style={[
                      local.arrow,
                      { fontSize: glyph, transform: [{ rotate: `${deg}deg` }] },
                    ]}
                  >
                    ▲
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {phase === 'result' && (
            <Pressable
              accessibilityRole="button"
              style={[shared.primary, local.next]}
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
          )}
        </View>
    </View>
  );
}

function stylesFor(colors: Colors) {
  return StyleSheet.create({
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
  cellOdd: {
    borderWidth: 2,
    borderColor: colors.accent,
  },
  cellMiss: {
    borderWidth: 2,
    borderColor: colors.miss,
  },
  arrow: {
    color: colors.ink,
    fontWeight: '700',
  },
  next: {
    width: '100%',
    marginTop: 28,
  },
});
}
