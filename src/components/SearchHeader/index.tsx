import React from 'react';
import {CloseButtonContainer, Container, SearchContainer} from './styles';
import {TextInput} from 'react-native';
import {useTheme} from 'styled-components';
import {CloseIcon} from '@icons';

interface IProps {
  value: string;
  onChangeText: (value: string) => void;
  onClearTap: () => void;
}

function SearchHeader(props: IProps) {
  const {onChangeText, onClearTap, value} = props;
  const {colors, fontSize, fonts} = useTheme();

  return (
    <Container>
      <SearchContainer>
        <TextInput
          style={{
            fontFamily: fonts.light,
            fontSize: fontSize[6],
            color: colors.white,
          }}
          placeholder="Search"
          placeholderTextColor={colors.placeHolderColor}
          value={value}
          onChangeText={onChangeText}
        />
      </SearchContainer>
      <CloseButtonContainer onPress={onClearTap}>
        <CloseIcon />
      </CloseButtonContainer>
    </Container>
  );
}

export {SearchHeader};
