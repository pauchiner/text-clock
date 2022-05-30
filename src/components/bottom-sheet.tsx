import React, { useCallback, useRef, useMemo, useState } from "react";
import { useColorModeValue } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";

import BottomSheetBackground from "../components/bottom-sheet-background";
import SettingsButton from "./settings-button";
import ThemeToggle from "./theme-toggle";
import Background from "./background";

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
          bg={useColorModeValue("muted.50", "muted.800")}
          padding={5}
          flex={1}
        >
          <ThemeToggle />
        </Background>
      </BottomSheet>
    </>
  );
};

export default SettingsBottomSheet;
