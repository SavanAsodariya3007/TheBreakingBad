import styled from 'styled-components/native';
import {ITheme} from '@theme';

export const Container = styled.View<ITheme>`
  height: 75px;
  background-color: ${({theme}) => theme.colors.secondary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

export const HeaderTitleContainer = styled.View<ITheme>``;

export const HeaderRightContainer = styled.View<ITheme>`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Text = styled.Text<ITheme>`
  font-size: ${({theme}) => theme.fontSize[6]}px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
`;
