import {BackButton, ContentLoader, Empty, ICharacter} from '@common';
import {CharacterCard, SearchHeader} from '@components';
import {useCharacters} from '@feature/home/useCharacters';
import {columnWrapperStyle, flex1} from '@globals';
import {useToggleFavourite} from '@hooks';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ListRenderItem} from 'react-native';
import {RootStackParamsList} from 'routes';
import {useTheme} from 'styled-components';
import {Container} from './styles';

interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'search'>;
}

function Search(props: IProps) {
  const {navigation} = props;
  const {colors} = useTheme();
  const [search, setSearch] = useState<string>('');
  const {data, isLoading} = useCharacters(search);

  const {isFavourite, onToogle} = useToggleFavourite();

  const clearSearch = useCallback(() => {
    setSearch('');
  }, [setSearch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: args => BackButton({...args, navigation}),
      headerTitle: () => (
        <SearchHeader
          value={search}
          onChangeText={setSearch}
          onClearTap={clearSearch}
        />
      ),
      headerBackVisible: false,
      headerRight: undefined,
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    });
  }, [navigation, search, setSearch, clearSearch, colors.secondary]);

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
        ListEmptyComponent={!isLoading ? <Empty /> : null}
        ListHeaderComponent={<ContentLoader loading={isLoading} />}
      />
    </Container>
  );
}

export {Search};
