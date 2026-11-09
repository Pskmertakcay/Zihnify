import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const SIZE = 22;
const STROKE = 1.75;

export function HouseIcon({
  color,
}: {
  color: string;
  filled?: boolean;
}) {
  return (
    <View style={local.frame}>
      <View style={[local.roofFill, { backgroundColor: color }]} />
      <View style={[local.houseFill, { backgroundColor: color }]} />
    </View>
  );
}

export function TargetIcon({ color }: { color: string }) {
  return (
    <View style={[local.frame, local.center]}>
      <View style={[local.ring, { borderColor: color, width: 22, height: 22, borderRadius: 11 }]} />
      <View style={[local.ring, { borderColor: color, width: 13, height: 13, borderRadius: 6.5 }]} />
      <View style={[local.core, { backgroundColor: color }]} />
    </View>
  );
}

export function CheckIcon({ color }: { color: string }) {
  return (
    <View style={[local.frame, local.center]}>
      <View style={local.checkBox}>
        <View style={[local.bar, local.checkA, { backgroundColor: color }]} />
        <View style={[local.bar, local.checkB, { backgroundColor: color }]} />
      </View>
    </View>
  );
}

export function ClipboardIcon({ color }: { color: string }) {
  return (
    <View style={[local.frame, local.center]}>
      <View style={[local.board, { borderColor: color }]} />
      <View style={[local.clip, { borderColor: color }]} />
      <View style={[local.bar, local.clipCheckA, { backgroundColor: color }]} />
      <View style={[local.bar, local.clipCheckB, { backgroundColor: color }]} />
    </View>
  );
}

export function BookIcon({ color }: { color: string }) {
  return (
    <View style={[local.frame, local.center]}>
      <View style={[local.pageL, { borderColor: color }]} />
      <View style={[local.pageR, { borderColor: color }]} />
    </View>
  );
}

export function SparklesIcon({ color }: { color: string }) {
  return (
    <View style={local.frame}>
      <View style={[local.bar, { backgroundColor: color, left: 10, top: 3, width: STROKE, height: 11 }]} />
      <View style={[local.bar, { backgroundColor: color, left: 6, top: 7, width: 11, height: STROKE }]} />
      <View style={[local.bar, { backgroundColor: color, right: 2, top: 2, width: STROKE, height: 6 }]} />
      <View style={[local.bar, { backgroundColor: color, right: 0, top: 4, width: 6, height: STROKE }]} />
      <View style={[local.bar, { backgroundColor: color, left: 2, bottom: 2, width: STROKE, height: 6 }]} />
      <View style={[local.bar, { backgroundColor: color, left: 0, bottom: 4, width: 6, height: STROKE }]} />
    </View>
  );
}

export function CircleUserIcon({ color }: { color: string }) {
  return (
    <View style={[local.frame, local.center]}>
      <View style={[local.userRing, { borderColor: color }]} />
      <View style={[local.head, { borderColor: color }]} />
      <View style={[local.shoulders, { borderColor: color }]} />
    </View>
  );
}

export function GearIcon({ color }: { color: string; hole?: string }) {
  return (
    <Svg width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
        stroke={color}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={12}
        cy={12}
        r={3}
        stroke={color}
        strokeWidth={1.75}
        fill="none"
      />
    </Svg>
  );
}

const local = StyleSheet.create({
  frame: {
    width: SIZE,
    height: SIZE,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    position: 'absolute',
    borderRadius: 1,
  },
  roofL: {
    width: STROKE,
    height: 11,
    left: 6,
    top: 2,
    transform: [{ rotate: '-48deg' }],
  },
  roofR: {
    width: STROKE,
    height: 11,
    right: 6,
    top: 2,
    transform: [{ rotate: '48deg' }],
  },
  houseBody: {
    position: 'absolute',
    left: 5,
    top: 10,
    width: 12,
    height: 11,
    borderWidth: STROKE,
    borderTopWidth: 0,
  },
  roofFill: {
    position: 'absolute',
    top: 3,
    left: 4,
    width: 14,
    height: 14,
    transform: [{ rotate: '45deg' }],
    borderRadius: 2,
  },
  houseFill: {
    position: 'absolute',
    left: 5,
    top: 9,
    width: 12,
    height: 12,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  board: {
    position: 'absolute',
    top: 4,
    width: 14,
    height: 16,
    borderRadius: 3,
    borderWidth: STROKE,
  },
  clip: {
    position: 'absolute',
    top: 1,
    width: 8,
    height: 5,
    borderRadius: 2,
    borderWidth: STROKE,
    backgroundColor: '#FFFDF8',
  },
  clipCheckA: {
    left: 7,
    top: 11,
    width: STROKE,
    height: 4,
    transform: [{ rotate: '-45deg' }],
  },
  clipCheckB: {
    left: 10,
    top: 9,
    width: STROKE,
    height: 7,
    transform: [{ rotate: '40deg' }],
  },
  pageL: {
    position: 'absolute',
    left: 2,
    top: 4,
    width: 9,
    height: 14,
    borderWidth: STROKE,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
  },
  pageR: {
    position: 'absolute',
    right: 2,
    top: 4,
    width: 9,
    height: 14,
    borderWidth: STROKE,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 3,
    borderTopLeftRadius: 1,
    borderBottomLeftRadius: 1,
  },
  ring: {
    position: 'absolute',
    borderWidth: STROKE,
  },
  core: {
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  checkBox: {
    width: 14,
    height: 12,
    marginTop: 1,
  },
  checkA: {
    left: 1,
    top: 5,
    width: STROKE,
    height: 6,
    transform: [{ rotate: '-45deg' }],
  },
  checkB: {
    left: 5,
    top: 1,
    width: STROKE,
    height: 11,
    transform: [{ rotate: '40deg' }],
  },
  userRing: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: STROKE,
  },
  head: {
    position: 'absolute',
    top: 4,
    width: 7,
    height: 7,
    borderRadius: 4,
    borderWidth: STROKE,
  },
  shoulders: {
    position: 'absolute',
    bottom: 3,
    width: 12,
    height: 7,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: STROKE,
    borderBottomWidth: 0,
  },
});
