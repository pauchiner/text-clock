import React, { useState } from "react";
import {
  Text,
  Box,
  Icon,
  useColorModeValue,
  Divider,
  IconButton,
  Pressable,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const TextSizePicker = () => {
  const [fontSize, setFontSize] = useState(25);
  const [pressed, setPressed] = useState(false);
  const progress = useSharedValue(0);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = withTiming(pressed ? 1.1 : 1, { duration: 100 });
    return {
      transform: [
        {
          scale: progress.value,
        },
      ],
    };
  });

  return (
    <>
      <Box alignItems="center" flexDirection="row">
        <Icon
          color={useColorModeValue("dark.50", "light.50")}
          margin={2}
          size={22}
          as={MaterialIcons}
          name="text-fields"
        />
        <Text
          flex={2}
          fontWeight={600}
          fontSize="md"
          color={useColorModeValue("dark.50", "light.50")}
        >
          Text size
        </Text>
        <Pressable padding={4}>
          <Text fontSize={18} fontWeight={600}>
            Medium
          </Text>
        </Pressable>
      </Box>
      <Divider />
    </>
  );
};

export default TextSizePicker;
