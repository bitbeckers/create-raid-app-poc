import React from 'react';
import './logo.scss';

import { ReactComponent as LogoSource } from '../../../assets/swords-large.svg';

export interface LogoProps {
  /**
   * Color of the logo
   */
  fill?: string;
  /**
   * How large should the button be?
   */
  size?: 'tiny' | 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Logo: React.FC<LogoProps> = ({
  fill = 'black',
  size = 'medium',
  ...props
}) => {
  return (
    <LogoSource
      className={['storybook-button', `storybook-logo--${size}`].join(' ')}
      fill={fill}
      {...props}
    />
  );
};
