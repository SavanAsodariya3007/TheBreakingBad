import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from '@theme';

interface IProps {
  children: React.ReactNode;
}

function Providers(props: IProps) {
  const {children} = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export {Providers};
