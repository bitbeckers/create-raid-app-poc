import React from 'react';
import {
  Button,
  Center,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  Link,
  Stack,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Swords from '../assets/swords-white.svg';

const links = [{ link: '/', label: 'Home' }];

interface NavLinkProps {
  link: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ link, label }: NavLinkProps) => (
  <Link
    as={RouterLink}
    display='block'
    w='100%'
    to={link}
    textAlign='center'
    size='md'
    py={3}
    _hover={{ bg: 'whiteAlpha.200' }}
  >
    {label.toUpperCase()}
  </Link>
);

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant='solid' onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <Stack mt={10} spacing={3} w='100%'>
              {links.map((l) => (
                <NavLink link={l.link} label={l.label} key={l.label} />
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Center w='100%'>
              <Image src={Swords} h='75px' w='75px' opacity='70%' />
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Nav;
