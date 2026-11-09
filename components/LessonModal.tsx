import { useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ExerciseId } from '../exercises/types';
import { useExercises, useT } from '../i18n';
import { Lesson } from '../screens/lessons';
import { Colors, useColors } from '../theme';

export function LessonModal({
  lesson,
  onClose,
  onTryExercise,
  onComplete,
}: {
  lesson: Lesson | null;
  onClose: () => void;
  onTryExercise?: (id: ExerciseId) => void;
  onComplete?: (lessonId: string) => void;
}) {
  const colors = useColors();
  const local = stylesFor(colors);
  const t = useT();
  const EXERCISES = useExercises();
  const [page, setPage] = useState(0);
  const open = lesson != null;

  useEffect(() => {
    if (lesson) {
      setPage(0);
    }
  }, [lesson]);
  const total = lesson?.pages.length ?? 0;
  const current = lesson?.pages[page];
  const last = page === total - 1;

  function close() {
    setPage(0);
    onClose();
  }

  if (!open || !lesson || !current) {
    return null;
  }

  return (
    <View style={local.overlay} pointerEvents="box-none">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('common.close')}
        style={local.dim}
        onPress={close}
      />
      <View style={local.card} accessibilityViewIsModal pointerEvents="auto">
            <View style={local.top}>
              <Text style={local.kicker}>
                {page + 1} / {total}
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('common.close')}
                hitSlop={12}
                onPress={close}
                style={local.close}
              >
                <Text style={local.closeText}>{t('common.close')}</Text>
              </Pressable>
            </View>
            <Text style={local.series}>{lesson.title}</Text>
            <ScrollView
              style={local.scroll}
              contentContainerStyle={local.scrollInner}
              showsVerticalScrollIndicator={false}
            >
              <Text style={local.title}>{current.title}</Text>
              <Text style={local.body}>{current.body}</Text>
              {current.listTitle ? (
                <Text style={local.listTitle}>{current.listTitle}</Text>
              ) : null}
              {current.bullets?.map((item) => (
                <View key={item.label} style={local.bullet}>
                  <Text style={local.bulletLabel}>{item.label}</Text>
                  <Text style={local.bulletText}>{item.text}</Text>
                </View>
              ))}
              {current.remember ? (
                <View style={local.remember}>
                  <Text style={local.rememberLabel}>{t('lessonUi.remember')}</Text>
                  <Text style={local.rememberText}>{current.remember}</Text>
                </View>
              ) : null}
              {current.note ? (
                <Text style={local.note}>{current.note}</Text>
              ) : null}
              {current.miniTitle ? (
                <View style={local.mini}>
                  <Text style={local.miniTitle}>{current.miniTitle}</Text>
                  <Text style={local.miniBody}>{current.miniBody}</Text>
                </View>
              ) : null}
              {current.footer ? (
                <Text style={local.footer}>{current.footer}</Text>
              ) : null}
            </ScrollView>
            <View style={local.dots}>
              {lesson.pages.map((_, index) => (
                <View
                  key={index}
                  style={[local.dot, index === page && local.dotOn]}
                />
              ))}
            </View>
            <View style={local.actions}>
              {page > 0 ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={t('common.back')}
                  onPress={() => setPage((prev) => prev - 1)}
                  style={local.ghost}
                >
                  <Text style={local.ghostText}>{t('common.back')}</Text>
                </Pressable>
              ) : (
                <View style={local.ghost} />
              )}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={
                  last && current.tryExercise
                    ? t('lessonUi.tryWith', {
                        title:
                          EXERCISES.find((item) => item.id === current.tryExercise)
                            ?.title ?? t('lessonUi.exercise'),
                      })
                    : last
                      ? t('lessonUi.finish')
                      : t('lessonUi.next')
                }
                onPress={() => {
                  if (!last) {
                    setPage((prev) => prev + 1);
                    return;
                  }
                  const id = current.tryExercise;
                  onComplete?.(lesson.id);
                  if (id && onTryExercise) {
                    onTryExercise(id);
                    return;
                  }
                  close();
                }}
                style={local.next}
              >
                <Text style={local.nextText}>
                  {last && current.tryExercise
                    ? t('lessonUi.tryWith', {
                        title:
                          EXERCISES.find((item) => item.id === current.tryExercise)
                            ?.title ?? t('lessonUi.exercise'),
                      })
                    : last
                      ? t('lessonUi.finish')
                      : t('lessonUi.next')}
                </Text>
              </Pressable>
            </View>
      </View>
    </View>
  );
}

function stylesFor(colors: Colors) {
  return StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dim: {
    ...StyleSheet.absoluteFill,
    zIndex: 0,
    backgroundColor: colors.overlay,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    maxHeight: '82%',
    zIndex: 2,
    elevation: 8,
    backgroundColor: colors.card,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 20,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kicker: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
    color: colors.muted,
  },
  close: {
    minHeight: 32,
    justifyContent: 'center',
  },
  closeText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.accent,
  },
  series: {
    marginTop: 6,
    fontSize: 13,
    color: colors.body,
  },
  scroll: {
    marginTop: 12,
    flexGrow: 0,
  },
  scrollInner: {
    paddingBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.ink,
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.body,
  },
  listTitle: {
    marginTop: 16,
    fontSize: 15,
    fontWeight: '700',
    color: colors.ink,
  },
  bullet: {
    marginTop: 12,
  },
  bulletLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.accent,
  },
  bulletText: {
    marginTop: 2,
    fontSize: 15,
    lineHeight: 22,
    color: colors.body,
  },
  remember: {
    marginTop: 16,
    backgroundColor: colors.well,
    borderRadius: 14,
    padding: 14,
  },
  rememberLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 6,
  },
  rememberText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.ink,
  },
  mini: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    padding: 14,
  },
  miniTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.ink,
  },
  miniBody: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 22,
    color: colors.body,
  },
  note: {
    marginTop: 16,
    fontSize: 15,
    lineHeight: 22,
    color: colors.ink,
  },
  footer: {
    marginTop: 16,
    fontSize: 13,
    lineHeight: 20,
    color: colors.muted,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
    marginBottom: 14,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.line,
  },
  dotOn: {
    backgroundColor: colors.primary,
    width: 16,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  ghost: {
    minWidth: 72,
    minHeight: 44,
    justifyContent: 'center',
  },
  ghostText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.accent,
  },
  next: {
    flex: 1,
    minHeight: 48,
    backgroundColor: colors.primary,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: '600',
  },
});
}
