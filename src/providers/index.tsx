import React from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {theme} from '@theme';
import {persistor, store} from '@store';

interface IProps {
  children: React.ReactNode;
}

function Providers(props: IProps) {
  const {children} = props;
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export {Providers};
