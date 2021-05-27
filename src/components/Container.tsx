import { Flex } from '@chakra-ui/react';
import React from 'react';

interface ContainerProps {
  children: any;
  direction: any;
  bg: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  direction,
  bg,
}: ContainerProps) => (
  <Flex
    direction={direction ? direction : 'row'}
    bg={bg ? bg : 'blackAlpha.800'}
    minW='100%'
    minH='100vh'
    p='20px'
    pl='240px'
    wrap='wrap'
    justify='flex-start'
  >
    {children}
  </Flex>
);

export default Container;
