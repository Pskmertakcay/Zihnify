import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { Appearance, StyleSheet } from 'react-native';
import { getStored, setStored } from './storage';

export type ColorScheme = 'light' | 'dark' | 'mist' | 'sunset' | 'contrast';

export const SCHEME_LABELS: Record<ColorScheme, string> = {
  light: 'Light',
  dark: 'Dark',
  mist: 'Mist',
  sunset: 'Sunset',
  contrast: 'High contrast',
};

export function isDarkScheme(scheme: ColorScheme) {
  return scheme === 'dark' || scheme === 'contrast';
}

export type Colors = {
  bg: string;
  ink: string;
  muted: string;
  body: string;
  card: string;
  primary: string;
  accent: string;
  primaryText: string;
  miss: string;
  surface: string;
  well: string;
  line: string;
  tile: string;
  tileDone: string;
  numIdle: string;
  tabPill: string;
  tabActive: string;
  tabWell: string;
  tabOff: string;
  headerBtn: string;
  overlay: string;
  switchOff: string;
};

export const palettes: Record<ColorScheme, Colors> = {
  light: {
    bg: '#F5F1E9',
    ink: '#1F1A16',
    muted: '#7A817B',
    body: '#5C554B',
    card: '#FFFDF8',
    primary: '#29483B',
    accent: '#29483B',
    primaryText: '#F5F1E9',
    miss: '#8C3A32',
    surface: '#FFFFFF',
    well: '#E7F2EA',
    line: '#EEE8DF',
    tile: '#F3EEE4',
    tileDone: '#D8E8DC',
    numIdle: '#B0AAA0',
    tabPill: '#FFFFFF',
    tabActive: '#E7F2EA',
    tabWell: '#EEEAE3',
    tabOff: '#6B756F',
    headerBtn: '#FFFFFF',
    overlay: 'rgba(31, 26, 22, 0.45)',
    switchOff: '#D8D3C8',
  },
  dark: {
    bg: '#121814',
    ink: '#F3EEE6',
    muted: '#9AA49C',
    body: '#C9C3B8',
    card: '#1C241F',
    primary: '#3D5A4A',
    accent: '#C5DDD0',
    primaryText: '#F5F1E9',
    miss: '#D07A72',
    surface: '#1C241F',
    well: '#24352C',
    line: '#2C3530',
    tile: '#242C28',
    tileDone: '#2A4338',
    numIdle: '#6E766F',
    tabPill: '#1C241F',
    tabActive: '#2A3A32',
    tabWell: '#242C28',
    tabOff: '#9AA49C',
    headerBtn: '#1C241F',
    overlay: 'rgba(0, 0, 0, 0.62)',
    switchOff: '#3A423C',
  },
  mist: {
    bg: '#E4EBE8',
    ink: '#17241F',
    muted: '#6A7872',
    body: '#44524C',
    card: '#F3F7F5',
    primary: '#3A5A50',
    accent: '#3A5A50',
    primaryText: '#F3F7F5',
    miss: '#8C3A32',
    surface: '#FFFFFF',
    well: '#D4E2DC',
    line: '#D0DBD6',
    tile: '#DDE6E2',
    tileDone: '#C3D6CE',
    numIdle: '#87948E',
    tabPill: '#FFFFFF',
    tabActive: '#D4E2DC',
    tabWell: '#E0E8E4',
    tabOff: '#6A7872',
    headerBtn: '#FFFFFF',
    overlay: 'rgba(23, 36, 31, 0.45)',
    switchOff: '#C5D0CB',
  },
  sunset: {
    bg: '#F3E4D4',
    ink: '#2A1812',
    muted: '#8A6A5A',
    body: '#5C3E32',
    card: '#FBF1E6',
    primary: '#8A3F32',
    accent: '#8A3F32',
    primaryText: '#FBF1E6',
    miss: '#6B241C',
    surface: '#FFF8F1',
    well: '#F0D4C0',
    line: '#E6D0BC',
    tile: '#EBD4C0',
    tileDone: '#E4B898',
    numIdle: '#B39280',
    tabPill: '#FFF8F1',
    tabActive: '#F0D4C0',
    tabWell: '#EEDCCC',
    tabOff: '#8A6A5A',
    headerBtn: '#FFF8F1',
    overlay: 'rgba(42, 24, 18, 0.48)',
    switchOff: '#D8C4B4',
  },
  contrast: {
    bg: '#000000',
    ink: '#FFFFFF',
    muted: '#D0D0D0',
    body: '#F0F0F0',
    card: '#121212',
    primary: '#F5F1E9',
    accent: '#FFFFFF',
    primaryText: '#000000',
    miss: '#FF7A72',
    surface: '#0A0A0A',
    well: '#2A2A2A',
    line: '#4A4A4A',
    tile: '#1A1A1A',
    tileDone: '#2E2E2E',
    numIdle: '#8A8A8A',
    tabPill: '#121212',
    tabActive: '#2A2A2A',
    tabWell: '#1A1A1A',
    tabOff: '#C8C8C8',
    headerBtn: '#121212',
    overlay: 'rgba(0, 0, 0, 0.78)',
    switchOff: '#3A3A3A',
  },
};

export const colors = palettes.light;

const STORAGE_KEY = 'zihnify-appearance-v1';

type ThemeContextValue = {
  scheme: ColorScheme;
  colors: Colors;
  setScheme: (next: ColorScheme) => void;
  shared: ReturnType<typeof makeSharedStyles>;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isScheme(value: string | null): value is ColorScheme {
  return (
    value === 'dark' ||
    value === 'mist' ||
    value === 'sunset' ||
    value === 'contrast' ||
    value === 'light'
  );
}

export function makeSharedStyles(c: Colors) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: c.bg,
      paddingHorizontal: 24,
      paddingTop: 64,
      paddingBottom: 32,
    },
    back: {
      alignSelf: 'flex-start',
      marginBottom: 12,
      paddingVertical: 4,
    },
    backText: {
      color: c.muted,
      fontSize: 15,
    },
    brand: {
      fontSize: 18,
      fontWeight: '700',
      color: c.ink,
    },
    meta: {
      marginTop: 4,
      marginBottom: 28,
      color: c.muted,
      fontSize: 14,
    },
    card: {
      backgroundColor: c.card,
      borderRadius: 24,
      padding: 28,
      gap: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: c.ink,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: c.body,
    },
    primary: {
      marginTop: 8,
      backgroundColor: c.primary,
      borderRadius: 16,
      paddingVertical: 16,
      alignItems: 'center',
    },
    primaryText: {
      color: c.primaryText,
      fontSize: 17,
      fontWeight: '600',
    },
    stage: {
      flex: 1,
      alignItems: 'center',
    },
    hint: {
      color: c.muted,
      fontSize: 16,
      marginBottom: 16,
    },
  });
}

export const styles = makeSharedStyles(palettes.light);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [scheme, setSchemeState] = useState<ColorScheme>('light');
  const [ready, setReady] = useState(false);
  const palette = palettes[scheme];
  const shared = useMemo(() => makeSharedStyles(palette), [palette]);

  useEffect(() => {
    let cancelled = false;
    void getStored(STORAGE_KEY).then((raw) => {
      if (cancelled) {
        return;
      }
      if (isScheme(raw)) {
        setSchemeState(raw);
      }
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const os = isDarkScheme(scheme) ? 'dark' : 'light';
    Appearance.setColorScheme?.(os);
    if (typeof document !== 'undefined') {
      document.documentElement.style.backgroundColor = palette.bg;
      document.documentElement.style.colorScheme = os;
      document.body.style.backgroundColor = palette.bg;
    }
  }, [scheme, palette]);

  useEffect(() => {
    if (!ready) {
      return;
    }
    void setStored(STORAGE_KEY, scheme);
  }, [scheme, ready]);

  const setScheme = (next: ColorScheme) => {
    setSchemeState(next);
  };

  const value = useMemo(
    () => ({ scheme, colors: palette, setScheme, shared }),
    [scheme, palette, shared]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error('ThemeProvider gerekli');
  }
  return value;
}

export function useColors() {
  return useTheme().colors;
}

export function useSharedStyles() {
  return useTheme().shared;
}

export function useThemedStyles<T extends StyleSheet.NamedStyles<T>>(
  factory: (c: Colors) => T
) {
  const c = useColors();
  return useMemo(() => StyleSheet.create(factory(c)), [c]);
}
