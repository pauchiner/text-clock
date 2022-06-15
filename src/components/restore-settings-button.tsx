import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  Icon,
  Text,
  useTheme,
  themeTools,
  useColorModeValue,
} from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from "react-native-reanimated";

const RestoreSettingsButton = () => {
  const [restore, setRestore] = useState(false);
  const progress = useSharedValue(0);
  const theme = useTheme();
  const hexColorIcon = themeTools.getColor(
    theme,
    useColorModeValue("dark.50", "light.50")
  );

  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  const animatedIconStyle = useAnimatedStyle(() => {
    progress.value = withSpring(restore ? 1 : 0);
    return {
      color: interpolateColor(
        progress.value,
        [1, 0],
        [hexColorIcon, "#e11d48"]
      ),
      transform: [
        {
          rotate: progress.value * 360 + "deg",
        },
      ],
    };
  });

  const restoreSettings = async () => {
    try {
      setRestore(false);
      await AsyncStorage.setItem("colorTheme", "primary");
      await AsyncStorage.setItem("textWeight", "400");
      setRestore(true);
    } catch {
      Alert.alert("Storage Error", "We couldn't restore your settings", [
        {
          text: "okey",
        },
      ]);
    }
    setTimeout(() => {
      globalThis.colorTheme = "primary";
      globalThis.textWeight = "400";
    }, 400);
  };

  const restoreSettingsAlert = () =>
    Alert.alert("Are you sure?", "All configurations will be restored.", [
      {
        text: "Yes",
        onPress: restoreSettings,
        style: "destructive",
      },
      {
        text: "No",
      },
    ]);

  return (
    <Pressable
      paddingBottom={5}
      alignItems="center"
      flexDirection="row"
      onPress={restoreSettingsAlert}
    >
      <AnimatedIcon
        as={MaterialIcons}
        style={animatedIconStyle}
        margin={2}
        size={22}
        name="refresh"
      />
      <Text
        paddingTop={4}
        paddingBottom={4}
        flex={2}
        fontWeight={600}
        fontSize="md"
        color={useColorModeValue("dark.50", "light.50")}
      >
        Restore settings
      </Text>
    </Pressable>
  );
};

export default RestoreSettingsButton;
