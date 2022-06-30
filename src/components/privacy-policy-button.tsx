import React from "react";
import { Alert, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  Box,
  Icon,
  Text,
  Divider,
  useColorModeValue,
} from "native-base";

const PrivacyPolicyButton = () => {

    const openLinkAlert = () =>
    Alert.alert("Warning", "This will redirect you to the web browser.", [
      {
        text: "Continue",
        onPress: () => Linking.openURL("https://sites.google.com/view/textoclockprivacitypolicity/p%C3%A1gina-principal"),
      },
      {
        text: "Cancel",
        style: "destructive"
      },
    ]);


  return (
    <Pressable accessibilityLabel={"privacy policy"} onPress={openLinkAlert}>
      <Box alignItems="center" padding={2} flexDirection="row">
        <Icon
          color={useColorModeValue("dark.50", "light.50")}
          marginLeft={1}
          marginTop={2}
          marginBottom={2}
          size={22}
          as={MaterialIcons}
          name="article"
        />
        <Text
          flex={2}
          marginLeft={2}
          fontWeight={600}
          fontSize="md"
          color={useColorModeValue("dark.50", "light.50")}
        >
          Privacy Policy
        </Text>
      </Box>
      <Divider />
    </Pressable>
  );
};

export default PrivacyPolicyButton;
