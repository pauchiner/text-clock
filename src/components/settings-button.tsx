import * as React from "react";
import { Stack, Icon, IconButton, useColorModeValue } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  colorTheme: string;
  onPress: any;
}

export default function SettingsButton(props: Props) {
  return (
    <Stack
      direction={"row"}
      justifyContent="flex-end"
      right={2}
      top={12}
      position={"absolute"}
      width="100%"
      zIndex={99}
    >
      <IconButton
        onPress={props.onPress}
        icon={<Icon color={useColorModeValue("dark.50", props.colorTheme + ".300")} size={10} as={MaterialIcons} name="settings" />}
      />
    </Stack>
  );
}
