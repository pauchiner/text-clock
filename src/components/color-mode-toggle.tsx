import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Icon, Box, Pressable, useColorMode } from "native-base";

const ColorModeToggle = ({ ...props }: any) => {
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
    setTimeout(toggleColorMode, 300);
  };

  return (
    <Pressable {...props} margin={1} onPress={setColorMode}>
      <Box
        margin={3}
        shadow={1}
        width={20}
        height={10}
        bg={globalThis.colorTheme + ".600"}
        rounded="md"
      >
        <AnimatedBox
          bg={globalThis.colorTheme + ".400"}
          shadow={2}
          bottom={1}
          rounded="md"
          width={12}
          height={12}
          style={animatedBoxStyle}
        >
          <Icon
            color={toggled ? globalThis.colorTheme + ".900" : "light.50"}
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
  );
};

ColorModeToggle.defaultProps = {
  toggled: false,
  onPress: null,
};

export default ColorModeToggle;
