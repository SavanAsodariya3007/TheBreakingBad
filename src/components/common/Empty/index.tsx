/**
 * @format
 */
import React from 'react';
import {Container, Text} from './styles';

interface IProps {
  message?: string;
}

function Empty(props: IProps) {
  const {message = 'No record found!'} = props;
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
}

export {Empty};
