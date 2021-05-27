import React from 'react';
import { Flex, Heading, Stack, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Swords from '../assets/swords-white.svg';

const links = [{ link: '/', label: 'Home' }];

interface NavLinkProps {
  link: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ link, label }: NavLinkProps) => (
  <Heading
    as={Link}
    display='block'
    w='100%'
    to={link}
    textAlign='center'
    size='md'
    py={3}
    _hover={{ bg: 'whiteAlpha.200' }}
  >
    {label.toUpperCase()}
  </Heading>
);

const Nav = () => {
  return (
    <Flex
      bg='linear-gradient(18deg, rgba(45,1,11,1) 0%, rgba(255,56,100,1) 50%, rgba(34,0,8,1) 100%)'
      position='fixed'
      left='0%'
      top='0%'
      height='100%'
      minW='200px'
      direction='column'
      align='center'
      justify='space-between'
      zIndex={1}
    >
      <Stack mt={10} spacing={3} w='100%'>
        {links.map((l) => (
          <NavLink link={l.link} label={l.label} key={l.label} />
        ))}
      </Stack>
      <Box mb={10}>
        <Image src={Swords} h='75px' w='75px' opacity='70%' />
      </Box>
    </Flex>
  );
};

export default Nav;
