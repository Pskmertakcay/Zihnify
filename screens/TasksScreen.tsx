import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { AppHeader } from '../components/AppHeader';
import { ExerciseArt, EXERCISE_THUMB } from '../components/ExerciseArt';
import { BookIcon, TargetIcon } from '../components/NavIcons';
import { TabId } from '../components/TabBar';
import { ExerciseId } from '../exercises/types';
import { useExercises, useT } from '../i18n';
import { lessonDoneToday, SavedProgress, todaysCleared } from '../progress';
import { Colors, useColors } from '../theme';

function Ring({ value, max }: { value: number; max: number }) {
  const colors = useColors();
  const radius = 11;
  const len = 2 * Math.PI * radius;
  const pct = max <= 0 ? 0 : Math.min(1, value / max);
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28">
      <Circle
        cx={14}
        cy={14}
        r={radius}
        stroke={colors.line}
        strokeWidth={3}
        fill="none"
      />
      <Circle
        cx={14}
        cy={14}
        r={radius}
        stroke={colors.accent}
        strokeWidth={3}
        fill="none"
        strokeDasharray={`${len} ${len}`}
        strokeDashoffset={len * (1 - pct)}
        strokeLinecap="round"
        transform="rotate(-90 14 14)"
      />
    </Svg>
  );
}

function CubeIcon({ color }: { color: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Path
        d="M12 21V12M12 12 4 7.5M12 12l8-4.5"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CalendarIcon({ color }: { color: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Rect
        x={4}
        y={5}
        width={16}
        height={15}
        rx={3}
        stroke={color}
        strokeWidth={1.7}
      />
      <Path d="M4 10h16M8 3v4M16 3v4" stroke={color} strokeWidth={1.7} />
      <Path
        d="M9.5 16.5 11 18l3.5-4"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function GridIcon({ color }: { color: string }) {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Rect x={4} y={4} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
      <Rect x={14} y={4} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
      <Rect x={4} y={14} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
      <Rect x={14} y={14} width={6} height={6} rx={1.2} stroke={color} strokeWidth={1.8} />
    </Svg>
  );
}

export function TasksScreen({
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
  const EXERCISES = useExercises();
  const cleared = todaysCleared(progress);
  const oneDone = cleared.length >= 1;
  const allDone = EXERCISES.every((item) => cleared.includes(item.id));
  const streak = progress.streak;
  const lessonToday = lessonDoneToday(progress);
  const lessonStreak = progress.lessonStreak;
  const long30 = Math.min(streak, 30);
  const long365 = Math.min(streak, 365);
  const lesson30 = Math.min(lessonStreak, 30);

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
            <Text style={local.kicker}>{t('tasks.kicker')}</Text>
            <Text style={local.title}>{t('tasks.daily')}</Text>
            <Text style={local.lead}>{t('tasks.lead')}</Text>
          </View>
          <Image
            source={require('../assets/home-hero.jpg')}
            style={local.decor}
          />
        </View>

        <Pressable
          accessibilityRole="button"
          style={local.card}
          onPress={() => onOpenTab('exercises')}
        >
          <View style={[local.thumb, { backgroundColor: '#E3EDE6' }]}>
            <TargetIcon color={colors.accent} />
          </View>
          <View style={local.cardCopy}>
            <Text style={local.cardTitle}>{t('tasks.oneEx')}</Text>
            <Text style={local.cardBody}>{t('tasks.oneExBody')}</Text>
          </View>
          <Ring value={oneDone ? 1 : 0} max={1} />
          <Text style={local.frac}>{Math.min(cleared.length, 1)}/1</Text>
          <Text style={local.chevron}>›</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          style={local.card}
          onPress={() => onOpenTab('learn')}
        >
          <View style={[local.thumb, { backgroundColor: '#F3EEDC' }]}>
            <BookIcon color={colors.accent} />
          </View>
          <View style={local.cardCopy}>
            <Text style={local.cardTitle}>{t('tasks.oneLesson')}</Text>
            <Text style={local.cardBody}>{t('tasks.oneLessonBody')}</Text>
          </View>
          <Ring value={lessonToday ? 1 : 0} max={1} />
          <Text style={local.frac}>{lessonToday ? 1 : 0}/1</Text>
          <Text style={local.chevron}>›</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          style={local.card}
          onPress={() => onOpenTab('exercises')}
        >
          <View style={[local.thumb, { backgroundColor: '#E8F2FB' }]}>
            <CubeIcon color="#3D6F8C" />
          </View>
          <View style={local.cardCopy}>
            <Text style={local.cardTitle}>{t('tasks.allFive')}</Text>
            <Text style={local.cardBody}>{t('tasks.allFiveBody')}</Text>
          </View>
          <Ring value={cleared.length} max={EXERCISES.length} />
          <Text style={local.frac}>
            {cleared.length}/{EXERCISES.length}
          </Text>
          <Text style={local.chevron}>›</Text>
        </Pressable>

        <View style={local.chips}>
          <Pressable
            accessibilityRole="button"
            onPress={() => onOpenTab('exercises')}
            style={[local.chip, local.chipOn]}
          >
            <GridIcon color="#F5F1E9" />
            <Text style={[local.chipText, local.chipTextOn]}>
              {t('exerciseList.all')}
            </Text>
          </Pressable>
          {EXERCISES.map((item) => {
            const done = cleared.includes(item.id);
            return (
              <Pressable
                key={item.id}
                accessibilityRole="button"
                onPress={() => onOpenExercise(item.id)}
                style={[local.chip, done && local.chipOn]}
              >
                <View
                  style={[
                    local.chipArt,
                    { backgroundColor: done ? 'transparent' : EXERCISE_THUMB[item.id] },
                  ]}
                >
                  <ExerciseArt id={item.id} />
                </View>
                <Text style={[local.chipText, done && local.chipTextOn]}>
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={local.title}>{t('tasks.long')}</Text>
        <Text style={local.lead}>{t('tasks.longLead')}</Text>

        <View style={local.longCard}>
          <View style={[local.thumb, { backgroundColor: '#E3EDE6' }]}>
            <CalendarIcon color={colors.accent} />
          </View>
          <View style={local.longCopy}>
            <View style={local.longHead}>
              <Text style={local.cardTitle}>{t('tasks.d30')}</Text>
              <Text style={local.chevron}>›</Text>
            </View>
            <Text style={local.cardBody}>{t('tasks.d30Body')}</Text>
            <View style={local.barRow}>
              <View style={local.track}>
                <View
                  style={[local.fill, { width: `${(long30 / 30) * 100}%` }]}
                />
              </View>
              <Text style={local.frac}>{long30}/30</Text>
            </View>
          </View>
        </View>

        <View style={local.longCard}>
          <View style={[local.thumb, { backgroundColor: '#F3EEDC' }]}>
            <CalendarIcon color="#C43C1B" />
          </View>
          <View style={local.longCopy}>
            <View style={local.longHead}>
              <Text style={local.cardTitle}>{t('tasks.d365')}</Text>
              <Text style={local.frac}>{long365}/365</Text>
            </View>
            <Text style={local.cardBody}>{t('tasks.d365Body')}</Text>
            <View style={local.track}>
              <View
                style={[local.fill, { width: `${(long365 / 365) * 100}%` }]}
              />
            </View>
          </View>
        </View>

        <View style={local.longCard}>
          <View style={[local.thumb, { backgroundColor: '#EEE8F6' }]}>
            <BookIcon color="#6B5B95" />
          </View>
          <View style={local.longCopy}>
            <View style={local.longHead}>
              <Text style={local.cardTitle}>{t('tasks.lesson30')}</Text>
              <Text style={local.frac}>{lesson30}/30</Text>
            </View>
            <Text style={local.cardBody}>{t('tasks.lesson30Body')}</Text>
            <View style={local.track}>
              <View
                style={[local.fill, { width: `${(lesson30 / 30) * 100}%` }]}
              />
            </View>
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
    paddingRight: 8,
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
    fontSize: 32,
    fontWeight: '800',
    color: colors.ink,
  },
  lead: {
    marginTop: 8,
    marginBottom: 16,
    fontSize: 15,
    lineHeight: 22,
    color: colors.body,
  },
  decor: {
    width: 110,
    height: 88,
    borderRadius: 24,
    marginTop: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 14,
    marginBottom: 10,
  },
  thumb: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardCopy: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
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
    fontSize: 13,
    fontWeight: '700',
    color: colors.accent,
  },
  chevron: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.accent,
    marginTop: -2,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
    marginBottom: 24,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.surface,
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  chipOn: {
    backgroundColor: colors.primary,
  },
  chipArt: {
    width: 22,
    height: 22,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transform: [{ scale: 0.72 }],
  },
  chipText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.ink,
  },
  chipTextOn: {
    color: '#F5F1E9',
  },
  longCard: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
  },
  longCopy: {
    flex: 1,
  },
  longHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  barRow: {
    marginTop: 10,
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
    marginTop: 10,
  },
  fill: {
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});
}
