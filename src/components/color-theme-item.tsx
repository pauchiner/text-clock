import React, { useEffect, useState } from "react";
import { Box, Pressable } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";

interface Props {
  actualColor: boolean;
  color: string;
  onPress: any;
}

const ColorItem = (props: Props) => {
  const [pressed, setPressed] = useState(false);
  const progress = useSharedValue(0);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  useEffect(() => {
    if(props.actualColor) setPressed(true);
  });

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = withTiming(pressed ? 1 : 0);
    return {
      borderWidth: progress.value * 4,
      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#ffffffff", "#00000030"]
      ),
    };
  });

  return (
    <Pressable
      onPressIn={() => {
        setPressed(true);
      }}
      onPress={props.onPress}
      onPressOut={() => {
        setTimeout(() => {
          setPressed(false);
        }, 300);
      }}
    >
      <AnimatedBox
        bg={props.color}
        rounded="md"
        width={10}
        height={10}
        marginRight={2}
        style={animatedBoxStyle}
      />
    </Pressable>
  );
};

ColorItem.defaultProps = {
  actualColor: false,
  color: "primary.400",
  onPress: null,
}

export default ColorItem;
