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
import { useExercises, useLocale, useT } from '../i18n';
import { lessonDoneToday, SavedProgress, todaysCleared } from '../progress';
import { Colors, useColors } from '../theme';
import { Lesson, getLessons } from './lessons';

const PEEK = ['find', 'odd', 'track'] as const;
const LEARN_PEEK_IDS = ['attention', 'multitask', 'fatigue'] as const;
const LEARN_PEEK_IMG: Record<string, number> = {
  attention: require('../assets/learn-brain.jpg'),
  multitask: require('../assets/learn-stones.jpg'),
  fatigue: require('../assets/learn-leaves.jpg'),
};

function Bar({ value, max, tint }: { value: number; max: number; tint?: string }) {
  const colors = useColors();
  const local = stylesFor(colors);
  const pct = max <= 0 ? 0 : Math.min(1, value / max);
  return (
    <View style={local.track}>
      <View
        style={[
          local.fill,
          { width: `${pct * 100}%`, backgroundColor: tint ?? colors.accent },
        ]}
      />
    </View>
  );
}

export function HomeScreen({
  progress,
  onOpenExercise,
  onOpenTab,
  onOpenLesson,
}: {
  progress: SavedProgress;
  onOpenExercise: (id: ExerciseId) => void;
  onOpenTab: (tab: TabId) => void;
  onOpenLesson: (lesson: Lesson) => void;
}) {
  const colors = useColors();
  const local = stylesFor(colors);
  const t = useT();
  const { locale } = useLocale();
  const EXERCISES = useExercises();
  const lessons = getLessons(locale);
  const cleared = todaysCleared(progress);
  const lessonToday = lessonDoneToday(progress) ? 1 : 0;
  const daily = `${cleared.length}/${EXERCISES.length}`;

  return (
    <View style={local.wrap}>
      <ScrollView
        style={local.scroll}
        contentContainerStyle={local.page}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader onOpenTab={onOpenTab} />

        <View style={local.hero}>
          <Image
            source={require('../assets/home-hero.jpg')}
            style={local.heroArt}
            accessibilityIgnoresInvertColors
          />
          <Text style={local.hello}>{t('home.hello')}</Text>
          <Text style={local.heroTitle}>{t('home.title')}</Text>
          <Text style={local.heroSub}>{t('home.sub')}</Text>
          <View style={local.stats}>
            <View
              style={[local.stat, local.statFire]}
              accessibilityLabel={t('home.streakA11y', { n: progress.streak })}
            >
              <Text style={local.statEmoji}>🔥</Text>
              <View>
                <Text style={[local.statNum, { color: '#C43C1B' }]}>
                  {progress.streak}
                </Text>
                <Text style={local.statCap}>{t('home.streak')}</Text>
              </View>
            </View>
            <View
              style={[local.stat, local.statIce]}
              accessibilityLabel={t('home.freezeA11y', { n: progress.freezes })}
            >
              <Text style={local.statEmoji}>❄️</Text>
              <View>
                <Text style={[local.statNum, { color: '#2563A8' }]}>
                  {progress.freezes}
                </Text>
                <Text style={local.statCap}>{t('home.freeze')}</Text>
              </View>
            </View>
            <View
              style={[local.stat, local.statGoal]}
              accessibilityLabel={t('home.goalA11y', { n: daily })}
            >
              <TargetIcon color={colors.accent} />
              <View>
                <Text style={[local.statNum, { color: colors.accent }]}>
                  {daily}
                </Text>
                <Text style={local.statCap}>{t('home.goal')}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={local.sectionHead}>
          <Text style={local.section}>{t('home.exercises')}</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.seeAllA11y')}
            onPress={() => onOpenTab('exercises')}
          >
            <Text style={local.more}>{t('common.seeAll')}</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={local.hRow}
        >
          {PEEK.map((id) => {
            const item = EXERCISES.find((entry) => entry.id === id);
            if (!item) {
              return null;
            }
            const last = progress.lastPlayed[item.id];
            const done = progress.completed[item.id].length;
            return (
              <Pressable
                key={item.id}
                accessibilityRole="button"
                style={local.exCard}
                onPress={() => onOpenExercise(item.id)}
              >
                <View style={local.exTop}>
                  <View
                    style={[
                      local.thumb,
                      { backgroundColor: EXERCISE_THUMB[item.id] },
                    ]}
                  >
                    <ExerciseArt id={item.id} />
                  </View>
                  <View style={local.exText}>
                    <Text style={local.exTitle}>{item.title}</Text>
                    <Text style={local.exKind}>{item.kind}</Text>
                  </View>
                </View>
                <Bar value={done} max={TOTAL_LEVELS} />
                <View style={local.exFoot}>
                  <Text style={local.exLevel}>
                    {last ? t('common.level', { n: last }) : t('common.start')}
                  </Text>
                  <View style={local.chevron}>
                    <Text style={local.chevronText}>›</Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('home.dailyTask')}
          style={local.task}
          onPress={() => onOpenTab('tasks')}
        >
          <Image
            source={require('../assets/learn-leaves.jpg')}
            style={local.taskArt}
          />
          <View style={local.taskHead}>
            <Text style={local.taskTitle}>{t('home.dailyTask')}</Text>
            <Text style={local.taskStar}>
              {t('home.dailyStar', { n: progress.streak })}
            </Text>
          </View>
          <Text style={local.taskBody}>
            {t('home.dailyBody', {
              lesson: lessonToday,
              cleared: cleared.length,
              total: EXERCISES.length,
            })}
          </Text>
          <View style={local.taskFoot}>
            <View style={local.taskBarWrap}>
              <Bar
                value={cleared.length}
                max={EXERCISES.length}
                tint="#C5D9A8"
              />
              <Text style={local.taskFrac}>{daily}</Text>
            </View>
            <View style={local.taskCta}>
              <Text style={local.taskCtaText}>{t('home.startTask')}</Text>
            </View>
          </View>
        </Pressable>

        <View style={local.sectionHead}>
          <Text style={local.section}>{t('home.learn')}</Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.seeAllA11y')}
            onPress={() => onOpenTab('learn')}
          >
            <Text style={local.more}>{t('common.seeAll')}</Text>
          </Pressable>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={local.hRow}
        >
          {LEARN_PEEK_IDS.map((id) => {
            const lesson = lessons.find((item) => item.id === id);
            if (!lesson) {
              return null;
            }
            const card = {
              lesson,
              image: LEARN_PEEK_IMG[id],
              minutes: lesson.readMinutes ?? '',
              blurb: lesson.subtitle,
            };
            return (
            <Pressable
              key={card.lesson.id}
              accessibilityRole="button"
              style={local.learnCard}
              onPress={() => onOpenLesson(card.lesson)}
            >
              <Image source={card.image} style={local.learnImg} />
              <View style={local.learnBody}>
                <Text style={local.learnMin}>{card.minutes}</Text>
                <View style={local.learnTitleRow}>
                  <Text style={local.learnTitle}>{card.lesson.title}</Text>
                  <Text style={local.learnGo}>›</Text>
                </View>
                <Text style={local.learnBlurb} numberOfLines={2}>
                  {card.blurb}
                </Text>
              </View>
            </Pressable>
            );
          })}
        </ScrollView>
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
  hero: {
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: colors.well,
    padding: 18,
    paddingBottom: 14,
    marginBottom: 22,
  },
  heroArt: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  hello: {
    fontSize: 14,
    color: colors.body,
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '800',
    color: colors.ink,
  },
  heroSub: {
    marginTop: 6,
    marginBottom: 14,
    fontSize: 14,
    color: colors.body,
  },
  stats: {
    flexDirection: 'row',
    gap: 8,
  },
  stat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255,253,248,0.92)',
  },
  statFire: {
    backgroundColor: 'rgba(255,244,240,0.95)',
  },
  statIce: {
    backgroundColor: 'rgba(232,242,255,0.95)',
  },
  statGoal: {
    backgroundColor: 'rgba(232,240,232,0.95)',
  },
  statEmoji: {
    fontSize: 16,
  },
  statNum: {
    fontSize: 16,
    fontWeight: '800',
  },
  statCap: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.muted,
  },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  section: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.ink,
  },
  more: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accent,
  },
  hRow: {
    gap: 12,
    paddingRight: 8,
    paddingBottom: 22,
  },
  exCard: {
    width: 200,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 14,
  },
  exTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  thumb: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exText: {
    flex: 1,
  },
  exTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.ink,
  },
  exKind: {
    marginTop: 2,
    fontSize: 12,
    color: colors.muted,
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.line,
    overflow: 'hidden',
  },
  fill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  exFoot: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exLevel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.muted,
  },
  chevron: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronText: {
    color: colors.primaryText,
    fontSize: 18,
    fontWeight: '700',
    marginTop: -2,
  },
  task: {
    backgroundColor: '#29483B',
    borderRadius: 24,
    padding: 18,
    marginBottom: 22,
    overflow: 'hidden',
  },
  taskArt: {
    position: 'absolute',
    right: -20,
    top: -10,
    width: 160,
    height: 160,
    opacity: 0.18,
  },
  taskHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F5F1E9',
  },
  taskStar: {
    fontSize: 12,
    fontWeight: '600',
    color: '#E4D48A',
  },
  taskBody: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 20,
    color: '#D5DCC8',
  },
  taskFoot: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  taskBarWrap: {
    flex: 1,
    gap: 6,
  },
  taskFrac: {
    fontSize: 12,
    fontWeight: '700',
    color: '#C5D9A8',
  },
  taskCta: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  taskCtaText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.accent,
  },
  learnCard: {
    width: 196,
    backgroundColor: colors.surface,
    borderRadius: 22,
    overflow: 'hidden',
  },
  learnImg: {
    width: '100%',
    height: 108,
  },
  learnBody: {
    padding: 12,
  },
  learnMin: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.muted,
    marginBottom: 6,
  },
  learnTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  learnTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    color: colors.ink,
  },
  learnGo: {
    fontSize: 18,
    color: colors.accent,
    fontWeight: '700',
  },
  learnBlurb: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
    color: colors.body,
  },
});
}
