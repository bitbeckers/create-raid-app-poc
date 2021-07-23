import React from 'react';

// import { Text } from '../../atoms/Text';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import { User } from '../../../types';
import { useInjectedProvider } from '../../../contexts/injectedProviderContext';

export interface AccountButtonProps {
  /**
   * Provide the address of the connected user
   */
  currentUser?: User;
}

/**
 * Interface component for connecting web3 provider, getting account and displaying address in header
 */
export const AccountButton: React.FC<AccountButtonProps> = ({
  currentUser,
  ...props
}) => {
  const { requestWallet } = useInjectedProvider();

  //TODO 1) After connecting wallet create user in state
  const connectWallet = () => {
    console.log('Connecting wallet');
    requestWallet();
  };

  return currentUser?.username ? (
    <Box
      borderRadius='50px'
      py='5px'
      px='10px'
      border='2px solid'
      borderColor='primaryAlpha.500'
      maxW='120px'
    >
      <HStack>
        <LinkIcon color='primaryAlpha.500' />
        <Text overflow='hidden' textOverflow='ellipsis' isTruncated>
          {currentUser.username}
        </Text>
      </HStack>
    </Box>
  ) : (
    <Box maxW='120px'>
      <Button variant={'solid'} onClick={() => connectWallet()} {...props}>
        Connect
      </Button>
    </Box>
  );
};
