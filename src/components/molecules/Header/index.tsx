import React from 'react';

import { Button, Flex, Image, Spacer } from '@chakra-ui/react';
import logo from '../../../assets/wrapeth_logo.png';

export interface HeaderProps {
  user?: {};
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout }) => (
  <Flex
    align='center'
    justify={['space-between', 'center']}
    wrap='wrap'
    w='100vw'
    mb={8}
    p={8}
  >
    <Image src={logo} alt='wrapeth logo' max-width='240px' height='auto' />
    <Spacer />
    {user ? (
      <Button onClick={onLogout}>Log out</Button>
    ) : (
      <Button onClick={onLogin}>Log in</Button>
    )}
  </Flex>
);
