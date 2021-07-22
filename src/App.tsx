import React from 'react';

import { RaidContextProvider } from './contexts/raidContext';
import { AppContainer } from './components/AppContainer';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

const App = () => {
  return (
    <RaidContextProvider>
      <ChakraProvider theme={theme} resetCSS>
        <AppContainer />
      </ChakraProvider>
    </RaidContextProvider>
  );
};

export default App;
