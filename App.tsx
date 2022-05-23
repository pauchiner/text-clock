import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import React from 'react';
import AppContainer from './src/components/app-container';

import Routes from './src/';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    /* !!! CHANGE THIS!!! */
    return null;
  }

  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  );
}
