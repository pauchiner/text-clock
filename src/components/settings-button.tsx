import * as React from "react";
import { Stack, Icon, IconButton } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
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
        icon={<Icon size={10} as={MaterialIcons} name="settings" />}
      />
    </Stack>
  );
}
