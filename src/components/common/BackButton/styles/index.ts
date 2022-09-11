import styled from 'styled-components/native';
import {ITheme} from '@theme';
import {screenWidth} from '@globals';

export const Container = styled.TouchableOpacity<ITheme>`
  width: 10%;
`;

export const Text = styled.Text<ITheme>`
  font-size: 20px;
`;
