import React from 'react';
import { Wrapper, Text } from './RegularButton.styles';

interface IRegularButtonProps {
  text: string;
  onPress: () => void;
  isDisabled?: boolean;
}

const RegularButton: React.FC<IRegularButtonProps> = ({ onPress, text, isDisabled }) => (
  <Wrapper onPress={onPress} disabled={isDisabled}>
    <Text>{text}</Text>
  </Wrapper>
);

export default RegularButton;
