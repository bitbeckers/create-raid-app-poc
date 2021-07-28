import React from 'react';

import { Formik, Form } from 'formik';
import { useInjectedProvider } from '../../../contexts/injectedProviderContext';
import { useCurrentUser } from '../../../contexts/currentUserContext';
import { useContract } from '../../../contexts/contractContext';
import { ValidAmount } from '../../../utils/validation';
import { Button } from '@chakra-ui/button';
import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Spacer,
  FormLabel,
  Container,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { User } from '../../../types';
import { TokenInfo } from '../TokenInfo';

export interface WithdrawFormProps {
  /**
   * Provide the address of the connected user
   */
  children?: any;
}

interface Values {
  amount: string;
}

/**
 * Interface for depositing ETH and receiving wETH
 */
export const WithdrawForm: React.FC<WithdrawFormProps> = () => {
  const { web3Modal } = useInjectedProvider();
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { contract } = useContract();

  const onFormSubmit = async (values: Values) => {
    const weiValue = web3Modal.web3.utils.toWei('' + values.amount);
    if (currentUser && contract) {
      await contract.methods
        .withdraw()
        .send({ value: weiValue, from: currentUser?.username });

      //TODO updating balances and typing
      const updatedUser: User = {
        ...currentUser,
        ...{
          wethBalance: (+currentUser.wethBalance - +values.amount).toString(),
          ethBalance: (+currentUser.ethBalance + +values.amount).toString(),
        },
      };

      setCurrentUser(updatedUser);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{
          amount: '',
        }}
        validationSchema={ValidAmount}
        onSubmit={async (values: Values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          try {
            onFormSubmit(values);
          } catch (err) {
            console.log(err);
          } finally {
            setSubmitting(false);
            resetForm();
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl id='withdrawForm' isRequired>
              <HStack>
                <FormLabel>{currentUser?.network?.chain}</FormLabel>
                <Spacer />
                <TokenInfo deposit={false} />
              </HStack>
              <InputGroup marginBottom='5px'>
                <NumberInput variant='filled' width='80%'>
                  <NumberInputField
                    precision={4}
                    name='amount'
                    placeholder='Amount to unwrap'
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <InputRightAddon width='20%'>
                  <Button
                    variant='solid'
                    onClick={() => {
                      if (currentUser?.wethBalance) {
                        setFieldValue(
                          'amount',
                          (+currentUser?.wethBalance).toPrecision(4),
                        );
                      }
                    }}
                  >
                    Set Max
                  </Button>
                </InputRightAddon>
              </InputGroup>

              {touched.amount && errors.amount ? (
                <div className='error-message'>{errors.amount}</div>
              ) : null}
            </FormControl>
            <Button
              variant='solid'
              type='submit'
              size='lg'
              block
              disabled={isSubmitting}
              width='100%'
            >
              {isSubmitting ? 'Loading…' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
