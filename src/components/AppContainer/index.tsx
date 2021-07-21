import React from 'react';

import { Footer } from '../molecules/Footer';
import { ButtonGroup } from '../molecules/ButtonGroup';
import { Header } from '../molecules/Header';
import { Text } from '../atoms/Text';
import { SidePanel } from '../molecules/SidePanel';

import { Container, Flex, Spacer, Image } from '@chakra-ui/react';

import footerImage from '../../assets/raidguild_mark.png';
import raidGuildLogoLeft from '../../assets/raid--left.png';
import raidGuildLogoRight from '../../assets/raid--right.png';

export interface AppContainerProps {
  /**
   * The components to render within the app container
   */
  children?: any;
}

/**
 * Primary UI component for user interaction
 */
export const AppContainer: React.FC<AppContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex h='100vh' w='100vw'>
      <SidePanel>
        <Image src={raidGuildLogoLeft} alt='Swords logo' maxH='75vh' />
      </SidePanel>

      <Container centerContent flexDirection='column'>
        <Header />
        <ButtonGroup buttons={['Wrap', 'Unwrap']} isAttached />
        <Text content='Set to wrap ETH to wETH or unwrap wETH to ETH' />
        <Spacer />
        <Footer>
          <Image src={footerImage} alt='Created by Raid Guild' />
        </Footer>
      </Container>

      <SidePanel>
        <Image src={raidGuildLogoRight} alt='Swords logo' maxH='75vh' />
      </SidePanel>
    </Flex>
  );
};
