import React from 'react';
import { Text } from 'native-base';

interface Props {
  isActive: boolean;
  text: string;
}

export default function Word(props: Props) {
  return (
    <Text
      fontFamily='body'
      fontWeight={600}
      fontSize='3xl'
      padding={3}
      opacity={props.isActive ? 100 : 30}
    >
      {props.text}
    </Text>
  );
}

Word.defaultProps = {
  isActive: false,
  text: '???',
};
