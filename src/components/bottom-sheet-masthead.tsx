import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, Box, Icon, useColorModeValue } from "native-base";
import ColorModeToggle from "./color-mode-toggle";

const Masthead = () => {
  return (
    <Box
      accessibilityLabel="settings menu"
      bg={useColorModeValue("muted.100", "muted.900")}
      flexDirection="row"
      justifyContent="space-between"
      shadow={2}
      padding={2}
      rounded="2xl"
      marginBottom={3}
    >
      <Box flexDirection="row" alignItems="center">
        <Icon
          size={35}
          color={useColorModeValue("dark.50", globalThis.colorTheme + ".500")}
          margin={2}
          as={MaterialIcons}
          name="access-time"
        />
        <Box flexDirection="column">
          <Text fontWeight={700} fontSize="xl">
            Text O'Clock
          </Text>
          <Text fontWeight={300} fontStyle="italic" fontSize="md">
            Version 1.03
          </Text>
        </Box>
      </Box>
      <ColorModeToggle />
    </Box>
  );
};

export default Masthead;
