import { type ReactNode } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExerciseId } from '../exercises/types';
import { EXERCISE_MARK, useLocale, useT } from '../i18n';
import { Colors, colors, useColors } from '../theme';
import { BackButton } from './BackButton';
import { TargetIcon } from './NavIcons';

type Step = { title: string; body: string; art: ReactNode };

function howToCopy(
  id: ExerciseId,
  t: (key: string) => string
): { title: string; body: string; tip: string; steps: [string, string][] } {
  return {
    title: t(`exercises.${id}.title`),
    body: t(`howTo.${id}.body`),
    tip: t(`howTo.${id}.tip`),
    steps: [
      [t(`howTo.${id}.s1t`), t(`howTo.${id}.s1b`)],
      [t(`howTo.${id}.s2t`), t(`howTo.${id}.s2b`)],
      [t(`howTo.${id}.s3t`), t(`howTo.${id}.s3b`)],
    ],
  };
}

function Rays({ children }: { children: ReactNode }) {
  return (
    <View style={art.raysWrap}>
      <View style={[art.ray, { transform: [{ rotate: '-20deg' }] }]} />
      <View style={[art.ray, { transform: [{ rotate: '20deg' }] }]} />
      <View style={[art.ray, { transform: [{ rotate: '0deg' }] }]} />
      {children}
    </View>
  );
}

function FindArts(): ReactNode[] {
  return [
    <Rays key="1">
      <View style={art.dot} />
    </Rays>,
    <View key="2" style={art.grid}>
      <View style={[art.cell, { backgroundColor: '#C45C4A' }]} />
      <View style={[art.cell, art.cellOn]}>
        <View style={art.dotSm} />
        <Text style={art.hand}>👆</Text>
      </View>
      <View style={[art.cell, { height: 8, alignSelf: 'center', backgroundColor: '#3D6F8C' }]} />
      <View style={[art.cell, { borderRadius: 16, backgroundColor: '#8C3A32' }]} />
    </View>,
    <View key="3" style={art.chart}>
      <View style={[art.col, { height: 10 }]} />
      <View style={[art.col, { height: 16 }]} />
      <View style={[art.col, { height: 24 }]} />
      <Text style={art.up}>↗</Text>
    </View>,
  ];
}

function OddArts(): ReactNode[] {
  return [
    <View key="1" style={art.row}>
      {['►', '►', '►'].map((g, i) => (
        <Text key={i} style={art.arrow}>{g}</Text>
      ))}
    </View>,
    <View key="2" style={art.row}>
      <Text style={art.arrow}>►</Text>
      <View style={art.cellOn}>
        <Text style={art.arrow}>◄</Text>
        <Text style={art.hand}>👆</Text>
      </View>
      <Text style={art.arrow}>►</Text>
    </View>,
    <View key="3" style={art.chart}>
      <View style={[art.col, { height: 10 }]} />
      <View style={[art.col, { height: 18 }]} />
      <View style={[art.col, { height: 26 }]} />
    </View>,
  ];
}

function TrackArts(mark: string): ReactNode[] {
  return [
    <View key="1" style={[art.ball, art.ballCue]}>
      <Text style={art.bu}>{mark}</Text>
    </View>,
    <View key="2" style={art.row}>
      <View style={art.ball} />
      <View style={[art.ball, { opacity: 0.35 }]} />
    </View>,
    <View key="3" style={[art.ball, art.cellOn]}>
      <Text style={art.hand}>👆</Text>
    </View>,
  ];
}

function WaitArts(): ReactNode[] {
  return [
    <View key="1" style={art.ring}>
      <View style={[art.fill, { width: 18, height: 18 }]} />
    </View>,
    <View key="2" style={art.ring}>
      <View style={[art.fill, { width: 36, height: 36 }]} />
    </View>,
    <View key="3" style={[art.ring, { backgroundColor: colors.primary }]}>
      <Text style={art.hand}>👆</Text>
    </View>,
  ];
}

function SequenceArts(): ReactNode[] {
  return [
    <View key="1" style={art.keys}>
      <View style={[art.key, art.keyLit]}><Text style={art.keyOn}>2</Text></View>
      <View style={art.key}><Text style={art.keyOff}>7</Text></View>
    </View>,
    <View key="2" style={art.keys}>
      <View style={[art.key, art.cellOn]}><Text style={art.keyOff}>2</Text></View>
      <View style={art.key}><Text style={art.keyOff}>7</Text></View>
    </View>,
    <View key="3" style={art.chart}>
      <View style={[art.col, { height: 12 }]} />
      <View style={[art.col, { height: 20 }]} />
      <View style={[art.col, { height: 28 }]} />
    </View>,
  ];
}

const ARTS: Record<ExerciseId, (mark?: string) => ReactNode[]> = {
  find: FindArts,
  odd: OddArts,
  track: (mark) => TrackArts(mark ?? 'BU'),
  wait: WaitArts,
  sequence: SequenceArts,
};

export function HowToPlay({
  id,
  onBack,
  onContinue,
}: {
  id: ExerciseId;
  onBack: () => void;
  onContinue: () => void;
}) {
  const theme = useColors();
  const local = stylesFor(theme);
  const t = useT();
  const { locale } = useLocale();
  const copy = howToCopy(id, t);
  const arts = ARTS[id](EXERCISE_MARK[locale]);
  const steps: Step[] = copy.steps.map(([title, body], index) => ({
    title,
    body,
    art: arts[index],
  }));

  return (
    <View style={local.wrap}>
      <ScrollView
        style={local.scroll}
        contentContainerStyle={local.page}
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={onBack} />
        <View style={local.hero}>
          <View style={local.heroText}>
            <Text style={local.kicker}>{t('howTo.kicker')}</Text>
            <Text style={local.title}>{copy.title}</Text>
            <Text style={local.lead}>{copy.body}</Text>
          </View>
          <View style={local.decor}>
            <Image
              source={require('../assets/learn-brain.jpg')}
              style={local.decorImg}
            />
            <View style={local.decorOrb}>
              <TargetIcon color={theme.accent} />
            </View>
          </View>
        </View>

        {steps.map((step, index) => (
          <View key={step.title} style={local.stepRow}>
            <View style={local.rail}>
              <View style={local.num}>
                <Text style={local.numText}>{index + 1}</Text>
              </View>
              {index < steps.length - 1 ? <View style={local.line} /> : null}
            </View>
            <View style={local.stepCard}>
              <View style={local.stepCopy}>
                <Text style={local.stepTitle}>{step.title}</Text>
                <Text style={local.stepBody}>{step.body}</Text>
              </View>
              <View style={local.stepArt}>{step.art}</View>
            </View>
          </View>
        ))}

        <View style={local.tip}>
          <Text style={local.tipIcon}>💡</Text>
          <View style={{ flex: 1 }}>
            <Text style={local.tipTitle}>{t('common.tip')}</Text>
            <Text style={local.tipBody}>{copy.tip}</Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('howTo.cta')}
          style={local.cta}
          onPress={onContinue}
        >
          <Text style={local.ctaText}>{t('howTo.cta')}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const art = StyleSheet.create({
  raysWrap: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ray: {
    position: 'absolute',
    top: 6,
    width: 3,
    height: 10,
    borderRadius: 2,
    backgroundColor: '#C5D4CC',
  },
  dot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
  },
  dotSm: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
  },
  grid: {
    width: 72,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  cell: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#EDE6DC',
  },
  cellOn: {
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hand: {
    position: 'absolute',
    right: -8,
    bottom: -10,
    fontSize: 14,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    height: 36,
  },
  col: {
    width: 8,
    backgroundColor: colors.primary,
    borderRadius: 3,
    opacity: 0.7,
  },
  up: {
    marginLeft: 4,
    fontSize: 16,
    color: colors.primary,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  arrow: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.ink,
  },
  ball: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
  },
  ballCue: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#E8C36A',
  },
  bu: {
    color: colors.primaryText,
    fontWeight: '800',
    fontSize: 11,
  },
  ring: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EDE6DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    borderRadius: 24,
    backgroundColor: '#C5D4CC',
  },
  keys: {
    flexDirection: 'row',
    gap: 8,
  },
  key: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EDE6DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyLit: {
    backgroundColor: colors.primary,
  },
  keyOn: {
    color: colors.primaryText,
    fontWeight: '700',
  },
  keyOff: {
    color: colors.ink,
    fontWeight: '700',
  },
});

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
    paddingBottom: 32,
  },
  hero: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  heroText: {
    flex: 1,
    paddingRight: 8,
  },
  kicker: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.7,
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
    fontSize: 15,
    lineHeight: 22,
    color: colors.body,
  },
  decor: {
    width: 92,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorImg: {
    position: 'absolute',
    width: 92,
    height: 92,
    borderRadius: 46,
    opacity: 0.45,
  },
  decorOrb: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255,253,248,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepRow: {
    flexDirection: 'row',
    gap: 10,
  },
  rail: {
    width: 32,
    alignItems: 'center',
  },
  num: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.accent,
  },
  line: {
    width: 2,
    flex: 1,
    minHeight: 18,
    backgroundColor: '#E4DED3',
    marginVertical: 4,
  },
  stepCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 14,
    marginBottom: 10,
  },
  stepCopy: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.ink,
  },
  stepBody: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: colors.body,
  },
  stepArt: {
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tip: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: colors.well,
    borderRadius: 20,
    padding: 16,
    marginTop: 6,
    marginBottom: 16,
  },
  tipIcon: {
    fontSize: 22,
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.ink,
  },
  tipBody: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: colors.body,
  },
  cta: {
    minHeight: 52,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaText: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: '700',
  },
});
}
