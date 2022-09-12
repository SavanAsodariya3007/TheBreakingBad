import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {CharacterCard} from '@components';
import {useToggleFavourite} from '@hooks';
import {ContentLoader, Empty, ICharacter} from '@common';
import {columnWrapperStyle, flex1} from '@globals';
import {Container} from './styles';
import {useCharacters} from './useCharacters';

function Home() {
  const {data, isLoading} = useCharacters();
  const {isFavourite, onToogle} = useToggleFavourite();

  const keyExtractor = (item: ICharacter, index: number) =>
    `character-${item.char_id}-${index}`;

  const renderCharacter: ListRenderItem<ICharacter> = ({item}) => (
    <CharacterCard
      item={item}
      isFav={isFavourite(item)}
      onToggleFav={onToogle}
    />
  );

  const isCharacters = (data || []).length > 0;
  return (
    <Container>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={isCharacters ? {} : flex1}
        keyExtractor={keyExtractor}
        renderItem={renderCharacter}
        columnWrapperStyle={columnWrapperStyle}
        ListEmptyComponent={<Empty />}
        ListHeaderComponent={<ContentLoader loading={isLoading} />}
      />
    </Container>
  );
}

export {Home};
