import * as React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "./screens/settings-screen";
import MainScreen from "./screens/main-screen";

const Stack = createStackNavigator();

const App = () => {

  const settingsOptions = {
    headerTransparent: true,
    headerShown: true,
    headerTitleStyle: {
      color: '#fff',
      fontSize: 23,
    },
  }

  const clockOptions = {
    headerTransparent: true,
    headerShown: false,
  }

  return (
    <Stack.Navigator
      initialRouteName={"Main"}
    >
      <Stack.Screen name="Clock" component={MainScreen} options={clockOptions} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={settingsOptions}/>
    </Stack.Navigator>
  );
};

export default App;
