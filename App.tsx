import { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HowToPlay } from './components/HowToPlay';
import { LessonModal } from './components/LessonModal';
import { LevelSelect } from './components/LevelSelect';
import { TabBar, TabId } from './components/TabBar';
import { FindTheTarget } from './exercises/FindTheTarget';
import { KeepTracking } from './exercises/KeepTracking';
import { OddOneOut } from './exercises/OddOneOut';
import { SequenceMemory } from './exercises/SequenceMemory';
import { WaitAndTap } from './exercises/WaitAndTap';
import { ExerciseId, TOTAL_LEVELS } from './exercises/types';
import { ExercisesScreen } from './screens/ExercisesScreen';
import { HomeScreen } from './screens/HomeScreen';
import { LearnScreen } from './screens/LearnScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { Lesson } from './screens/lessons';
import { TasksScreen } from './screens/TasksScreen';
import {
  EMPTY_PROGRESS,
  freshProgress,
  loadProgress,
  recordDailyClear,
  recordLesson,
  recordPractice,
  saveProgress,
  SavedProgress,
} from './progress';
import { LocaleProvider, useExercises } from './i18n';
import { RemindersProvider } from './reminders';
import { ThemeProvider, isDarkScheme, useColors, useTheme } from './theme';

type Screen = 'home' | ExerciseId;

void SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 400, fade: true });

export default function App() {
  return (
    <SafeAreaProvider>
      <LocaleProvider>
        <ThemeProvider>
          <RemindersProvider>
            <AppBody />
          </RemindersProvider>
        </ThemeProvider>
      </LocaleProvider>
    </SafeAreaProvider>
  );
}

function AppBody() {
  const { scheme } = useTheme();
  const palette = useColors();
  const EXERCISES = useExercises();
  const bar = isDarkScheme(scheme) ? 'light' : 'dark';
  const [screen, setScreen] = useState<Screen>('home');
  const [tab, setTab] = useState<TabId>('home');
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [playingLevel, setPlayingLevel] = useState<number | null>(null);
  const [seenHowTo, setSeenHowTo] = useState<Partial<Record<ExerciseId, boolean>>>(
    {}
  );
  const [progress, setProgress] = useState<SavedProgress>(EMPTY_PROGRESS);
  const [ready, setReady] = useState(false);
  const [splashHeld, setSplashHeld] = useState(true);
  const completed = progress.completed;

  useEffect(() => {
    let cancelled = false;
    void loadProgress().then((next) => {
      if (!cancelled) {
        setProgress(next);
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const hold = setTimeout(() => setSplashHeld(false), 900);
    return () => clearTimeout(hold);
  }, []);

  useEffect(() => {
    if (!ready || splashHeld) {
      return;
    }
    void SplashScreen.hideAsync();
  }, [ready, splashHeld]);

  useEffect(() => {
    if (!ready) {
      return;
    }
    void saveProgress(progress);
  }, [progress, ready]);

  const updateProgress = useCallback((patch: (prev: SavedProgress) => SavedProgress) => {
    setProgress((prev) => patch(prev));
  }, []);

  const markComplete = useCallback((id: ExerciseId, level: number) => {
    updateProgress((prev) => {
      const next = recordDailyClear(prev, id);
      return {
        ...next,
        completed: next.completed[id].includes(level)
          ? next.completed
          : { ...next.completed, [id]: [...next.completed[id], level] },
        lastPlayed: {
          ...next.lastPlayed,
          [id]: Math.min(TOTAL_LEVELS, level + 1),
        },
      };
    });
  }, [updateProgress]);

  const markPractice = useCallback(() => {
    updateProgress((prev) => recordPractice(prev));
  }, [updateProgress]);

  const resetProgress = useCallback(async () => {
    const next = freshProgress();
    setProgress(next);
    await saveProgress(next);
    setSeenHowTo({});
    setScreen('home');
    setPlayingLevel(null);
  }, []);

  const startExercise = useCallback((id: ExerciseId) => {
    setLesson(null);
    setSeenHowTo((prev) => ({ ...prev, [id]: true }));
    setPlayingLevel(null);
    setScreen(id);
  }, []);

  const current = EXERCISES.find((item) => item.id === screen);

  if (!ready || splashHeld) {
    return (
      <View style={[local.splash, { backgroundColor: palette.bg }]}>
        <StatusBar style={bar} />
        <Image
          source={require('./assets/icon.png')}
          style={local.splashIcon}
          accessibilityIgnoresInvertColors
        />
      </View>
    );
  }

  if (current && playingLevel == null && !seenHowTo[current.id]) {
    return (
      <>
        <StatusBar style={bar} />
        <HowToPlay
          id={current.id}
          onBack={() => setScreen('home')}
          onContinue={() =>
            setSeenHowTo((prev) => ({ ...prev, [current.id]: true }))
          }
        />
      </>
    );
  }

  if (current && playingLevel == null) {
    return (
      <>
        <StatusBar style={bar} />
        <LevelSelect
          title={current.title}
          kind={current.kind}
          body={current.body}
          completed={completed[current.id]}
          lastPlayed={progress.lastPlayed[current.id]}
          onBack={() => setScreen('home')}
          onPick={(level) => {
            updateProgress((prev) => ({
              ...prev,
              lastPlayed: { ...prev.lastPlayed, [current.id]: level },
            }));
            setPlayingLevel(level);
          }}
        />
      </>
    );
  }

  if (current && playingLevel != null) {
    const launch = {
      initialLevel: playingLevel,
      onBack: () => setPlayingLevel(null),
      onLevelComplete: (level: number) => markComplete(current.id, level),
      onPractice: markPractice,
    };

    return (
      <>
        <StatusBar style={bar} />
        {current.id === 'find' ? (
          <FindTheTarget key={playingLevel} {...launch} />
        ) : null}
        {current.id === 'odd' ? (
          <OddOneOut key={playingLevel} {...launch} />
        ) : null}
        {current.id === 'track' ? (
          <KeepTracking key={playingLevel} {...launch} />
        ) : null}
        {current.id === 'wait' ? (
          <WaitAndTap key={playingLevel} {...launch} />
        ) : null}
        {current.id === 'sequence' ? (
          <SequenceMemory key={playingLevel} {...launch} />
        ) : null}
      </>
    );
  }

  return (
    <View style={[local.shell, { backgroundColor: palette.bg }]}>
      <StatusBar style={bar} />
      {tab === 'home' ? (
        <HomeScreen
          progress={progress}
          onOpenExercise={(id) => setScreen(id)}
          onOpenTab={setTab}
          onOpenLesson={setLesson}
        />
      ) : null}
      {tab === 'exercises' ? (
        <ExercisesScreen
          progress={progress}
          onOpen={(id) => setScreen(id)}
          onOpenTab={setTab}
        />
      ) : null}
      {tab === 'tasks' ? (
        <TasksScreen
          progress={progress}
          onOpenTab={setTab}
          onOpenExercise={(id) => setScreen(id)}
        />
      ) : null}
      {tab === 'learn' ? (
        <LearnScreen
          onOpenLesson={setLesson}
          onOpenTab={setTab}
          readIds={progress.lessonsRead}
        />
      ) : null}
      {tab === 'profile' ? (
        <ProfileScreen
          progress={progress}
          onOpenTab={setTab}
          onOpenExercise={(id) => setScreen(id)}
        />
      ) : null}
      {tab === 'settings' ? (
        <SettingsScreen
          onBack={() => setTab('home')}
          onResetProgress={resetProgress}
        />
      ) : null}
      {tab !== 'settings' ? (
        <TabBar tab={tab} onChange={setTab} />
      ) : null}
      <LessonModal
        lesson={lesson}
        onClose={() => setLesson(null)}
        onComplete={(id) => updateProgress((prev) => recordLesson(prev, id))}
        onTryExercise={startExercise}
      />
    </View>
  );
}

const local = StyleSheet.create({
  shell: {
    flex: 1,
  },
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashIcon: {
    width: 180,
    height: 180,
    borderRadius: 40,
  },
});
