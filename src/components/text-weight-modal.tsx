import React from "react";
import Modal from "react-native-modal";
import { Divider, Box, Text, useColorModeValue } from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  FadeOut,
} from "react-native-reanimated";

import Background from "./background";
import TextWeightModalItem from "./text-weight-modal-item";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  reloadSettings: any;
}

const TextWeightModal = (props: Props) => {
  const progress = useSharedValue(1.2);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = withTiming(props.isOpen ? 1 : 1.2, {
      duration: 300,
      easing: Easing.bezier(0.44, 0.04, 0.5, 0.94),
    });
    return {
      transform: [
        {
          scale: progress.value,
        },
      ],
    };
  });

  return (
    <Modal
      isVisible={props.isOpen}
      backdropOpacity={0.55}
      animationIn="fadeIn"
      animationInTiming={250}
      onBackdropPress={() => {
        props.setIsOpen(false);
      }}
    >
      <AnimatedBox
        alignSelf="center"
        width="55%"
        style={animatedBoxStyle}
        exiting={FadeOut}
      >
        <Box>
          <Background
            bg={useColorModeValue("muted.100", "muted.700")}
            rounded="lg"
          >
            <Text alignSelf="center" fontSize="xl" fontWeight={600} margin={1}>
              Choose a size
            </Text>
            <Divider />
            <TextWeightModalItem
              reloadSettings={props.reloadSettings}
              text="Light"
              weight="300"
            />
            <TextWeightModalItem
              reloadSettings={props.reloadSettings}
              text="Regular"
              weight="400"
            />
            <TextWeightModalItem
              reloadSettings={props.reloadSettings}
              text="Medium"
              weight="600"
            />
            <TextWeightModalItem
              reloadSettings={props.reloadSettings}
              text="Bold"
              weight="700"
            />
          </Background>
        </Box>
      </AnimatedBox>
    </Modal>
  );
};

export default TextWeightModal;
