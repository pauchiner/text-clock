import * as React from "react";
import { Box, Center, Text, useColorModeValue } from "native-base";

import ThemeToggle from "../components/theme-toggle";
import Background from "../components/background";

export default function Settings() {
  return (
    <Background
      bg={useColorModeValue("primary.50", "primary.900")}
      padding={5}
      flex={1}
    >
      <Center flex={1}>
        <ThemeToggle />
      </Center>
    </Background>
  );
}
