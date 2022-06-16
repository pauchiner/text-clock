import React from "react";
import {moderateScale} from "react-native-size-matters";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Text,
} from "native-base";

interface Props {
  isActive: boolean;
  text: string;
}

const Word = (props: Props) => {
  const progress = useSharedValue(100);

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
      fontWeight={globalThis.textWeight}
      fontSize={moderateScale(30, 0.5)}
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
