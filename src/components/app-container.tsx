import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

export default function AppContainer(props: Props) {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>{props.children}</NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
