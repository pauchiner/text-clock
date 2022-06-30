import React from "react";
import { moderateScale } from "react-native-size-matters";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Text } from "native-base";

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
      accessibilityLabel={props.isActive ? props.text : ""}
      style={animatedTextStyle}
      fontFamily="body"
      fontWeight={globalThis.textWeight}
      fontSize={moderateScale(30, 1.8)}
      padding={moderateScale(8, 2)}
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
