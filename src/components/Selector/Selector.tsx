import React from 'react';
import { Wrapper, Text } from './Selector.styles';

interface ISelectorProps {
  text: string;
  onPress: () => void;
  isActive: boolean;
}

const Selector: React.FC<ISelectorProps> = ({ onPress, text, isActive }) => (
  <Wrapper onPress={onPress} isActive={isActive}>
    <Text>{text}</Text>
  </Wrapper>
);

export default Selector;
