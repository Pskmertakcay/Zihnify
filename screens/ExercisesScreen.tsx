import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { ExerciseArt, EXERCISE_THUMB } from '../components/ExerciseArt';
import { TargetIcon } from '../components/NavIcons';
import { TabId } from '../components/TabBar';
import { ExerciseId, TOTAL_LEVELS } from '../exercises/types';
import { useExercises, useT } from '../i18n';
import { SavedProgress } from '../progress';
import { Colors, useColors } from '../theme';
import Svg, { Path, Rect } from 'react-native-svg';

export function exerciseLine(
  progress: SavedProgress,
  id: ExerciseId,
  t: (key: string, vars?: Record<string, string | number>) => string
) {
  const last = progress.lastPlayed[id];
  const doneCount = progress.completed[id].length;
  if (doneCount === TOTAL_LEVELS) {
    return t('common.done');
  }
  if (last) {
    return doneCount
      ? t('exerciseList.resumeDone', { n: last })
      : t('exerciseList.resume', { n: last });
  }
  return '';
}

type Filter = 'all' | 'attention' | 'focus' | 'reaction' | 'memory';

const FILTERS: { id: Filter; labelKey: string }[] = [
  { id: 'all', labelKey: 'exerciseList.all' },
  { id: 'attention', labelKey: 'exerciseList.attention' },
  { id: 'focus', labelKey: 'exerciseList.focus' },
  { id: 'reaction', labelKey: 'exerciseList.reaction' },
  { id: 'memory', labelKey: 'exerciseList.memory' },
];

function inFilter(id: ExerciseId, filter: Filter) {
  if (filter === 'all') {
    return true;
  }
  if (filter === 'attention') {
    return id === 'find' || id === 'track';
  }
  if (filter === 'focus') {
    return id === 'odd';
  }
  if (filter === 'reaction') {
    return id === 'wait';
  }
  return id === 'sequence';
}

function ChipIcon({ id, color }: { id: Filter; color: string }) {
  if (id === 'attention') {
    return <TargetIcon color={color} />;
  }
  if (id === 'focus') {
    return (
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path d="M8 2 14 13H2L8 2Z" stroke={color} strokeWidth={1.6} />
      </Svg>
    );
  }
  if (id === 'reaction') {
    return (
      <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
        <Path
          d="M13 3 5 13h6l-1 8 9-11h-6z"
          stroke={color}
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
  if (id === 'memory') {
    return (
      <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
        <Path
          d="M5 8h14M5 12h14M5 16h14"
          stroke={color}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
      </Svg>
    );
  }
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Rect x={4} y={4} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
      <Rect x={14} y={4} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
      <Rect x={4} y={14} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
      <Rect x={14} y={14} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
    </Svg>
  );
}

export function ExercisesScreen({
  progress,
  onOpen,
  onOpenTab,
}: {
  progress: SavedProgress;
  onOpen: (id: ExerciseId) => void;
  onOpenTab: (tab: TabId) => void;
}) {
  const colors = useColors();
  const local = stylesFor(colors);
  const t = useT();
  const EXERCISES = useExercises();
  const [filter, setFilter] = useState<Filter>('all');
  const list = EXERCISES.filter((item) => inFilter(item.id, filter));

  return (
    <View style={local.wrap}>
      <ScrollView
        style={local.scroll}
        contentContainerStyle={local.page}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader onOpenTab={onOpenTab} />

        <View style={local.titleRow}>
          <View style={local.titleText}>
            <Text style={local.title}>{t('exerciseList.title')}</Text>
            <Text style={local.lead}>{t('exerciseList.lead')}</Text>
          </View>
          <View style={local.decor}>
            <Image
              source={require('../assets/learn-leaves.jpg')}
              style={local.decorLeaves}
            />
            <View style={local.decorOrb}>
              <TargetIcon color={colors.accent} />
            </View>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={local.chips}
        >
          {FILTERS.map((item) => {
            const on = item.id === filter;
            const color = on ? colors.primaryText : colors.accent;
            return (
              <Pressable
                key={item.id}
                accessibilityRole="button"
                accessibilityState={{ selected: on }}
                onPress={() => setFilter(item.id)}
                style={[local.chip, on && local.chipOn]}
              >
                <View style={local.chipIcon}>
                  <ChipIcon id={item.id} color={color} />
                </View>
                <Text style={[local.chipLabel, on && local.chipLabelOn]}>
                  {t(item.labelKey)}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {list.map((item) => {
          const last = progress.lastPlayed[item.id];
          const done = progress.completed[item.id].length;
          const line = exerciseLine(progress, item.id, t);
          const complete = done === TOTAL_LEVELS;
          return (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              accessibilityLabel={`${item.title}. ${item.kind}. ${line || item.body}`}
              style={local.card}
              onPress={() => onOpen(item.id)}
            >
              <View
                style={[
                  local.thumb,
                  { backgroundColor: EXERCISE_THUMB[item.id] },
                ]}
              >
                <ExerciseArt id={item.id} />
              </View>
              <View style={local.cardBody}>
                <View style={local.cardTop}>
                  <View style={local.cardCopy}>
                    <Text style={local.kind}>{item.kind}</Text>
                    <Text style={local.cardTitle}>{item.title}</Text>
                    <Text style={local.cardText}>{item.body}</Text>
                    {line ? <Text style={local.line}>{line}</Text> : null}
                  </View>
                  <View style={local.cardSide}>
                    <View
                      style={[local.badge, !last && local.badgeStart]}
                    >
                      <Text
                        style={[local.badgeText, !last && local.badgeStartText]}
                      >
                        {last
                          ? t('common.level', { n: last })
                          : t('exerciseList.startBadge')}
                      </Text>
                    </View>
                    <View style={local.go}>
                      <Text style={local.goText}>›</Text>
                    </View>
                  </View>
                </View>
                <View style={local.barRow}>
                  <View style={local.track}>
                    <View
                      style={[
                        local.fill,
                        { width: `${(done / TOTAL_LEVELS) * 100}%` },
                      ]}
                    />
                  </View>
                  {complete ? (
                    <Text style={local.check}>✓</Text>
                  ) : done > 0 ? (
                    <Text style={local.frac}>
                      {done}/{TOTAL_LEVELS}
                    </Text>
                  ) : null}
                </View>
              </View>
            </Pressable>
          );
        })}
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
    backgroundColor: colors.bg,
  },
  page: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 28,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  titleText: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 32,
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
    width: 92,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorLeaves: {
    position: 'absolute',
    width: 92,
    height: 92,
    borderRadius: 46,
    opacity: 0.35,
  },
  decorOrb: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,253,248,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chips: {
    gap: 8,
    paddingBottom: 18,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: colors.surface,
  },
  chipOn: {
    backgroundColor: colors.primary,
  },
  chipIcon: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 0.78 }],
  },
  chipLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.ink,
  },
  chipLabelOn: {
    color: '#F5F1E9',
  },
  card: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: 24,
    padding: 14,
    marginBottom: 12,
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    flex: 1,
  },
  cardTop: {
    flexDirection: 'row',
    gap: 8,
  },
  cardCopy: {
    flex: 1,
  },
  kind: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.muted,
    marginBottom: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.ink,
  },
  cardText: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: colors.body,
  },
  line: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '600',
    color: colors.accent,
  },
  cardSide: {
    alignItems: 'flex-end',
    gap: 10,
  },
  badge: {
    backgroundColor: colors.well,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  badgeStart: {
    backgroundColor: '#E8F2FB',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
  },
  badgeStartText: {
    color: '#3D6F8C',
  },
  go: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goText: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: '700',
    marginTop: -2,
  },
  barRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  track: {
    flex: 1,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.line,
    overflow: 'hidden',
  },
  fill: {
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  frac: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.muted,
  },
  check: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.accent,
  },
});
}
