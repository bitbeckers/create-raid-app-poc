import { Center } from '@chakra-ui/react';
import React from 'react';
export interface SidePanelProps {
  /**
   * Objects to render in pabel
   */
  children?: any;
  props?: 'left' | 'right';
}

/**
 * Primary UI component for user interaction
 */
export const SidePanel: React.FC<SidePanelProps> = ({ children, props }) => {
  return (
    <Center top='50%' pointer-events='none' z-index='0' {...props}>
      {children}
    </Center>
  );
};