import * as React from "react";
import { Alert } from "react-native";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MainScreen from "./screens/main-screen";

const App = () => {
  globalThis.textWeight = "400";
  globalThis.colorTheme = "primary";
  async () => {
    try {
      let weight = await AsyncStorage.getItem("textWeight");
      let theme = await AsyncStorage.getItem("colorTheme");
      if (weight !== null) globalThis.textWeight = weight;
      if (theme !== null) globalThis.colorTheme = theme;
    } catch (error) {
      Alert.alert("Storage Error", "We couldn't load your settings", [
        {
          text: "okey",
        },
      ]);
    }
  };

  return <MainScreen />;
};

export default App;
