import * as React from "react";
import { Icon, IconButton } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onPress: any;
}

export default function SettingsButton(props: Props) {
  return (
    <IconButton
      onPress={props.onPress}
      icon={<Icon size={10} as={MaterialIcons} name="settings" />}
    />
  );
}
