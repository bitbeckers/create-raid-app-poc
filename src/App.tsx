import React from 'react';

import { RaidContextProvider } from './contexts/raidContext';
import { ButtonGroup } from './components/molecules/ButtonGroup';
import { Footer } from './components/molecules/Footer';
import { Header } from './components/molecules/Header';
import { Text } from './components/atoms/Text';
import { AppContainer } from './components/atoms/AppContainer';
import { Logo } from './components/atoms/Logo';
import { CenteredRow } from './components/atoms/CenteredRow';
import { SidePanel } from './components/atoms/SidePanel';


const App = () => {
  return (
    <RaidContextProvider>
      <AppContainer>
        <SidePanel position='left'>
          <Logo size='medium' fill='white' />
        </SidePanel>

        <SidePanel position='right'>
          <Logo size='medium' fill='white' />
        </SidePanel>

        <Header>
          <Logo size='tiny' fill='white' />
        </Header>
        <CenteredRow>
          <ButtonGroup buttons={['Wrap', 'Unwrap']} />
          <Text content='Set to wrap ETH to wETH or unwrap wETH to ETH' />
        </CenteredRow>
        <Footer>
          <Text content={'Created by Raid Guild'} />
        </Footer>
      </AppContainer>
    </RaidContextProvider>
  );
};

export default App;
