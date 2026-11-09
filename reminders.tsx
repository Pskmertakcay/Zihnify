import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useLocale, useT } from './i18n';
import { getStored, setStored } from './storage';

const STORAGE_KEY = 'zihnify-reminders-v1';
const CHANNEL_ID = 'streak';
const NOTIFICATION_ID = 'zihnify-daily-streak';
const HOUR = 20;
const MINUTE = 0;

type RemindersContextValue = {
  enabled: boolean;
  setEnabled: (next: boolean) => Promise<void>;
};

const RemindersContext = createContext<RemindersContextValue | null>(null);

async function saveEnabled(enabled: boolean) {
  await setStored(STORAGE_KEY, enabled ? '1' : '0');
}

function isNative() {
  return Platform.OS === 'ios' || Platform.OS === 'android';
}

if (isNative()) {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
}

async function ensureChannel(name: string) {
  if (Platform.OS !== 'android') {
    return;
  }
  await Notifications.setNotificationChannelAsync(CHANNEL_ID, {
    name,
    importance: Notifications.AndroidImportance.DEFAULT,
  });
}

function confirmExplain(title: string, body: string, allow: string, cancel: string) {
  return new Promise<boolean>((resolve) => {
    Alert.alert(title, body, [
      { text: cancel, style: 'cancel', onPress: () => resolve(false) },
      { text: allow, onPress: () => resolve(true) },
    ]);
  });
}

async function requestAccess(explain?: {
  title: string;
  body: string;
  allow: string;
  cancel: string;
}) {
  const existing = await Notifications.getPermissionsAsync();
  if (existing.status === 'granted') {
    return true;
  }
  if (existing.status !== 'undetermined') {
    return false;
  }
  if (explain) {
    const go = await confirmExplain(
      explain.title,
      explain.body,
      explain.allow,
      explain.cancel
    );
    if (!go) {
      return false;
    }
  }
  const asked = await Notifications.requestPermissionsAsync();
  return asked.status === 'granted';
}

async function clearSchedule() {
  if (!isNative()) {
    return;
  }
  await Notifications.cancelScheduledNotificationAsync(NOTIFICATION_ID);
}

async function placeSchedule(
  title: string,
  body: string,
  channelName: string,
  explain?: {
    title: string;
    body: string;
    allow: string;
    cancel: string;
  }
) {
  if (!isNative()) {
    return false;
  }
  await ensureChannel(channelName);
  const ok = await requestAccess(explain);
  if (!ok) {
    await clearSchedule();
    return false;
  }
  await clearSchedule();
  await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATION_ID,
    content: {
      title,
      body,
      sound: false,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: HOUR,
      minute: MINUTE,
      channelId: CHANNEL_ID,
    },
  });
  return true;
}

export function RemindersProvider({ children }: { children: ReactNode }) {
  const t = useT();
  const { locale } = useLocale();
  const [enabled, setEnabledState] = useState(false);
  const [ready, setReady] = useState(false);

  const apply = useCallback(
    async (next: boolean, warn: boolean) => {
      if (!next) {
        await clearSchedule();
        await saveEnabled(false);
        setEnabledState(false);
        return;
      }
      const ok = await placeSchedule(
        t('settings.remindersPushTitle'),
        t('settings.remindersPushBody'),
        t('settings.remindersChannel'),
        warn
          ? {
              title: t('settings.reminders'),
              body: t('settings.remindersWhy'),
              allow: t('settings.remindersAllow'),
              cancel: t('common.close'),
            }
          : undefined
      );
      if (!ok) {
        await saveEnabled(false);
        setEnabledState(false);
        if (warn) {
          if (isNative()) {
            const status = (await Notifications.getPermissionsAsync()).status;
            if (status === 'undetermined') {
              return;
            }
          }
          Alert.alert(
            t('settings.reminders'),
            isNative()
              ? t('settings.remindersDenied')
              : t('settings.remindersWeb')
          );
        }
        return;
      }
      await saveEnabled(true);
      setEnabledState(true);
    },
    [t]
  );

  useEffect(() => {
    let cancelled = false;
    void getStored(STORAGE_KEY).then((raw) => {
      if (cancelled) {
        return;
      }
      setEnabledState(raw === '1');
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }
    void apply(enabled, false);
  }, [apply, enabled, locale, ready]);

  const setEnabled = useCallback(
    async (next: boolean) => {
      await apply(next, true);
    },
    [apply]
  );

  const value = useMemo(
    () => ({ enabled, setEnabled }),
    [enabled, setEnabled]
  );

  return (
    <RemindersContext.Provider value={value}>{children}</RemindersContext.Provider>
  );
}

export function useReminders() {
  const value = useContext(RemindersContext);
  if (!value) {
    throw new Error('RemindersProvider gerekli');
  }
  return value;
}
