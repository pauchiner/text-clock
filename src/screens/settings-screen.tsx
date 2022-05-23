import * as React from "react";
import { Box, Center, Text } from "native-base";

import ThemeToggle from "../components/theme-toggle";


export default function Settings() {
  return (
    <Center
      _dark={{ bg: "primary.900" }}
      _light={{ bg: "primary.50" }}
      padding={5}
      flex={1}
    >
    <ThemeToggle />
    </Center>
  );
}
