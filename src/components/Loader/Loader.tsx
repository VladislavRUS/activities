import React from 'react';

import { Wrapper } from './Loader.styles';
import { ActivityIndicator } from 'react-native';

interface ILoaderProps {
  isVisible: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ isVisible }) =>
  isVisible ? (
    <Wrapper>
      <ActivityIndicator />
    </Wrapper>
  ) : null;

export default Loader;
