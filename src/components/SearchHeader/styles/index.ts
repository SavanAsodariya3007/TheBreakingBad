import styled from 'styled-components/native';
import {ITheme} from '@theme';
import {screenWidth} from '@globals';

export const Container = styled.View<ITheme>`
  height: 100%;
  width: 88%;
  flex-direction: row;
`;

export const SearchContainer = styled.View`
  flex: 0.9;
`;
export const CloseButtonContainer = styled.Pressable`
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
