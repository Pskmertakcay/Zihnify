import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { TOTAL_LEVELS } from '../exercises/types';
import { useT } from '../i18n';
import { Colors, useColors } from '../theme';
import { BackButton } from './BackButton';

const COLS = 5;
const GAP = 10;

function nextOpen(completed: number[], lastPlayed: number) {
  const done = new Set(completed);
  if (
    lastPlayed >= 1 &&
    lastPlayed <= TOTAL_LEVELS &&
    !done.has(lastPlayed)
  ) {
    return lastPlayed;
  }
  for (let level = 1; level <= TOTAL_LEVELS; level += 1) {
    if (!done.has(level)) {
      return level;
    }
  }
  return null;
}

function CheckMark() {
  const colors = useColors();
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16">
      <Path
        d="M3.2 8.2l3.1 3.2 6.5-6.8"
        fill="none"
        stroke={colors.accent}
        strokeWidth={2.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function PlayMark() {
  const colors = useColors();
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14">
      <Path d="M4 2.4v9.2L12.2 7 4 2.4z" fill={colors.accent} />
    </Svg>
  );
}

export function LevelSelect({
  title,
  kind,
  body,
  completed,
  lastPlayed = 0,
  onBack,
  onPick,
}: {
  title: string;
  kind: string;
  body: string;
  completed: number[];
  lastPlayed?: number;
  onBack: () => void;
  onPick: (level: number) => void;
}) {
  const colors = useColors();
  const local = stylesFor(colors);
  const t = useT();
  const done = new Set(completed);
  const current = nextOpen(completed, lastPlayed);
  const [gridWidth, setGridWidth] = useState(0);
  const box = gridWidth
    ? (gridWidth - GAP * (COLS - 1)) / COLS
    : 64;

  return (
    <View style={local.wrap}>
      <ScrollView
        style={local.scroll}
        contentContainerStyle={local.page}
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={onBack} />
        <View style={local.hero}>
          <View style={local.heroText}>
            <Text style={local.kicker}>{title}</Text>
            <Text style={local.heading}>{t('levels.title')}</Text>
            <Text style={local.lead}>
              {t('levels.meta', { kind, total: TOTAL_LEVELS })}
              {'\n'}
              {body}
            </Text>
          </View>
          <Image
            source={require('../assets/home-hero.jpg')}
            style={local.decor}
            resizeMode="cover"
          />
        </View>

        <View
          style={local.grid}
          onLayout={(event) => setGridWidth(event.nativeEvent.layout.width)}
        >
          {Array.from({ length: TOTAL_LEVELS }, (_, index) => {
            const level = index + 1;
            const isDone = done.has(level);
            const isCurrent = current === level;
            return (
              <Pressable
                key={level}
                accessibilityRole="button"
                accessibilityLabel={
                  isDone
                    ? t('common.doneLevel', { title, n: level })
                    : isCurrent
                      ? t('common.continueLevel', { title, n: level })
                      : t('common.openLevel', { title, n: level })
                }
                onPress={() => onPick(level)}
                style={[
                  local.box,
                  isDone && local.boxDone,
                  isCurrent && local.boxCurrent,
                  {
                    width: box,
                    height: box,
                    borderRadius: Math.max(16, box * 0.22),
                  },
                ]}
              >
                <Text
                  style={[
                    local.num,
                    (isDone || isCurrent) && local.numStrong,
                    { fontSize: box > 70 ? 22 : 18 },
                  ]}
                >
                  {level}
                </Text>
                {isDone ? <CheckMark /> : isCurrent ? <PlayMark /> : null}
              </Pressable>
            );
          })}
        </View>

        <View style={local.tip}>
          <Text style={local.tipIcon}>💡</Text>
          <View style={{ flex: 1 }}>
            <Text style={local.tipTitle}>{t('common.tip')}</Text>
            <Text style={local.tipBody}>“{body}”</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function stylesFor(colors: Colors) {
  return StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    flex: 1,
  },
  page: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 32,
  },
  hero: {
    minHeight: 118,
    marginBottom: 18,
    overflow: 'hidden',
  },
  heroText: {
    maxWidth: '68%',
    zIndex: 1,
  },
  kicker: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    color: colors.muted,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  heading: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.ink,
  },
  lead: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: colors.body,
  },
  decor: {
    position: 'absolute',
    right: -28,
    top: -18,
    width: 168,
    height: 140,
    borderRadius: 80,
    opacity: 0.88,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GAP,
  },
  box: {
    backgroundColor: colors.tile,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  boxDone: {
    backgroundColor: colors.tileDone,
  },
  boxCurrent: {
    backgroundColor: colors.card,
    borderWidth: 2.5,
    borderColor: colors.primary,
  },
  num: {
    fontWeight: '800',
    color: colors.numIdle,
  },
  numStrong: {
    color: colors.accent,
  },
  tip: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    marginTop: 20,
  },
  tipIcon: {
    fontSize: 22,
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.ink,
  },
  tipBody: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: colors.body,
  },
});
}
