import React from 'react';
import { Box } from 'native-base';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import Animated, { useAnimatedStyle, interpolateColor, withSpring } from 'react-native-reanimated';

const BottomSheetBackground: React.FC<BottomSheetBackgroundProps> = ({style, animatedIndex}) => {

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const animatedStyle = useAnimatedStyle(() => {
    return{
      backgroundColor: interpolateColor(
        withSpring(animatedIndex.value),
        [0, 1],
        ["#ffffff", "#1f1f1f"]
      ),
    } 
  })

  return <AnimatedBox rounded="md" pointerEvents="none" style={animatedStyle} />;
}

export default BottomSheetBackground;
