import React, {  useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Pressable } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";

interface Props {
  setColorTheme: any;
  colorTheme: string;
  colorChart: string;
  color: string;
}

const ColorItem = ({setColorTheme, colorTheme, colorChart, color }: Props) => {
  const [pressed, setPressed] = useState(false);
  const progress = useSharedValue(0);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const saveTheme = async (value: string) => {
    try {
      await AsyncStorage.setItem("colorTheme", value);
    } catch (e) {
      //Catch a Storage error
    }
  };

  useEffect(() => {
    //Check if the actual Color item is the main theme.
    if(colorTheme == colorChart) setPressed(true);
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
      onPress={() => {
        setPressed(true);
        saveTheme(colorChart);
        setColorTheme(colorChart);
      }}
    >
      <AnimatedBox
        bg={color}
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
  setColorTheme: null,
  colorChart: "primary",
  color: "primary.400",
};

export default ColorItem;
