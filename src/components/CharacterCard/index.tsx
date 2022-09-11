import React from 'react';
import {ICharacter} from '@common';
import {
  BottomDetailContainer,
  CharacterName,
  Container,
  Image,
  ImageContainer,
  LeftPart,
  NickName,
  RightPart,
} from './styles';
import {FillheartIcon} from '@icons';

interface IProps {
  item: ICharacter;
}

function CharacterCard(props: IProps) {
  const {item} = props;
  const {img, name, nickname} = item;

  return (
    <Container>
      <ImageContainer>
        <Image source={{uri: img}} resizeMode="stretch" />
      </ImageContainer>
      <BottomDetailContainer>
        <LeftPart>
          <CharacterName numberOfLines={1}>{name}</CharacterName>
          <NickName numberOfLines={1}>{nickname}</NickName>
        </LeftPart>
        <RightPart>
          <FillheartIcon />
        </RightPart>
      </BottomDetailContainer>
    </Container>
  );
}

export {CharacterCard};
