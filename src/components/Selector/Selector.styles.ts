import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: ${props => (props.isActive ? 'yellow' : '#fff')};
`;

export const Text = styled.Text``;
