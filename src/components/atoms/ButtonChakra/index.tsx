import React from 'react';
// import './button.scss';
import { Button as ChakraButton } from '@chakra-ui/react';

export interface ButtonChakraProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonChakra: React.FC<ButtonChakraProps> = ({
  variant = 'outline',
  label = 'Button',
}) => {
  return (
    <ChakraButton variant={variant} colorScheme='teal'>
      {label}
    </ChakraButton>
  );
};
