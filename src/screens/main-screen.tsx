import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { Center, useColorModeValue } from 'native-base';

import Clock from '../components/clock';
import Background from '../components/background';
import SettingsBottomSheet from '../components/bottom-sheet';

export default function MainScreen() {
  const [colorTheme, setColorTheme] = useState('primary');
  const [textWeight, setTextWeight] = useState('400');

  const getColorTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('colorTheme');
      if (value !== null && value != colorTheme) {
        setColorTheme(value);
        return value;
      }
    } catch {
      Alert.alert('Storage Error', "We couldn't load your settings", [
        {
          text: 'okey',
        },
      ]);
    }
  };

  const getTextWeight = async () => {
    try {
      const value = await AsyncStorage.getItem('textWeight');
      if (value !== null && value != textWeight) {
        setTextWeight(value);
      }
    } catch {
      Alert.alert('Storage Error', "We couldn't load your settings", [
        {
          text: 'okey',
        },
      ]);
    }
  };

  useEffect(() => {
    console.log(colorTheme);
    getColorTheme();
    getTextWeight();
  });

  return (
    <Background
      bg={useColorModeValue(colorTheme + '.50', colorTheme + '.900')}
      padding={5}
      flex={1}
    >
      <StatusBar animated={true} style={useColorModeValue('dark', 'light')} />
      <Center flex={1}>
        <Clock textWeight={textWeight} />
      </Center>
      <SettingsBottomSheet
        textWeight={textWeight}
        setTextWeight={setTextWeight}
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
      />
    </Background>
  );
}
