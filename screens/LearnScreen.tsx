import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { AppHeader } from '../components/AppHeader';
import { TargetIcon } from '../components/NavIcons';
import { TabId } from '../components/TabBar';
import { useExercises, useLocale, useT } from '../i18n';
import { Colors, useColors } from '../theme';
import { Lesson, getLessons } from './lessons';

function relatedExerciseName(
  lesson: Lesson,
  exercises: ReturnType<typeof useExercises>
) {
  const id = [...lesson.pages]
    .reverse()
    .find((page) => page.tryExercise)?.tryExercise;
  return exercises.find((item) => item.id === id)?.title;
}

const COVER: Record<
  string,
  { image?: number; bg: string; art?: 'bolt' | 'target' }
> = {
  attention: { image: require('../assets/learn-leaves.jpg'), bg: '#E7EFE4' },
  memory: { image: require('../assets/learn-stones.jpg'), bg: '#E8EFE8' },
  reaction: { bg: '#E4EDDF', art: 'bolt' },
  focus: { bg: '#E7EFE4', art: 'target' },
  plasticity: { image: require('../assets/learn-brain.jpg'), bg: '#E8EFE8' },
  multitask: { image: require('../assets/learn-stones.jpg'), bg: '#EDE6D8' },
  fatigue: { image: require('../assets/learn-leaves.jpg'), bg: '#E7EFE4' },
};

function Cover({ id }: { id: string }) {
  const colors = useColors();
  const local = stylesFor(colors);
  const cover = COVER[id] ?? { bg: colors.well };
  return (
    <View style={[local.thumb, { backgroundColor: cover.bg }]}>
      {cover.image ? (
        <Image source={cover.image} style={local.thumbImg} />
      ) : null}
      {cover.art === 'bolt' ? (
        <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
          <Path d="M13 3 5 13h6l-1 8 9-11h-6z" fill={colors.accent} />
        </Svg>
      ) : null}
      {cover.art === 'target' ? <TargetIcon color={colors.accent} /> : null}
    </View>
  );
}

export function LearnScreen({
  onOpenLesson,
  onOpenTab,
  readIds,
}: {
  onOpenLesson: (lesson: Lesson) => void;
  onOpenTab: (tab: TabId) => void;
  readIds: string[];
}) {
  const colors = useColors();
  const local = stylesFor(colors);
  const t = useT();
  const { locale } = useLocale();
  const exercises = useExercises();
  const lessons = getLessons(locale);
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
            <Text style={local.kicker}>{t('learn.kicker')}</Text>
            <Text style={local.title}>{t('learn.title')}</Text>
            <Text style={local.lead}>{t('learn.lead')}</Text>
          </View>
          <Image
            source={require('../assets/learn-brain.jpg')}
            style={local.decor}
          />
        </View>

        {lessons.map((item) => {
          const read = readIds.includes(item.id);
          const meta = [
            item.readMinutes,
            item.category,
            relatedExerciseName(item, exercises),
          ]
            .filter(Boolean)
            .join(' · ');
          return (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              accessibilityLabel={`${item.title}. ${item.subtitle}${read ? `. ${t('common.done')}` : ''}`}
              style={[local.card, read && local.cardRead]}
              onPress={() => onOpenLesson(item)}
            >
              <Cover id={item.id} />
              <View style={local.cardBody}>
                <View style={local.metaRow}>
                  <Text style={local.meta}>{meta}</Text>
                  {read ? (
                    <View style={local.donePill}>
                      <Text style={local.done}>{t('common.done')}</Text>
                      <View style={local.doneDot}>
                        <Text style={local.doneMark}>✓</Text>
                      </View>
                    </View>
                  ) : null}
                </View>
                <View style={local.titleLine}>
                  <Text style={local.cardTitle}>{item.title}</Text>
                  <Text style={local.chevron}>›</Text>
                </View>
                <Text style={local.cardSub}>{item.subtitle}</Text>
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
    width: 112,
    height: 96,
    borderRadius: 24,
    marginTop: 4,
  },
  card: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 12,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  cardRead: {
    backgroundColor: colors.well,
  },
  thumb: {
    width: 72,
    height: 72,
    borderRadius: 18,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbImg: {
    width: '100%',
    height: '100%',
  },
  cardBody: {
    flex: 1,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 4,
  },
  meta: {
    flex: 1,
    fontSize: 11,
    fontWeight: '600',
    color: colors.muted,
  },
  donePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  done: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.accent,
  },
  doneDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneMark: {
    color: '#F5F1E9',
    fontSize: 11,
    fontWeight: '700',
  },
  titleLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  cardTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '800',
    color: colors.ink,
  },
  chevron: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.accent,
    marginTop: -4,
  },
  cardSub: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: colors.body,
  },
});
}
