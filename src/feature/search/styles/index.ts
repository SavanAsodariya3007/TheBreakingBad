import styled from 'styled-components/native';
import {ITheme} from '@theme';

export const Container = styled.View<ITheme>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<ITheme>`
  font-size: 20px;
`;
