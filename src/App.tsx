import React from 'react';

import { RaidContextProvider } from './contexts/raidContext';
import { LoaderContextProvider } from './contexts/loaderContext';
import { InjectedProvider } from './contexts/injectedProviderContext';
import { AppContainer } from './components/AppContainer';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';

const App = () => {
  return (
    <RaidContextProvider>
      <ChakraProvider theme={theme} resetCSS>
        <LoaderContextProvider>
          <InjectedProvider>
            <AppContainer />
          </InjectedProvider>
        </LoaderContextProvider>
      </ChakraProvider>
    </RaidContextProvider>
  );
};

export default App;
