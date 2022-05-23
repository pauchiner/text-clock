import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Box,
  Center,
  HStack,
  useColorMode,
} from "native-base";

import Clock from "../components/clock";
import SettingsButton from "../components/settings-button";

interface Props {
  navigation: any;
}

export default function MainScreen(props: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      _dark={{ bg: "primary.900" }}
      _light={{ bg: "primary.50" }}
      padding={5}
      flex={1}
    >
      <StatusBar style={colorMode === "light" ? "dark" : "light"}></StatusBar>
      <HStack
        marginTop={4}
        marginLeft={3}
        justifyContent="flex-end"
        width="100%"
      >
        <SettingsButton
          onPress={() => {
            props.navigation.navigate("Settings");
          }}
        />
      </HStack>
      <Center flex={1}>
        <Clock />
      </Center>
    </Box>
  );
}
