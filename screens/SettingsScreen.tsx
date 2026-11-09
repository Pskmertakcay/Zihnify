import { ReactNode, useState } from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { BackButton } from '../components/BackButton';
import { LocaleFlag } from '../components/LocaleFlag';
import { ThemePreview } from '../components/ThemePreview';
import { LOCALE_LABELS, LOCALES, useLocale, useT } from '../i18n';
import { useReminders } from '../reminders';
import { Colors, ColorScheme, useColors, useTheme } from '../theme';
import { getPrivacy, getTerms } from './legal';

type PanelId = 'privacy' | 'terms' | 'support' | 'language' | 'appearance';

const SUPPORT_EMAIL = 'zihnify@gmail.com';

function canMail(address: string) {
  return address.includes('@') && !address.includes('[');
}

function IconWrap({ children, well }: { children: ReactNode; well: string }) {
  return <View style={[local.icon, { backgroundColor: well }]}>{children}</View>;
}

function SunIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={4} stroke={color} strokeWidth={1.7} />
      <Path
        d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function MoonIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 3.3A8.2 8.2 0 1 0 20.7 15 6.4 6.4 0 0 1 15 3.3Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function MistIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 16h12M5 19h10M8 13a4.5 4.5 0 1 1 3.2-7.6A5.2 5.2 0 0 1 21 10.5H8Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SunsetIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 18h16M7 15a5 5 0 0 1 10 0M12 4v3M5.5 8.5l2 2M18.5 8.5l-2 2"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function ContrastIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={8} stroke={color} strokeWidth={1.7} />
      <Path d="M12 4a8 8 0 0 1 0 16V4Z" fill={color} />
    </Svg>
  );
}

function BellIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Path d="M10 20a2 2 0 0 0 4 0" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
    </Svg>
  );
}

function MailIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Rect x={3} y={6} width={18} height={12} rx={2} stroke={color} strokeWidth={1.7} />
      <Path d="M4 7l8 6 8-6" stroke={color} strokeWidth={1.7} strokeLinejoin="round" />
    </Svg>
  );
}

function ShieldIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 3 5 6v6c0 5 3.2 7.8 7 9 3.8-1.2 7-4 7-9V6l-7-3Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Path d="M9 12l2 2 4-4" stroke={color} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function DocIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 3h8l5 5v13H7V3Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Path d="M15 3v5h5M9 13h6M9 17h6" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
    </Svg>
  );
}

function TrashIcon({ color }: { color: string }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 7h16M9 7V5h6v2M8 7l1 13h6l1-13"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Row({
  icon,
  title,
  subtitle,
  onPress,
  last,
  trailing,
  colors,
  danger,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  last?: boolean;
  trailing?: ReactNode;
  colors: Colors;
  danger?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : 'none'}
      accessibilityLabel={title}
      onPress={onPress}
      style={[
        local.row,
        { borderBottomColor: colors.line },
        last && local.rowLast,
      ]}
    >
      <IconWrap well={colors.well}>{icon}</IconWrap>
      <View style={local.rowCopy}>
        <Text style={[local.rowTitle, { color: danger ? colors.miss : colors.ink }]}>
          {title}
        </Text>
        {subtitle ? (
          <Text style={[local.rowSub, { color: colors.muted }]}>{subtitle}</Text>
        ) : null}
      </View>
      {trailing ?? (
        <Text style={[local.chevron, { color: colors.muted }]}>›</Text>
      )}
    </Pressable>
  );
}

export function SettingsScreen({
  onBack,
  onResetProgress,
}: {
  onBack: () => void;
  onResetProgress: () => Promise<void>;
}) {
  const { scheme, setScheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const { enabled: reminders, setEnabled: setReminders } = useReminders();
  const t = useT();
  const colors = useColors();
  const [panel, setPanel] = useState<PanelId | null>(null);
  const [resetStep, setResetStep] = useState<'idle' | 'ask' | 'done'>('idle');
  const [resetBusy, setResetBusy] = useState(false);
  const accent = colors.accent;
  const look = stylesFor(colors);

  async function runReset() {
    if (resetBusy) {
      return;
    }
    setResetBusy(true);
    try {
      await setReminders(false);
      await onResetProgress();
      setResetStep('done');
    } finally {
      setResetBusy(false);
    }
  }

  if (panel === 'support') {
    return (
      <ScrollView style={look.scroll} contentContainerStyle={look.page}>
        <BackButton onPress={() => setPanel(null)} />
        <Text style={look.kicker}>{t('settings.support')}</Text>
        <Text style={look.title}>{t('settings.contact')}</Text>
        <Text style={look.docBody}>{t('settings.contactBody')}</Text>
        <View style={look.group}>
          <View style={[look.row, look.rowLast, { borderBottomColor: colors.line }]}>
            <IconWrap well={colors.well}>
              <MailIcon color={accent} />
            </IconWrap>
            <View style={look.rowCopy}>
              <Text style={look.rowTitle}>{t('settings.email')}</Text>
              <Text style={look.rowSub}>{SUPPORT_EMAIL}</Text>
            </View>
          </View>
        </View>
        {canMail(SUPPORT_EMAIL) ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('settings.sendMail')}
            style={look.mailBtn}
            onPress={() => Linking.openURL(`mailto:${SUPPORT_EMAIL}`)}
          >
            <Text style={look.mailBtnText}>{t('settings.sendMail')}</Text>
          </Pressable>
        ) : (
          <Text style={look.hint}>Adres biraz sonra eklenecek.</Text>
        )}
      </ScrollView>
    );
  }

  if (panel === 'language') {
    const options = LOCALES;
    return (
      <ScrollView style={look.scroll} contentContainerStyle={look.page}>
        <BackButton onPress={() => setPanel(null)} />
        <Text style={look.kicker}>{t('settings.app')}</Text>
        <Text style={look.title}>{t('settings.language')}</Text>
        <View style={look.group}>
          {options.map((id, index) => {
            const on = locale === id;
            const last = index === options.length - 1;
            return (
              <Pressable
                key={id}
                accessibilityRole="button"
                accessibilityState={{ selected: on }}
                accessibilityLabel={LOCALE_LABELS[id]}
                onPress={() => setLocale(id)}
                style={[
                  look.row,
                  last && look.rowLast,
                  { borderBottomColor: colors.line },
                ]}
              >
                <IconWrap well={colors.well}>
                  <LocaleFlag locale={id} />
                </IconWrap>
                <View style={look.rowCopy}>
                  <Text style={look.rowTitle}>{LOCALE_LABELS[id]}</Text>
                </View>
                <View
                  style={[
                    look.radio,
                    on && {
                      borderColor: colors.accent,
                      backgroundColor: colors.accent,
                    },
                  ]}
                >
                  {on ? <View style={look.radioDot} /> : null}
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    );
  }

  if (panel === 'appearance') {
    const options: {
      id: ColorScheme;
      title: string;
      subtitle: string;
      well: string;
      Icon: typeof SunIcon;
    }[] = [
      {
        id: 'light',
        title: t('settings.light'),
        subtitle: t('settings.lightSub'),
        well: '#E4EDE4',
        Icon: SunIcon,
      },
      {
        id: 'dark',
        title: t('settings.dark'),
        subtitle: t('settings.darkSub'),
        well: '#D8DEE8',
        Icon: MoonIcon,
      },
      {
        id: 'mist',
        title: t('settings.mist'),
        subtitle: t('settings.mistSub'),
        well: '#D5DCE6',
        Icon: MistIcon,
      },
      {
        id: 'sunset',
        title: t('settings.sunset'),
        subtitle: t('settings.sunsetSub'),
        well: '#F3D9C8',
        Icon: SunsetIcon,
      },
      {
        id: 'contrast',
        title: t('settings.contrast'),
        subtitle: t('settings.contrastSub'),
        well: '#E4DCEC',
        Icon: ContrastIcon,
      },
    ];
    return (
      <ScrollView style={look.scroll} contentContainerStyle={look.page}>
        <BackButton onPress={() => setPanel(null)} />
        <Text style={look.kicker}>{t('settings.app')}</Text>
        <Text style={[look.title, look.appearanceTitle]}>{t('settings.appearance')}</Text>
        <Text style={look.appearanceLead}>{t('settings.appearanceLead')}</Text>
        {options.map((item) => {
          const on = scheme === item.id;
          return (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              accessibilityState={{ selected: on }}
              accessibilityLabel={item.title}
              onPress={() => setScheme(item.id)}
              style={look.themeCard}
            >
              <IconWrap well={item.well}>
                <item.Icon color={accent} />
              </IconWrap>
              <View style={look.rowCopy}>
                <Text style={look.rowTitle}>{item.title}</Text>
                <Text style={look.rowSub}>{item.subtitle}</Text>
              </View>
              <View style={look.themePreview}>
                <ThemePreview id={item.id} />
              </View>
              <View
                style={[
                  look.radio,
                  on && { borderColor: colors.primary, backgroundColor: colors.primary },
                ]}
              >
                {on ? <View style={look.radioDot} /> : null}
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    );
  }

  if (panel) {
    const doc = panel === 'privacy' ? getPrivacy(locale) : getTerms(locale);
    return (
      <ScrollView style={look.scroll} contentContainerStyle={look.page}>
        <BackButton onPress={() => setPanel(null)} />
        <Text style={look.kicker}>{doc.kicker}</Text>
        <Text style={look.title}>{doc.title}</Text>
        {doc.updated ? (
          <Text style={look.updated}>
            {t('settings.updated', { date: doc.updated })}
          </Text>
        ) : null}
        {doc.sections.map((section, index) => (
          <View key={section.heading ?? `p-${index}`} style={look.block}>
            {section.heading ? (
              <Text style={look.heading}>{section.heading}</Text>
            ) : null}
            <Text style={look.docBody}>{section.body}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  return (
    <View style={look.scroll}>
    <ScrollView
      style={look.scroll}
      contentContainerStyle={look.page}
      showsVerticalScrollIndicator={false}
    >
      <BackButton onPress={onBack} />
      <Text style={look.kicker}>{t('settings.kicker')}</Text>
      <Text style={look.title}>{t('settings.title')}</Text>

      <Text style={look.section}>{t('settings.app')}</Text>
      <View style={look.group}>
        <Row
          colors={colors}
          icon={<LocaleFlag locale={locale} />}
          title={t('settings.language')}
          subtitle={LOCALE_LABELS[locale]}
          onPress={() => setPanel('language')}
        />
        <Row
          colors={colors}
          icon={
            scheme === 'dark' ? (
              <MoonIcon color={accent} />
            ) : scheme === 'mist' ? (
              <MistIcon color={accent} />
            ) : scheme === 'sunset' ? (
              <SunsetIcon color={accent} />
            ) : scheme === 'contrast' ? (
              <ContrastIcon color={accent} />
            ) : (
              <SunIcon color={accent} />
            )
          }
          title={t('settings.appearance')}
          subtitle={t(`settings.${scheme}`)}
          onPress={() => setPanel('appearance')}
        />
        <Row
          colors={colors}
          icon={<BellIcon color={accent} />}
          title={t('settings.reminders')}
          subtitle={t('settings.remindersBody')}
          last
          trailing={
            <Pressable
              accessibilityRole="switch"
              accessibilityState={{ checked: reminders }}
              accessibilityLabel={t('settings.reminders')}
              onPress={() => {
                void setReminders(!reminders);
              }}
              style={[
                look.switch,
                reminders && look.switchOn,
              ]}
            >
              <View style={[look.knob, reminders && look.knobOn]} />
            </Pressable>
          }
        />
      </View>

      <Text style={look.section}>{t('settings.data')}</Text>
      <View style={look.group}>
        <Row
          colors={colors}
          danger
          icon={<TrashIcon color={colors.miss} />}
          title={t('settings.reset')}
          subtitle={t('settings.resetSub')}
          last
          onPress={() => setResetStep('ask')}
        />
      </View>

      <Text style={look.section}>{t('settings.support')}</Text>
      <View style={look.group}>
        <Row
          colors={colors}
          icon={<MailIcon color={accent} />}
          title={t('settings.contact')}
          subtitle={t('settings.contactSub')}
          last
          onPress={() => setPanel('support')}
        />
      </View>

      <Text style={look.section}>{t('settings.legal')}</Text>
      <View style={look.group}>
        <Row
          colors={colors}
          icon={<ShieldIcon color={accent} />}
          title={t('settings.privacy')}
          onPress={() => setPanel('privacy')}
        />
        <Row
          colors={colors}
          icon={<DocIcon color={accent} />}
          title={t('settings.terms')}
          last
          onPress={() => setPanel('terms')}
        />
      </View>

      <Text style={look.footer}>{t('common.version')}</Text>
    </ScrollView>
    {resetStep !== 'idle' ? (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('common.close')}
        onPress={() => setResetStep('idle')}
        style={look.resetMask}
      >
        <Pressable
          accessibilityRole="none"
          onPress={(event) => event.stopPropagation()}
          style={look.resetCard}
        >
          <Text style={look.resetTitle}>{t('settings.reset')}</Text>
          <Text style={look.resetBody}>
            {resetStep === 'done'
              ? t('settings.resetDone')
              : t('settings.resetWarn')}
          </Text>
          {resetStep === 'done' ? (
            <Pressable
              accessibilityRole="button"
              onPress={() => setResetStep('idle')}
              style={look.resetOk}
            >
              <Text style={look.resetOkText}>{t('common.close')}</Text>
            </Pressable>
          ) : (
            <View style={look.resetActions}>
              <Pressable
                accessibilityRole="button"
                onPress={() => setResetStep('idle')}
                style={look.resetCancel}
              >
                <Text style={look.resetCancelText}>{t('common.cancel')}</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                disabled={resetBusy}
                onPress={() => {
                  void runReset();
                }}
                style={look.resetConfirm}
              >
                <Text style={look.resetConfirmText}>
                  {t('settings.resetConfirm')}
                </Text>
              </Pressable>
            </View>
          )}
        </Pressable>
      </Pressable>
    ) : null}
    </View>
  );
}

const local = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  rowCopy: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  rowSub: {
    marginTop: 2,
    fontSize: 13,
  },
  chevron: {
    fontSize: 22,
    fontWeight: '500',
  },
});

function stylesFor(c: Colors) {
  return StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: c.bg,
    },
    page: {
      width: '100%',
      maxWidth: 560,
      alignSelf: 'center',
      paddingHorizontal: 20,
      paddingTop: 56,
      paddingBottom: 28,
    },
    kicker: {
      fontSize: 13,
      fontWeight: '700',
      letterSpacing: 0.6,
      color: c.muted,
      textTransform: 'uppercase',
      marginBottom: 6,
    },
    title: {
      fontSize: 34,
      fontWeight: '800',
      color: c.ink,
      marginBottom: 20,
    },
    appearanceTitle: {
      marginBottom: 8,
    },
    appearanceLead: {
      fontSize: 16,
      lineHeight: 23,
      color: c.body,
      marginBottom: 18,
    },
    themeCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      backgroundColor: c.surface,
      borderRadius: 22,
      paddingVertical: 14,
      paddingHorizontal: 14,
      marginBottom: 12,
    },
    themePreview: {
      width: 88,
      height: 64,
      borderRadius: 14,
      overflow: 'hidden',
    },
    section: {
      marginTop: 8,
      marginBottom: 10,
      fontSize: 12,
      fontWeight: '700',
      letterSpacing: 0.7,
      color: c.muted,
      textTransform: 'uppercase',
    },
    group: {
      backgroundColor: c.surface,
      borderRadius: 22,
      paddingHorizontal: 6,
      marginBottom: 18,
      overflow: 'hidden',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 14,
      paddingHorizontal: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: c.line,
    },
    rowLast: {
      borderBottomWidth: 0,
    },
    rowCopy: {
      flex: 1,
    },
    rowTitle: {
      fontSize: 16,
      fontWeight: '800',
      color: c.ink,
    },
    rowSub: {
      marginTop: 2,
      fontSize: 13,
      color: c.muted,
    },
    switch: {
      width: 48,
      height: 28,
      borderRadius: 14,
      backgroundColor: c.switchOff,
      justifyContent: 'center',
      paddingHorizontal: 3,
    },
    switchOn: {
      backgroundColor: c.primary,
    },
    knob: {
      width: 22,
      height: 22,
      borderRadius: 11,
      backgroundColor: '#FFFFFF',
    },
    knobOn: {
      alignSelf: 'flex-end',
    },
    footer: {
      marginTop: 8,
      textAlign: 'center',
      fontSize: 13,
      color: c.muted,
    },
    resetMask: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: c.overlay,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      zIndex: 20,
    },
    resetCard: {
      width: '100%',
      maxWidth: 400,
      backgroundColor: c.surface,
      borderRadius: 22,
      padding: 22,
    },
    resetTitle: {
      fontSize: 22,
      fontWeight: '800',
      color: c.ink,
      marginBottom: 10,
    },
    resetBody: {
      fontSize: 16,
      lineHeight: 24,
      color: c.body,
      marginBottom: 20,
    },
    resetActions: {
      flexDirection: 'row',
      gap: 10,
    },
    resetCancel: {
      flex: 1,
      minHeight: 48,
      borderRadius: 14,
      backgroundColor: c.well,
      alignItems: 'center',
      justifyContent: 'center',
    },
    resetCancelText: {
      fontSize: 16,
      fontWeight: '700',
      color: c.ink,
    },
    resetConfirm: {
      flex: 1,
      minHeight: 48,
      borderRadius: 14,
      backgroundColor: c.miss,
      alignItems: 'center',
      justifyContent: 'center',
    },
    resetConfirmText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    resetOk: {
      minHeight: 48,
      borderRadius: 14,
      backgroundColor: c.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    resetOkText: {
      fontSize: 16,
      fontWeight: '700',
      color: c.primaryText,
    },
    updated: {
      marginTop: -12,
      marginBottom: 20,
      fontSize: 13,
      color: c.muted,
    },
    block: {
      marginBottom: 18,
    },
    heading: {
      marginBottom: 6,
      fontSize: 16,
      fontWeight: '700',
      color: c.ink,
    },
    docBody: {
      fontSize: 16,
      lineHeight: 24,
      color: c.body,
      marginBottom: 16,
    },
    hint: {
      fontSize: 14,
      color: c.muted,
    },
    mailBtn: {
      minHeight: 48,
      backgroundColor: c.primary,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mailBtnText: {
      color: c.primaryText,
      fontSize: 16,
      fontWeight: '600',
    },
    radio: {
      width: 22,
      height: 22,
      borderRadius: 11,
      borderWidth: 2,
      borderColor: c.line,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: c.bg,
    },
  });
}
