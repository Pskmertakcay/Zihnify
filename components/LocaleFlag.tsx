import { type ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Path, Polygon, Rect } from 'react-native-svg';
import type { Locale } from '../i18n';

const W = 28;
const H = 20;

function Frame({ children }: { children: ReactNode }) {
  return (
    <View style={look.frame}>
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {children}
      </Svg>
    </View>
  );
}

function FlagTr() {
  return (
    <Frame>
      <Rect width={W} height={H} fill="#E30A17" />
      <Circle cx={11.2} cy={10} r={6.1} fill="#FFFFFF" />
      <Circle cx={13.1} cy={10} r={4.85} fill="#E30A17" />
      <Polygon
        fill="#FFFFFF"
        points="18.6,10 20.05,10.45 20.55,9.05 21.05,10.45 22.5,10 21.15,10.9 21.55,12.3 20.55,11.4 19.55,12.3 19.95,10.9"
      />
    </Frame>
  );
}

function FlagEn() {
  return (
    <Frame>
      <Rect width={W} height={H} fill="#012169" />
      <Path d="M0 0 L28 20 M28 0 L0 20" stroke="#FFFFFF" strokeWidth={6} />
      <Path d="M0 0 L28 20 M28 0 L0 20" stroke="#C8102E" strokeWidth={3.2} />
      <Path d="M14 0 V20 M0 10 H28" stroke="#FFFFFF" strokeWidth={8} />
      <Path d="M14 0 V20 M0 10 H28" stroke="#C8102E" strokeWidth={4.4} />
    </Frame>
  );
}

function FlagDe() {
  return (
    <Frame>
      <Rect width={W} height={H / 3} fill="#000000" />
      <Rect y={H / 3} width={W} height={H / 3} fill="#DD0000" />
      <Rect y={(H / 3) * 2} width={W} height={H / 3} fill="#FFCE00" />
    </Frame>
  );
}

function FlagEs() {
  return (
    <Frame>
      <Rect width={W} height={H} fill="#AA151B" />
      <Rect y={H * 0.25} width={W} height={H * 0.5} fill="#F1BF00" />
    </Frame>
  );
}

function FlagFr() {
  return (
    <Frame>
      <Rect width={W / 3} height={H} fill="#002395" />
      <Rect x={W / 3} width={W / 3} height={H} fill="#FFFFFF" />
      <Rect x={(W / 3) * 2} width={W / 3} height={H} fill="#ED2939" />
    </Frame>
  );
}

function FlagPt() {
  return (
    <Frame>
      <Rect width={W} height={H} fill="#009B3A" />
      <Polygon points="14,2.2 25.2,10 14,17.8 2.8,10" fill="#FEDD00" />
      <Circle cx={14} cy={10} r={3.35} fill="#002776" />
    </Frame>
  );
}

function FlagNl() {
  return (
    <Frame>
      <Rect width={W} height={H / 3} fill="#AE1C28" />
      <Rect y={H / 3} width={W} height={H / 3} fill="#FFFFFF" />
      <Rect y={(H / 3) * 2} width={W} height={H / 3} fill="#21468B" />
    </Frame>
  );
}

function FlagIt() {
  return (
    <Frame>
      <Rect width={W / 3} height={H} fill="#009246" />
      <Rect x={W / 3} width={W / 3} height={H} fill="#FFFFFF" />
      <Rect x={(W / 3) * 2} width={W / 3} height={H} fill="#CE2B37" />
    </Frame>
  );
}

const FLAGS: Record<Locale, () => ReactNode> = {
  tr: FlagTr,
  en: FlagEn,
  de: FlagDe,
  es: FlagEs,
  fr: FlagFr,
  it: FlagIt,
  pt: FlagPt,
  nl: FlagNl,
};

export function LocaleFlag({ locale }: { locale: Locale }) {
  const Flag = FLAGS[locale];
  return <Flag />;
}

const look = StyleSheet.create({
  frame: {
    width: W,
    height: H,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.14)',
  },
});
