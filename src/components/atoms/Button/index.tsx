import React from 'react';
// import './button.scss';
import { Button as ChakraButton } from '@chakra-ui/react';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'solid' | 'outline';
  /**
   * How large should the button be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional icon to display in button
   */
  leftIcon?: any;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  label = 'Button',
  ...props
}) => {
  return (
    <ChakraButton
      variant={variant}
      size={size}
      overflow='hidden'
      text-overflow='ellipsis'
      {...props}
    >
      {label}
    </ChakraButton>
  );
};
