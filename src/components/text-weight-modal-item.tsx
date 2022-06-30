import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, Box, Text } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface Props {
  text: string;
  weight: string;
  selected: boolean;
  reloadSettings: any;
}

const TextWeightModalItem = (props: Props) => {
  const [selected, setSelected] = useState(props.selected);
  const progress = useSharedValue(0);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = withTiming(selected ? 6 : 1, {
      duration: 200,
      easing: Easing.bezier(0.44, 0.04, 0.5, 0.94),
    });
    return {
      borderWidth: progress.value * 2,
    };
  });

  const saveTextWeight = async (value: string) => {
    try {
      await AsyncStorage.setItem("textWeight", value);
      setSelected(true);
      globalThis.textWeight = value;
    } catch {
      Alert.alert("Storage Error", "We couldn't save your settings", [
        {
          text: "okey",
        },
      ]);
    }
  };

  useEffect(() => {
    if (globalThis.textWeight === props.weight) setSelected(true);
  }, []);

  return (
    <Pressable
      accessibilityLabel={props.text}
      flexDirection="row"
      margin={3}
      onPress={() => {
        saveTextWeight(props.weight);
        setTimeout(() => {
          props.reloadSettings();
        }, 400);
      }}
    >
      <AnimatedBox
        borderColor={globalThis.colorTheme + ".500"}
        marginLeft={1}
        marginRight={2}
        rounded="md"
        style={animatedBoxStyle}
        width={6}
        height={6}
      />
      <Text fontSize="md" fontWeight={500}>
        {props.text}
      </Text>
    </Pressable>
  );
};

TextWeightModalItem.defaultProps = {
  selected: false,
  text: "default",
  weight: "400",
};

export default TextWeightModalItem;
