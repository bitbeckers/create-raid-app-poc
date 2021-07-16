import { Flex } from '@chakra-ui/react';
import React from 'react';

interface ContainerProps {
  children: any;
  direction?: any;
  bg?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  direction = 'column',
  bg,
}: ContainerProps) => (
  <Flex
    direction={direction}
    position='absolute'
    bg={bg ? bg : 'black'}
    minWidth='100vw'
    minHeight='100vh'
    padding='20px'
    paddingLeft='240px'
    wrap='wrap'
    justify='flex-start'
  >
    {children}
  </Flex>
);

export default Container;
