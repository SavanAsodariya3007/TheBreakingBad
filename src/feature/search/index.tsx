import {BackButton} from '@common';
import {SearchHeader} from '@components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {RootStackParamsList} from 'routes';
import {useTheme} from 'styled-components';
import {Container, Text} from './styles';

interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'search'>;
}

function Search(props: IProps) {
  const {navigation} = props;
  const {colors} = useTheme();
  const [search, setSearch] = useState<string>('');

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
  }, [navigation, search, setSearch, clearSearch]);

  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
}

export {Search};
