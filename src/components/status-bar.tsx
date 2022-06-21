import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorModeValue } from "native-base";

const AppStatusBar = () => {
  return (
    <StatusBar style={useColorModeValue("dark", "light")} animated={true} />
  );
};

export default AppStatusBar;
