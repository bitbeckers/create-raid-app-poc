import React, { useEffect } from 'react';

import { Button, Text } from '@chakra-ui/react';
import { useInjectedProvider } from '../../../contexts/injectedProviderContext';
import { useCurrentUser } from '../../../contexts/currentUserContext';
import { useContract } from '../../../contexts/contractContext';

export interface TokenInfoProps {
  /**
   * Provide the address of the connected user
   */
  deposit: boolean;
}

/**
 * Interface component for connecting web3 provider, getting account and displaying address in header
 */
export const TokenInfo: React.FC<TokenInfoProps> = ({ deposit }) => {
  const { web3Modal } = useInjectedProvider();
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { contract } = useContract();

  useEffect(() => {
    if (contract && currentUser && web3Modal?.web3) {
      console.log('web3Modal: ', web3Modal);
      const getInfo = async () => {
        // set wETH balance
        const wethBalanceInWei = await contract?.methods
          .balanceOf(currentUser?.username)
          .call();
        const wethBalance: string = web3Modal.web3.utils
          .fromWei('' + wethBalanceInWei)
          .toString();
        // get Eth Balance
        const ethBalanceInWei: string = await web3Modal.web3.eth
          .getBalance(currentUser?.username)
          .toString();
        const ethBalance = web3Modal.web3.utils.fromWei('' + ethBalanceInWei);

        setCurrentUser({ ...currentUser, ...{ wethBalance, ethBalance } });
      };

      getInfo();
    }

    // eslint-disable-next-line
  }, [contract, currentUser]);

  const forDisplay = (number: string | undefined): string => {
    return number ? (+number).toFixed(4) : 'Fetching ...';
  };

  return deposit ? (
    <Button variant='ghost'>
      <span>{currentUser?.network?.chain}</span> Balance:{' '}
      {forDisplay(currentUser?.ethBalance)}
    </Button>
  ) : (
    <Button variant='ghost'>
      <span>{currentUser?.network?.chain}</span> Balance:{' '}
      {forDisplay(currentUser?.wethBalance)}
    </Button>
  );
};
