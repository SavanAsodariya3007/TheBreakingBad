import {ITheme} from '@theme';
import styled from 'styled-components/native';

export const SafeContainer = styled.SafeAreaView<ITheme>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
`;
