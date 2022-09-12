/**
 * @format
 */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {Container} from './styles';

interface IProps {
  loading: boolean;
}

function ContentLoader(props: IProps) {
  const theme = useTheme();
  const {loading} = props;

  if (!loading) {
    return null;
  }

  return (
    <Container>
      <ActivityIndicator size="small" color={theme.colors.white} />
    </Container>
  );
}

export {ContentLoader};
