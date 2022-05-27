import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withSpring,
} from "react-native-reanimated";
import { Box, useTheme, themeTools } from "native-base";
import usePrevious from "../utils/use-previous";

const Background = ({ bg, ...props }: any) => {
  const theme = useTheme();
  const hexBg = themeTools.getColor(theme, bg);
  const previousHexBg = usePrevious(hexBg);
  const progress = useSharedValue(0);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  useEffect(() => {
    progress.value = 0;
  }, [hexBg]);

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = withSpring(1);
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [previousHexBg || hexBg, hexBg]
      ),
    };
  });

  return <AnimatedBox {...props} style={animatedBoxStyle} />;
};

export default Background;
