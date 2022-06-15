import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  Box,
  Icon,
  useColorModeValue,
  Divider,
  Pressable,
} from "native-base";

import TextWeightModal from "./text-weight-modal";

const TextWeightPicker = ({ reloadSettings }: any) => {
  const [showModal, setShowModal] = useState(false);

  const textWeightName = () => {
    switch (globalThis.textWeight) {
      case "300":
        return "Thin";
      case "400":
        return "Regular";
      case "600":
        return "Medium";
      case "700":
        return "Bold";
    }
  };

  return (
    <>
      <TextWeightModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        reloadSettings={reloadSettings}
      />
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
          Text weight
        </Text>
        <Pressable
          padding={4}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text fontSize={18} fontWeight={600}>
            {textWeightName()}
          </Text>
        </Pressable>
      </Box>
      <Divider />
    </>
  );
};

export default TextWeightPicker;
