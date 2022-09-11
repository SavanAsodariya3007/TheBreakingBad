import styled from 'styled-components/native';
import {ITheme} from '@theme';

export const Container = styled.View<ITheme>`
  height: 75px;
  background-color: ${({theme}) => theme.colors.secondary};
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

export const HeaderTitleContainer = styled.View<ITheme>`
  flex: 9;
`;

export const HeaderRightContainer = styled.View<ITheme>`
  flex: 1;
  flex-direction: row;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.Text<ITheme>`
  font-size: ${({theme}) => theme.fontSize[6]}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
`;
