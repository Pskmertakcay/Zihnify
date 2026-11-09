import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExerciseArt, EXERCISE_THUMB } from '../components/ExerciseArt';
import { BookIcon } from '../components/NavIcons';
import { TabId } from '../components/TabBar';
import { ExerciseId, TOTAL_LEVELS } from '../exercises/types';
import { useExercises, useLocale, useT } from '../i18n';
import { SavedProgress } from '../progress';
import { Colors, useColors } from '../theme';
import { getLessons } from './lessons';

const BOX_TOTAL = 5 * TOTAL_LEVELS;
const CHART_H = 112;

function Track({ value, max }: { value: number; max: number }) {
  const local = stylesFor(useColors());
  const pct = max <= 0 ? 0 : Math.min(1, value / max);
  return (
    <View style={local.track}>
      <View style={[local.fill, { width: `${pct * 100}%` }]} />
    </View>
  );
}

export function ProfileScreen({
  progress,
  onOpenTab,
  onOpenExercise,
}: {
  progress: SavedProgress;
  onOpenTab: (tab: TabId) => void;
  onOpenExercise: (id: ExerciseId) => void;
}) {
  const colors = useColors();
  const local = stylesFor(colors);
  const t = useT();
  const { locale } = useLocale();
  const EXERCISES = useExercises();
  const LESSONS = getLessons(locale);
  const doneTotal = EXERCISES.reduce(
    (sum, item) => sum + progress.completed[item.id].length,
    0
  );
  const lessonsDone = LESSONS.filter((item) =>
    progress.lessonsRead.includes(item.id)
  ).length;
  const featured =
    [...EXERCISES].sort(
      (a, b) => progress.lastPlayed[b.id] - progress.lastPlayed[a.id]
    )[0] ?? EXERCISES[0];
  const featuredDone = progress.completed[featured.id].length;
  const featuredLast = progress.lastPlayed[featured.id];

  return (
    <ScrollView
      style={local.scroll}
      contentContainerStyle={local.page}
      showsVerticalScrollIndicator={false}
    >
      <View style={local.titleRow}>
        <View style={local.titleText}>
          <Text style={local.kicker}>{t('profile.kicker')}</Text>
          <Text style={local.title}>{t('profile.title')}</Text>
        </View>
        <Image
          source={require('../assets/home-hero.jpg')}
          style={local.decor}
        />
      </View>

      <View style={local.row}>
        <View
          style={[local.stat, local.statFire]}
          accessibilityLabel={`${t('profile.streak')} ${progress.streak}`}
        >
          <Text style={local.statEmoji}>🔥</Text>
          <View>
            <Text style={[local.statValue, { color: '#C43C1B' }]}>
              {progress.streak}
            </Text>
            <Text style={local.statLabel}>{t('profile.streak')}</Text>
          </View>
        </View>
        <View
          style={[local.stat, local.statIce]}
          accessibilityLabel={`${t('profile.freeze')} ${progress.freezes}`}
        >
          <Text style={local.statEmoji}>❄️</Text>
          <View>
            <Text style={[local.statValue, { color: '#2563A8' }]}>
              {progress.freezes}
            </Text>
            <Text style={local.statLabel}>{t('profile.freeze')}</Text>
          </View>
        </View>
      </View>

      <View style={local.card}>
        <View style={local.cardHead}>
          <Text style={local.cardTitle}>{t('profile.total')}</Text>
          <Text style={local.frac}>
            {t('profile.boxes', { done: doneTotal, total: BOX_TOTAL })}
          </Text>
        </View>
        <Track value={doneTotal} max={BOX_TOTAL} />
        <View style={local.eduRow}>
          <View style={local.eduIcon}>
            <BookIcon color={colors.accent} />
          </View>
          <View style={local.eduCopy}>
            <Text style={local.cardBody}>
              {t('profile.eduLine', {
                done: lessonsDone,
                total: LESSONS.length,
                streak: progress.lessonStreak,
              })}
            </Text>
            <Track value={lessonsDone} max={LESSONS.length} />
          </View>
          <Text style={local.frac}>
            {lessonsDone}/{LESSONS.length}
          </Text>
        </View>
      </View>

      <View style={local.card}>
        <Text style={local.cardTitle}>{t('profile.byExercise')}</Text>
        <Text style={local.cardBody}>{t('profile.byExerciseBody')}</Text>
        <View style={local.chart}>
          {EXERCISES.map((item) => {
            const done = progress.completed[item.id].length;
            const height = Math.max(
              done > 0 ? 8 : 4,
              (done / TOTAL_LEVELS) * CHART_H
            );
            return (
              <View key={item.id} style={local.col}>
                <Text style={local.colValue}>{done}</Text>
                <View style={local.shaft}>
                  <View style={[local.bar, { height }]} />
                </View>
                <View style={local.colIcon}>
                  <ExerciseArt id={item.id} />
                </View>
                <Text style={local.colLabel} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={local.sectionHead}>
        <Text style={local.section}>{t('profile.resume')}</Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => onOpenTab('exercises')}
        >
          <Text style={local.more}>{t('profile.allExercises')}</Text>
        </Pressable>
      </View>
      <Pressable
        accessibilityRole="button"
        style={local.place}
        onPress={() => onOpenExercise(featured.id)}
      >
        <View
          style={[local.thumb, { backgroundColor: EXERCISE_THUMB[featured.id] }]}
        >
          <ExerciseArt id={featured.id} />
        </View>
        <View style={local.placeCopy}>
          <View style={local.placeTop}>
            <View style={{ flex: 1 }}>
              <Text style={local.kind}>{featured.kind}</Text>
              <Text style={local.placeTitle}>{featured.title}</Text>
              <Text style={local.cardBody}>
                {featuredDone === TOTAL_LEVELS
                  ? t('common.done')
                  : featuredLast
                    ? t('profile.resumeLevel', { n: featuredLast })
                    : t('profile.notStarted')}
              </Text>
            </View>
            <Text style={local.chevron}>›</Text>
          </View>
          <View style={local.barRow}>
            <View style={{ flex: 1 }}>
              <Track value={featuredDone} max={TOTAL_LEVELS} />
            </View>
            <Text style={local.frac}>
              {featuredDone} / {TOTAL_LEVELS}
            </Text>
          </View>
        </View>
      </Pressable>

      <View style={local.sectionHead}>
        <Text style={local.section}>{t('profile.learnProgress')}</Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => onOpenTab('learn')}
        >
          <Text style={local.more}>{t('profile.allLearn')}</Text>
        </Pressable>
      </View>
      <Pressable
        accessibilityRole="button"
        style={local.place}
        onPress={() => onOpenTab('learn')}
      >
        <View style={[local.thumb, { backgroundColor: '#F3EEDC' }]}>
          <BookIcon color={colors.accent} />
        </View>
        <View style={local.placeCopy}>
          <Text style={local.placeTitle}>{t('profile.cards')}</Text>
          <Text style={local.cardBody}>
            {t('profile.cardsDone', { done: lessonsDone, total: LESSONS.length })}
          </Text>
          <Track value={lessonsDone} max={LESSONS.length} />
        </View>
      </Pressable>
    </ScrollView>
  );
}

function stylesFor(colors: Colors) {
  return StyleSheet.create({
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
    marginBottom: 8,
  },
  titleText: {
    flex: 1,
  },
  kicker: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: colors.muted,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.ink,
  },
  decor: {
    width: 120,
    height: 88,
    borderRadius: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 16,
  },
  statFire: {
    backgroundColor: '#FFF4F0',
  },
  statIce: {
    backgroundColor: '#E8F2FB',
  },
  statEmoji: {
    fontSize: 22,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
  },
  statLabel: {
    marginTop: 1,
    fontSize: 12,
    fontWeight: '600',
    color: colors.muted,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 16,
    marginBottom: 12,
  },
  cardHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.ink,
  },
  cardBody: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: colors.body,
  },
  frac: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.muted,
  },
  eduRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  eduIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3EEDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eduCopy: {
    flex: 1,
  },
  chart: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
    minHeight: CHART_H + 72,
  },
  col: {
    flex: 1,
    alignItems: 'center',
  },
  colValue: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.ink,
    marginBottom: 6,
  },
  shaft: {
    width: '72%',
    maxWidth: 40,
    height: CHART_H,
    backgroundColor: colors.tile,
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  bar: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  colIcon: {
    marginTop: 8,
    transform: [{ scale: 0.85 }],
  },
  colLabel: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '600',
    color: colors.muted,
    textAlign: 'center',
  },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
  },
  section: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.ink,
  },
  more: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.accent,
  },
  place: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeCopy: {
    flex: 1,
  },
  placeTop: {
    flexDirection: 'row',
    gap: 8,
  },
  kind: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.muted,
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.ink,
  },
  chevron: {
    fontSize: 22,
    color: colors.accent,
    fontWeight: '600',
  },
  barRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  track: {
    marginTop: 8,
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
});
}
