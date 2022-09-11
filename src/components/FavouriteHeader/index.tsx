import React from 'react';
import {Pressable} from 'react-native';
import {CloseIcon} from '@icons';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {
  Container,
  HeaderRightContainer,
  HeaderTitleContainer,
  Text,
} from './styles';

function FavouriteHeader(props: NativeStackHeaderProps) {
  const {navigation} = props;
  const onCloseTap = () => navigation.goBack();

  return (
    <Container>
      <HeaderTitleContainer>
        <Text>Favourites</Text>
      </HeaderTitleContainer>
      <Pressable onPress={onCloseTap}>
        <HeaderRightContainer>
          <CloseIcon />
        </HeaderRightContainer>
      </Pressable>
    </Container>
  );
}

export {FavouriteHeader};
