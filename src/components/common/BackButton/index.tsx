import React from 'react';
import {HeaderBackButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Container, Text} from './styles';
import {BackbuttonIcon} from '@icons';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationType} from 'routes';

interface IProps extends HeaderBackButtonProps {
  navigation: any;
}

function BackButton(props: IProps) {
  const {canGoBack, navigation} = props;

  const onPress = () => {
    if (canGoBack) {
      navigation.goBack();
    }
  };

  return (
    <Container onPress={onPress} activeOpacity={1}>
      <BackbuttonIcon />
    </Container>
  );
}

export {BackButton};
