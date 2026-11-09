import Svg, { Circle, Path, Rect } from 'react-native-svg';
import type { ColorScheme } from '../theme';

const W = 88;
const H = 64;

export function ThemePreview({ id }: { id: ColorScheme }) {
  if (id === 'dark') {
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Rect width={W} height={H} rx={14} fill="#1A2430" />
        <Circle cx={64} cy={16} r={7} fill="#E8D9A8" />
        <Path d="M0 44 L18 28 L32 40 L48 22 L70 38 L88 26 V64 H0 Z" fill="#243044" />
        <Path d="M0 52 L22 40 L40 50 L58 36 L88 48 V64 H0 Z" fill="#1B2636" />
      </Svg>
    );
  }
  if (id === 'mist') {
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Rect width={W} height={H} rx={14} fill="#C5D4D0" />
        <Circle cx={70} cy={18} r={8} fill="#E8F0EC" opacity={0.7} />
        <Path d="M12 48 L18 34 L24 48 Z" fill="#6A8A80" />
        <Path d="M28 52 L36 30 L44 52 Z" fill="#5C7A72" />
        <Path d="M48 50 L54 36 L60 50 Z" fill="#6A8A80" />
        <Path d="M62 52 L68 32 L74 52 Z" fill="#54786E" />
        <Path d="M0 54 H88 V64 H0 Z" fill="#A8BDB6" />
      </Svg>
    );
  }
  if (id === 'sunset') {
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Rect width={W} height={H} rx={14} fill="#E8A070" />
        <Circle cx={44} cy={28} r={10} fill="#F2C14E" />
        <Path d="M0 40 C20 34 36 46 52 38 C68 30 80 42 88 36 V64 H0 Z" fill="#C45C3A" />
        <Path d="M0 50 C24 44 40 54 60 48 C76 44 88 52 88 52 V64 H0 Z" fill="#8A3A28" />
      </Svg>
    );
  }
  if (id === 'contrast') {
    return (
      <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <Rect width={W} height={H} rx={14} fill="#111111" />
        <Circle cx={66} cy={16} r={6} fill="#F5F1E9" />
        <Path d="M0 46 L20 30 L36 42 L54 24 L76 40 L88 32 V64 H0 Z" fill="#2A2A2A" />
        <Path d="M0 54 L28 44 L50 52 L88 46 V64 H0 Z" fill="#000000" />
      </Svg>
    );
  }
  return (
    <Svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      <Rect width={W} height={H} rx={14} fill="#E4EDE4" />
      <Circle cx={62} cy={18} r={8} fill="#E8C36A" />
      <Path d="M0 42 C18 36 30 48 48 40 C64 32 76 44 88 38 V64 H0 Z" fill="#B7CDB8" />
      <Path d="M0 52 C22 46 40 56 58 50 C74 46 88 54 88 54 V64 H0 Z" fill="#8AAB90" />
    </Svg>
  );
}
