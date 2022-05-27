import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolateColor,
} from "react-native-reanimated";
import {
  Text,
} from "native-base";

interface Props {
  isActive: boolean;
  text: string;
}

const Word = (props: Props) => {
  const progress = useSharedValue(30);

  const AnimatedText = Animated.createAnimatedComponent(Text);

  const animatedTextStyle = useAnimatedStyle(() => {
    progress.value = withSpring(props.isActive ? 1 : 0.3);
    return {
      opacity: progress.value,
    };
  });

  return (
    <AnimatedText
      {...props}
      style={animatedTextStyle}
      fontFamily="body"
      fontWeight={600}
      fontSize="3xl"
      padding={3}
    >
      {props.text}
    </AnimatedText>
  );
};

Word.defaultProps = {
  isActive: false,
  text: "???",
};

export default Word;
