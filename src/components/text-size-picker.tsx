import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  Box,
  Icon,
  useColorModeValue,
  Divider,
  Pressable,
  Radio,
  Modal,
} from "native-base";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const TextSizePicker = () => {
  const [showModal, setShowModal] = useState(false);
  const [pressed, setPressed] = useState(false);
  const progress = useSharedValue(0);

  const AnimatedBox = Animated.createAnimatedComponent(Box);

  const animatedBoxStyle = useAnimatedStyle(() => {
    progress.value = withTiming(pressed ? 1.1 : 1, { duration: 100 });
    return {
      transform: [
        {
          scale: progress.value,
        },
      ],
    };
  });

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <Modal.Content maxWidth="80%">
          <Modal.CloseButton />
          <Modal.Header>Choose the text size</Modal.Header>
          <Modal.Body>
            <Radio.Group name="text size picker">
              <Radio value="little">Little</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="big">Bigger</Radio>
              <Radio value="extra-big">Extra Big</Radio>
            </Radio.Group>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Box alignItems="center" flexDirection="row">
        <Icon
          color={useColorModeValue("dark.50", "light.50")}
          margin={2}
          size={22}
          as={MaterialIcons}
          name="text-fields"
        />
        <Text
          flex={2}
          fontWeight={600}
          fontSize="md"
          color={useColorModeValue("dark.50", "light.50")}
        >
          Text size
        </Text>
        <Pressable
          padding={4}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text fontSize={18} fontWeight={600}>
            Medium
          </Text>
        </Pressable>
      </Box>
      <Divider />
    </>
  );
};

export default TextSizePicker;
