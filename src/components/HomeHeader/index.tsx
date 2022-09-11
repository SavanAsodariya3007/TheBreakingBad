import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import {FillheartIcon, SearchIcon} from '@icons';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {
  Container,
  HeaderRightContainer,
  HeaderTitleContainer,
  Text,
} from './styles';

function HomeHeader(props: NativeStackHeaderProps) {
  const {navigation} = props;
  const onHeartTap = () => navigation.push('favourites');
  const onSearchTap = () => navigation.push('search');

  return (
    <Container>
      <HeaderTitleContainer>
        <Text>The Breaking bad</Text>
      </HeaderTitleContainer>
      <HeaderRightContainer>
        <Pressable onPress={onSearchTap}>
          <SearchIcon />
        </Pressable>
        <Pressable onPress={onHeartTap}>
          <FillheartIcon />
        </Pressable>
      </HeaderRightContainer>
    </Container>
  );
}

export {HomeHeader};
