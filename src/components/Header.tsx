import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import Nav from './Nav';

const Header: React.FC = ({ children }) => (
  <Flex align='center'>
    <Box>
      <Nav />
    </Box>

    <Spacer />

    <Box padding='10x 20px'>
      <Heading color='primaryAlpha.500' size='lg'>
        {children}
      </Heading>
    </Box>

    <Spacer />
  </Flex>
);

export default Header;
