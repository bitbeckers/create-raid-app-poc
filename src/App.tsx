import React from 'react';

import { RaidContextProvider } from './contexts/raidContext';
import { LoaderContextProvider } from './contexts/loaderContext';
import { InjectedProvider } from './contexts/injectedProviderContext';
import { AppContainer } from './components/AppContainer';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { CurrentUserContextProvider } from './contexts/currentUserContext';
import { ContractContextProvider } from './contexts/contractContext';

const App = () => {
  return (
    <RaidContextProvider>
      <ChakraProvider theme={theme} resetCSS>
        <LoaderContextProvider>
          <InjectedProvider>
            <CurrentUserContextProvider>
              <ContractContextProvider>
                <AppContainer />
              </ContractContextProvider>
            </CurrentUserContextProvider>
          </InjectedProvider>
        </LoaderContextProvider>
      </ChakraProvider>
    </RaidContextProvider>
  );
};

export default App;
