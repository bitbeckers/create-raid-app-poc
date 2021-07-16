import React from 'react';
import './sidePanel.scss';

export interface SidePanelProps {
  /**
   * Objects to render in pabel
   */
  children: any;
  /**
   * Panel position
   */
  position: 'left' | 'right';
}

/**
 * Primary UI component for user interaction
 */
export const SidePanel: React.FC<SidePanelProps> = ({
  position,
  children,
  ...props
}) => {
  const _position = `storybook-side-panel--${position}` || '';
  return (
    <div className={['storybook-side-panel', _position].join(' ')} {...props}>
      {children}
    </div>
  );
};
