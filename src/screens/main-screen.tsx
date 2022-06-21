import React from "react";
import { Center, Box } from "native-base";

import Clock from "../components/clock";
import AppStatusBar from "../components/status-bar"
import SettingsBottomSheet from "../components/bottom-sheet";

export default class MainScreen extends React.Component {
  constructor(props: any) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    return (
      <Box
        _light={{ background: globalThis.colorTheme + ".50" }}
        _dark={{ background: globalThis.colorTheme + ".900" }}
        flex={1}
        padding={5}
      >
        <AppStatusBar/>
        <Center flex={1}>
          <Clock />
        </Center>
        <SettingsBottomSheet reloadSettings={this.forceUpdateHandler} />
      </Box>
    );
  }
}
