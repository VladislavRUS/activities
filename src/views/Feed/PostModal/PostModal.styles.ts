import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Wrapper = styled.View`
  background-color: #fff;
  border-radius: 20px;
  padding: 15px;
  width: 100%;
  align-items: center;
`;

export const Image = styled.Image`
  border-radius: 12px;
  height: 204px;
  width: 100%;
  margin-bottom: 67px;
`;

export const CloseButtonWrapper = styled.View`
  max-width: 180px;
`;
