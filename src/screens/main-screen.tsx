import React, { useCallback, useRef, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Center,
  Button,
  Text,
  useColorModeValue,
} from "native-base";

import Clock from "../components/clock";
import Background from '../components/background';
import SettingsBottomSheet from "../components/bottom-sheet";

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
      <Center flex={1}>
        <Clock />
      </Center>
      <SettingsBottomSheet />
    </Background>
  );
}
