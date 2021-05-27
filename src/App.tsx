import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { RaidContextProvider } from './contexts/raidContext';
import Nav from './components/Nav';

//routes
import Home from './routes/Home';

const App = () => {
  return (
    <RaidContextProvider>
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </RaidContextProvider>
  );
};

export default App;
