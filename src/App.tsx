import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme';

import { RaidContextProvider } from './contexts/raidContext';
import Nav from './components/Nav';

//routes
import Home from './routes/Home';

const App = () => {
  return (
    <RaidContextProvider>
      <ChakraProvider theme={theme}>
        <HashRouter>
          <Nav />
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
