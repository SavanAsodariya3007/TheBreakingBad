import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {CharacterCard} from '@components';
import {Empty, ICharacter} from '@common';
import {useToggleFavourite} from '@hooks';
import {columnWrapperStyle, flex1} from '@globals';
import {Container} from './styles';

function Favourites() {
  const {isFavourite, onToogle, favouriteList} = useToggleFavourite();

  const keyExtractor = (item: ICharacter, index: number) =>
    `character-${item.char_id}-${index}`;

  const renderCharacter: ListRenderItem<ICharacter> = ({item}) => (
    <CharacterCard
      item={item}
      isFav={isFavourite(item)}
      onToggleFav={onToogle}
    />
  );

  const isFav = favouriteList.length > 0;

  return (
    <Container>
      <FlatList
        data={favouriteList}
        numColumns={2}
        contentContainerStyle={isFav ? {} : flex1}
        keyExtractor={keyExtractor}
        renderItem={renderCharacter}
        columnWrapperStyle={columnWrapperStyle}
        ListEmptyComponent={<Empty />}
      />
    </Container>
  );
}

export {Favourites};
