import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Box, Icon, IconButton, useColorModeValue } from 'native-base';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import ColorModeToggle from './color-mode-toggle';

const Masthead = ({colorTheme}: any) => {
  return(
    <Box
      bg={useColorModeValue("muted.100", "muted.900")}
      flexDirection="row"
      shadow={2}
      padding={2}
      rounded="2xl"
      marginBottom={3}
    >
      <Box flex={3} flexDirection="row" alignItems="center">
        <Icon size={35} color={useColorModeValue("dark.50", colorTheme + ".500")} margin={2} as={MaterialIcons} name="access-time"/>
        <Box flexDirection="column">
         <Text fontWeight={700} fontSize="xl">Text O'Clock</Text>
          <Text fontWeight={300} fontStyle="italic" fontSize="md">Version 0.87</Text>
        </Box>
      </Box>
      <ColorModeToggle colorTheme={colorTheme} flex={1} marginRight={2} />
    </Box>
  );
}

export default Masthead;
