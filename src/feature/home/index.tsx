import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {CharacterCard} from '@components';
import {ICharacter} from '@common';
import {Container} from './styles';

function Home() {
  const keyExtractor = (item: ICharacter, index: number) =>
    `character-${item.char_id}-${index}`;

  const renderCharacter: ListRenderItem<ICharacter> = ({item}) => (
    <CharacterCard item={item} />
  );

  return (
    <Container>
      <FlatList
        data={[]}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={renderCharacter}
        columnWrapperStyle={{
          marginVertical: 10,
        }}
      />
    </Container>
  );
}

export {Home};
