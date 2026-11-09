import { Pressable, StyleSheet, Text } from 'react-native';
import { useT } from '../i18n';
import { useColors } from '../theme';

export function BackButton({ onPress }: { onPress: () => void }) {
  const colors = useColors();
  const t = useT();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('common.back')}
      hitSlop={16}
      onPress={onPress}
      style={local.back}
    >
      <Text style={[local.backText, { color: colors.accent }]}>
        ← {t('common.back')}
      </Text>
    </Pressable>
  );
}

const local = StyleSheet.create({
  back: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    minHeight: 44,
    minWidth: 88,
    justifyContent: 'center',
    paddingRight: 12,
  },
  backText: {
    fontSize: 17,
    fontWeight: '700',
  },
});
