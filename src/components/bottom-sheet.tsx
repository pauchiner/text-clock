import React, { useCallback, useRef, useMemo, useState } from "react";
import { useColorModeValue } from "native-base";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

import Background from "./background";
import SettingsButton from "./settings-button";
import Masthead from "./bottom-sheet-masthead";
import BottomSheetBackground from "../components/bottom-sheet-background";

import TextWeightPicker from "./text-weight-picker";
import ColorThemePicker from "./color-theme-picker";
import PrivacyPolicyButton from "./privacy-policy-button";
import RestoreSettingsButton from "./restore-settings-button";
import RateAppButton from "./rate-app-button";
import Credits from "./credits";

const SettingsBottomSheet = ({reloadSettings}: any) => {
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

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={true}
        pressBehavior={() => {
          handleClosePress();
        }}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const onPressSettings = () => {
    if (isActive) {
      handleClosePress();
    }
    handleSnapPress(0);
  };

  return (
    <>
      <SettingsButton onPress={onPressSettings} />
      <BottomSheet
        index={-1}
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        backgroundComponent={BottomSheetBackground}
      >
        <Background
          bg={useColorModeValue("muted.50", "muted.800")}
          rounded="2xl"
          flex={1}
          padding={5}
        >
          <Masthead />
          <ColorThemePicker reloadSettings={reloadSettings}/>
          <TextWeightPicker reloadSettings={reloadSettings}/>
          <PrivacyPolicyButton />
          <RateAppButton />
          <RestoreSettingsButton />
          <Credits />
        </Background>
      </BottomSheet>
    </>
  );
};

export default SettingsBottomSheet;
