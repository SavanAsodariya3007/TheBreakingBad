import styled from 'styled-components/native';
import {ITheme} from '@theme';

export const Container = styled.View<ITheme>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;
