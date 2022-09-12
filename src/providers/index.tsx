import React from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {theme} from '@theme';
import {persistor, store} from '@store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

interface IProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

function Providers(props: IProps) {
  const {children} = props;
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export {Providers};
