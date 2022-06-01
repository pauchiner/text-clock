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
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"primary"} color='primary.400' />
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"green"} color='green.400' />
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"teal"} color='teal.400' />
          <ColorItem setColorTheme={props.setColorTheme} colorTheme={props.colorTheme} colorChart={"orange"} color='orange.400' />
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default ColorThemePicker;
