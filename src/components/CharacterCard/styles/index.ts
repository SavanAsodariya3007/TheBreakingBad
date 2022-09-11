import styled from 'styled-components/native';
import {ITheme} from '@theme';

export const Container = styled.View<ITheme>`
  min-height: 260px;
  width: 45%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  border-radius: 5px;
  overflow: hidden;
`;

export const ImageContainer = styled.View`
  height: 200px;
  width: 100%;
`;

export const Image = styled.Image`
  height: 100%;
  width: 100%;
`;

export const BottomDetailContainer = styled.View`
  height: 60px;
  flex-direction: row;
`;

export const LeftPart = styled.View`
  flex: 0.75;
  justify-content: center;
`;

export const RightPart = styled.TouchableOpacity`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

export const CharacterName = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.fontSize[3]}px;
  color: ${({theme}) => theme.colors.white};
`;

export const NickName = styled.Text`
  font-family: ${({theme}) => theme.fonts.light};
  font-size: ${({theme}) => theme.fontSize[2]}px;
  color: ${({theme}) => theme.colors.white};
`;
