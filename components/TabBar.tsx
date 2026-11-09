import { ComponentType } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useT } from '../i18n';
import { Colors, useColors } from '../theme';
import {
  BookIcon,
  ClipboardIcon,
  HouseIcon,
  TargetIcon,
} from './NavIcons';

export type TabId =
  | 'home'
  | 'exercises'
  | 'tasks'
  | 'learn'
  | 'profile'
  | 'settings';

const TABS: {
  id: TabId;
  labelKey: string;
  Icon: ComponentType<{ color: string; filled?: boolean }>;
}[] = [
  { id: 'home', labelKey: 'nav.home', Icon: HouseIcon },
  { id: 'exercises', labelKey: 'nav.exercises', Icon: TargetIcon },
  { id: 'tasks', labelKey: 'nav.tasks', Icon: ClipboardIcon },
  { id: 'learn', labelKey: 'nav.learn', Icon: BookIcon },
];

export function TabBar({
  tab,
  onChange,
}: {
  tab: TabId;
  onChange: (next: TabId) => void;
}) {
  const insets = useSafeAreaInsets();
  const colors = useColors();
  const t = useT();
  const local = stylesFor(colors);
  const bottomPad = Math.max(insets.bottom, 12);

  return (
    <View style={[local.bar, { paddingBottom: bottomPad }]}>
      <View style={local.inner}>
        {TABS.map((item) => {
          const active = item.id === tab;
          const color = active ? colors.accent : colors.tabOff;
          const label = t(item.labelKey);
          return (
            <Pressable
              key={item.id}
              accessibilityRole="tab"
              accessibilityLabel={label}
              accessibilityState={{ selected: active }}
              hitSlop={4}
              onPress={() => onChange(item.id)}
              style={[local.tab, active && local.tabOn]}
            >
              {active ? (
                <>
                  <item.Icon color={color} />
                  <Text style={[local.label, local.labelOn]} numberOfLines={1}>
                    {label}
                  </Text>
                  <View style={local.dot} />
                </>
              ) : (
                <>
                  <View style={local.well}>
                    <item.Icon color={color} />
                  </View>
                  <Text
                    style={local.label}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.8}
                  >
                    {label}
                  </Text>
                </>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function stylesFor(c: Colors) {
  return StyleSheet.create({
    bar: {
      backgroundColor: 'transparent',
      paddingHorizontal: 18,
      paddingTop: 6,
    },
    inner: {
      width: '100%',
      maxWidth: 560,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      backgroundColor: c.tabPill,
      borderRadius: 40,
      paddingVertical: 8,
      paddingHorizontal: 8,
      shadowColor: '#1F1A16',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      elevation: 8,
    },
    tab: {
      flex: 1,
      minHeight: 72,
      minWidth: 44,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      gap: 4,
    },
    tabOn: {
      flex: 1,
      backgroundColor: c.tabActive,
      borderRadius: 28,
      paddingVertical: 10,
      paddingHorizontal: 8,
    },
    well: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: c.tabWell,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 11,
      lineHeight: 14,
      fontWeight: '500',
      textAlign: 'center',
      color: c.tabOff,
    },
    labelOn: {
      marginTop: 2,
      fontSize: 12,
      fontWeight: '700',
      color: c.accent,
    },
    dot: {
      width: 5,
      height: 5,
      borderRadius: 3,
      backgroundColor: c.accent,
      marginTop: 2,
    },
  });
}
