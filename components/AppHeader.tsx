import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useT } from '../i18n';
import { useColors } from '../theme';
import { CircleUserIcon, GearIcon } from './NavIcons';
import { TabId } from './TabBar';

export function AppHeader({
  onOpenTab,
}: {
  onOpenTab: (tab: TabId) => void;
}) {
  const colors = useColors();
  const t = useT();
  return (
    <View style={local.header}>
      <Image
        source={require('../assets/logo.jpg')}
        style={local.logo}
        accessibilityLabel={t('common.logo')}
      />
      <View style={local.headerText}>
        <Text style={[local.brand, { color: colors.ink }]}>Zihnify</Text>
        <Text style={[local.tagline, { color: colors.body }]}>
          {t('header.tagline')}
        </Text>
      </View>
      <View style={local.headerActions}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('nav.profile')}
          hitSlop={8}
          onPress={() => onOpenTab('profile')}
          style={[local.iconBtn, { backgroundColor: colors.headerBtn }]}
        >
          <CircleUserIcon color={colors.accent} />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('nav.settings')}
          hitSlop={8}
          onPress={() => onOpenTab('settings')}
          style={[local.iconBtn, { backgroundColor: colors.headerBtn }]}
        >
          <GearIcon color={colors.accent} />
        </Pressable>
      </View>
    </View>
  );
}

const local = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  headerText: {
    flex: 1,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1F1A16',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  brand: {
    fontSize: 26,
    fontWeight: '700',
  },
  tagline: {
    marginTop: 1,
    fontSize: 13,
    lineHeight: 18,
  },
});
