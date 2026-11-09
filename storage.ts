import AsyncStorage from '@react-native-async-storage/async-storage';

function legacyGet(key: string): string | null {
  try {
    return globalThis.localStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function legacySet(key: string, value: string) {
  try {
    globalThis.localStorage?.setItem(key, value);
  } catch {
    // Private mode / quota.
  }
}

export async function getStored(key: string): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value != null) {
      return value;
    }
    const legacy = legacyGet(key);
    if (legacy != null) {
      await AsyncStorage.setItem(key, legacy);
      return legacy;
    }
    return null;
  } catch {
    return legacyGet(key);
  }
}

export async function setStored(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {
    legacySet(key, value);
  }
}
