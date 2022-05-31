import React, { useCallback, useRef, useMemo, useState } from "react";
import { useColorModeValue } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";

import SettingsButton from "./settings-button";
import Background from "./background";
import Masthead from "./bottom-sheet-masthead";
import BottomSheetBackground from "../components/bottom-sheet-background";

import TextSizePicker from "./text-size-picker";
import ColorModeToggle from "./color-mode-toggle";
import ColorThemePicker from "./color-theme-picker";

const SettingsBottomSheet = () => {
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
      <SettingsButton onPress={settingsButtonOnPress} />
      <BottomSheet ref={sheetRef} snapPoints={snapPoints} backgroundComponent={BottomSheetBackground}> 
        <Background
          rounded="2xl"
          bg={useColorModeValue("muted.50", "muted.800")}
          padding={5}
          flex={1}
        >
          <Masthead />
          <ColorThemePicker />
          <TextSizePicker />
        </Background>
      </BottomSheet>
    </>
  );
};

export default SettingsBottomSheet;
