import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { IPost } from '../../../types';

const ListAttrs = {
  contentContainerStyle: {
    paddingHorizontal: 44,
    paddingVertical: 33,
  },
};

export const List = styled(FlatList as new () => FlatList<IPost>).attrs(ListAttrs)`
  flex: 1;
`;

export const Spacer = styled.View`
  height: 34px;
`;
