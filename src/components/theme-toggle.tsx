import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Icon, Text, Box, Pressable, Divider, useColorMode } from "native-base";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [toggled, setToggled] = useState(colorMode === "dark");
  const progress = useSharedValue(1);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = toggled ? 32 : 0;
    return {
      transform: [
        {
          translateX: withSpring(progress.value),
        },
      ],
    };
  });

  const setColorMode = () => {
    setToggled(!toggled);
    setTimeout(toggleColorMode, 0);
  };

  return (
    <Box>
      <Text color={"dark.50"}>Color theme: </Text>
      <Pressable onPress={setColorMode}>
        <Box
          margin={3}
          shadow={1}
          width={20}
          height={10}
          bg={"primary.600"}
          rounded="md"
        >
          <AnimatedBox
            bg={"primary.400"}
            shadow={2}
            bottom={1}
            rounded="md"
            width={12}
            height={12}
            style={animatedBoxStyle}
          >
            <Icon
              color={toggled ? "purple.700" : "yellow.200"}
              flex={1}
              alignSelf="center"
              top={2}
              size={8}
              as={MaterialIcons}
              name={toggled ? "nightlight-round" : "wb-sunny"}
            />
          </AnimatedBox>
        </Box>
      </Pressable>
      <Divider />
    </Box>
  );
};

ThemeToggle.defaultProps = {
  toggled: false,
  onPress: null,
};

export default ThemeToggle;
