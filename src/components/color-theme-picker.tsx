import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Box, Divider, useColorModeValue, Icon } from 'native-base';
import ColorItem from './color-theme-item';

interface Props {
  setColorTheme: any;
  colorTheme: string;
}

const ColorThemePicker = (props: Props) => {
  return (
    <>
      <Box flexDirection='row' alignItems={'center'}>
        <Icon
          color={useColorModeValue('dark.50', 'light.50')}
          margin={2}
          size={22}
          as={MaterialIcons}
          name='color-lens'
        />
        <Text
          flex={2}
          fontWeight={600}
          fontSize='md'
          color={useColorModeValue('dark.50', 'light.50')}
        >
          Color theme
        </Text>
        <Box flexDirection='row' padding={3}>
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"primary"} color={useColorModeValue("primary.50", "primary.800")} />
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"green"} color={useColorModeValue("green.50", "green.800")} />
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"blue"} color={useColorModeValue("blue.50", "blue.800")} />
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"orange"} color={useColorModeValue("orange.50", "orange.800")} />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default ColorThemePicker;
