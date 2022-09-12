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
import {FillheartIcon, HeartIcon} from '@icons';

interface IProps {
  item: ICharacter;
  isFav: boolean;
  onToggleFav: (item: ICharacter) => void;
}

function CharacterCard(props: IProps) {
  const {item, isFav, onToggleFav} = props;
  const {img, name, nickname} = item;

  const onPress = () => onToggleFav?.(item);

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
        <RightPart onPress={onPress}>
          {isFav ? <FillheartIcon /> : <HeartIcon />}
        </RightPart>
      </BottomDetailContainer>
    </Container>
  );
}

export {CharacterCard};
