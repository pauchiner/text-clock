import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Center,
  useColorModeValue,
} from "native-base";

import Clock from "../components/clock";
import SettingsButton from "../components/settings-button";
import Background from '../components/background';
import ThemeToggle from "../components/theme-toggle";

interface Props {
  navigation: any;
}

export default function MainScreen(props: Props) {

  return (
    <Background
      bg={useColorModeValue("primary.50", "primary.900")}
      padding={5}
      flex={1}
    > 
      <StatusBar animated={true} style={useColorModeValue("dark", "light")} />
      <SettingsButton
          onPress={() => {
            props.navigation.navigate("Settings");
      }} />
      <Center flex={1}>
        <Clock />
      </Center>
    </Background>
  );
}
