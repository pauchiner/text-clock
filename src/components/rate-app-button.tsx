import React from "react";
import { Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  Text,
  Box,
  Icon,
  Divider,
  useColorModeValue,
} from "native-base";

const RateAppButton = () => {
  const onPress = () => {
    Linking.openURL(
      "https://play.google.com/store/apps/details?id=com.pauchiner.textclock"
    );
  };

  return (
    <Pressable onPress={onPress}>
      <Box alignItems="center" padding={2} flexDirection="row">
        <Icon
          color={useColorModeValue("dark.50", "light.50")}
          marginLeft={1}
          marginTop={2}
          marginBottom={2}
          size={22}
          as={MaterialIcons}
          name="star"
        />
        <Text
          flex={2}
          marginLeft={2}
          fontWeight={600}
          fontSize="md"
          color={useColorModeValue("dark.50", "light.50")}
        >
          Rate us
        </Text>
      </Box>
      <Divider />
    </Pressable>
  );
};

export default RateAppButton;
