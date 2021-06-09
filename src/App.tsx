import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';

import { RaidContextProvider } from './contexts/raidContext';
import Header from './components/Header';

//routes
import Home from './routes/Home';

const App = () => {
  return (
    <RaidContextProvider>
      <ChakraProvider theme={theme}>
        <HashRouter>
          <Header>Raid Guild App Template</Header>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </HashRouter>
      </ChakraProvider>
    </RaidContextProvider>
  );
};

export default App;
