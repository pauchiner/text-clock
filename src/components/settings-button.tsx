import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import { Stack, Icon, IconButton, useColorModeValue } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function SettingsButton(props: { onPress: any }) {
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
        accessibilityLabel="settings button"
        size={moderateScale(50, 1.2)}
        onPress={props.onPress}
        icon={
          <Icon
            color={useColorModeValue("dark.50", globalThis.colorTheme + ".300")}
            size={moderateScale(30, 1.9)}
            as={MaterialIcons}
            name="settings"
          />
        }
      />
    </Stack>
  );
}
