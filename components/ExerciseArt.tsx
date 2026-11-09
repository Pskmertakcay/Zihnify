import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ExerciseId } from '../exercises/types';
import { colors } from '../theme';
import { TargetIcon } from './NavIcons';

export const EXERCISE_THUMB: Record<ExerciseId, string> = {
  find: '#E3EDE6',
  odd: '#F3EEDC',
  track: '#EEF3FA',
  wait: '#FFF3E0',
  sequence: '#EEE8F6',
};

export function ExerciseArt({ id }: { id: ExerciseId }) {
  if (id === 'odd') {
    return (
      <View style={local.mark}>
        <View style={[local.tri, { borderBottomColor: '#E0B84A' }]} />
        <View
          style={[local.tri, local.triOff, { borderBottomColor: '#3D6B4F' }]}
        />
        <View style={[local.sq, { backgroundColor: '#2F6F5B' }]} />
      </View>
    );
  }
  if (id === 'track') {
    return (
      <View style={local.mark}>
        <View style={[local.box, { borderColor: '#7BA3C9', top: 2, left: 2 }]} />
        <View
          style={[local.box, { borderColor: '#3D6F8C', bottom: 2, right: 2 }]}
        />
      </View>
    );
  }
  if (id === 'wait') {
    return (
      <Svg width={26} height={26} viewBox="0 0 24 24" fill="none">
        <Path
          d="M13 3 5 13h6l-1 8 9-11h-6l0-7z"
          fill="#E39B2E"
        />
      </Svg>
    );
  }
  if (id === 'sequence') {
    return (
      <Svg width={26} height={26} viewBox="0 0 24 24" fill="none">
        <Path
          d="M5 8h14M5 12h14M5 16h14"
          stroke="#6B5B95"
          strokeWidth={2.2}
          strokeLinecap="round"
        />
      </Svg>
    );
  }
  return <TargetIcon color={colors.primary} />;
}

const local = StyleSheet.create({
  mark: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tri: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    position: 'absolute',
    top: 1,
    left: 1,
  },
  triOff: {
    left: 10,
    top: 8,
  },
  sq: {
    position: 'absolute',
    right: 1,
    bottom: 1,
    width: 9,
    height: 9,
    borderRadius: 2,
  },
  box: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 3,
    borderWidth: 2,
  },
});
