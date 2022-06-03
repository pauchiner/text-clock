import React, { useCallback, useRef, useMemo, useState } from "react";
import { useColorModeValue } from "native-base";
import BottomSheet  from "@gorhom/bottom-sheet";

import Background from "./background";
import SettingsButton from "./settings-button";
import Masthead from "./bottom-sheet-masthead";
import BottomSheetBackground from "../components/bottom-sheet-background";

import TextWeightPicker from "./text-weight-picker";
import ColorThemePicker from "./color-theme-picker";
import RestoreSettingsButton from "./restore-settings-button";

interface Props {
  setTextWeight: any;
  textWeight: string;
  setColorTheme: any;
  colorTheme: string;
}

const SettingsBottomSheet = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["85%"], []);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsActive(true);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    setIsActive(false);
  }, []);

  const settingsButtonOnPress = () => {
    if (!isActive) handleSnapPress(0);
    handleClosePress();
  };

  return (
    <>
      <SettingsButton colorTheme={props.colorTheme} onPress={settingsButtonOnPress} />
      <BottomSheet ref={sheetRef} snapPoints={snapPoints}  backgroundComponent={BottomSheetBackground}> 
        <Background
          rounded="2xl"
          bg={useColorModeValue("muted.50", "muted.800")}
          padding={5}
          flex={1}
        >
          <Masthead colorTheme={props.colorTheme}/>
          <ColorThemePicker colorTheme={props.colorTheme} setColorTheme={props.setColorTheme}/>
          <TextWeightPicker colorTheme={props.colorTheme} textWeight={props.textWeight} setTextWeight={props.setTextWeight}/>
          <RestoreSettingsButton setColorTheme={props.setColorTheme} setTextWeight={props.setTextWeight}/>
        </Background>
      </BottomSheet>
    </>
  );
};

export default SettingsBottomSheet;
