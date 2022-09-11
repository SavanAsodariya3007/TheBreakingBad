import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeContainer} from '@globals';

import {Providers} from './providers';
import {Routes} from './routes';

function App() {
  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  return (
    <Providers>
      <SafeContainer>
        <Routes />
      </SafeContainer>
    </Providers>
  );
}

export {App};
