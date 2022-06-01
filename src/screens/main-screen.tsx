import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import {
  Center,
  useColorModeValue,
} from "native-base";

import Clock from "../components/clock";
import Background from '../components/background';
import SettingsBottomSheet from "../components/bottom-sheet";

export default function MainScreen() {
  const [colorTheme, setColorTheme] = useState("primary");

  const getColorTheme = async () => {
    try{
        const value = await AsyncStorage.getItem('colorTheme');
        if(value !== null && value != colorTheme) {
          setColorTheme(value);
        }
    }
    catch (e) {

    }
  }
  
  useEffect(() => {
    getColorTheme();
  });

  return (
    <Background
      bg={useColorModeValue(colorTheme + ".50", colorTheme + ".900")}
      padding={5}
      flex={1}
    > 
      <StatusBar animated={true} style={useColorModeValue("dark", "light")} />
      <Center flex={1}>
        <Clock />
      </Center>
      <SettingsBottomSheet colorTheme={colorTheme} setColorTheme={setColorTheme} />
    </Background>
  );
}
