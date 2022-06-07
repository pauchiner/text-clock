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

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );

  return (
    <>
      <SettingsButton
        colorTheme={props.colorTheme}
        onPress={settingsButtonOnPress}
      />
      <BottomSheet
        index={-1}
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        backgroundComponent={BottomSheetBackground}
      >
        <Background
          rounded="2xl"
          bg={useColorModeValue("muted.50", "muted.800")}
          padding={5}
          flex={1}
        >
          <Masthead colorTheme={props.colorTheme} />
          <ColorThemePicker
            colorTheme={props.colorTheme}
            setColorTheme={props.setColorTheme}
          />
          <TextWeightPicker
            colorTheme={props.colorTheme}
            textWeight={props.textWeight}
            setTextWeight={props.setTextWeight}
          />
          <PrivacyPolicyButton />
          <RateAppButton />
          <RestoreSettingsButton
            setColorTheme={props.setColorTheme}
            setTextWeight={props.setTextWeight}
          />
          <Credits colorTheme={props.colorTheme} />
        </Background>
      </BottomSheet>
    </>
  );
};

export default SettingsBottomSheet;
