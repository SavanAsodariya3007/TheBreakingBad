/**
 * @format
 */
import styled from 'styled-components/native';
import {ITheme} from '@theme';

export const Container = styled.View<ITheme>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<ITheme>`
  font-size: ${({theme}) => theme.fontSize[4]}px;
  font-family: ${({theme}) => theme.fonts.light};
  color: ${({theme}) => theme.colors.white};
`;
