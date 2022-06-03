import React, { useState } from "react";
import Modal from "react-native-modal";
import { Divider, Box, Text, useColorModeValue } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import Background from "./background";
import TextWeightModalItem from "./text-weight-modal-item";

interface Props {
  textWeight: string;
  setTextWeight: any;
  isOpen: boolean;
  setIsOpen: any;
  colorTheme: string;
}

const TextWeightModal = (props: Props) => {
  const progress = useSharedValue(1);
  
  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = withSpring(props.isOpen ? 1 : 1.2);
    return {
      transform: [{
        scale: progress.value,
      }]
    }
  })

  return (
    <Modal
      isVisible={props.isOpen}
      backdropOpacity={0.55}
      animationIn="fadeIn"
      animationInTiming={250}
      animationOut="fadeOut"
      animationOutTiming={190}
      onBackdropPress={() => {
        props.setIsOpen(false);
      }}
    >
    <AnimatedBox alignSelf="center" width="55%" style={animatedBoxStyle}>
      <Background
        bg={useColorModeValue("muted.100", "muted.700")}
        rounded="xl"
        padding={2}
        justifyContent="center"
        shadow={1}
      >
        <Text alignSelf="center" fontSize="xl" fontWeight={600} margin={1}>
          Choose a size
        </Text>
        <Divider />
        <TextWeightModalItem textWeight={props.textWeight} setTextWeight={props.setTextWeight} colorTheme={props.colorTheme} text="Light" weight="300" />
        <TextWeightModalItem textWeight={props.textWeight} setTextWeight={props.setTextWeight} colorTheme={props.colorTheme} text="Regular" weight="400" />
        <TextWeightModalItem textWeight={props.textWeight} setTextWeight={props.setTextWeight} colorTheme={props.colorTheme} text="Medium" weight="600" />
        <TextWeightModalItem textWeight={props.textWeight} setTextWeight={props.setTextWeight} colorTheme={props.colorTheme} text="Bold" weight="700" />
      </Background>
      </AnimatedBox>
    </Modal>
  );
};

export default TextWeightModal;
