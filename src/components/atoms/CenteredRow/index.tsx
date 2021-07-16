import React from 'react';
import './centeredRow.scss';

export interface CenteredRowProps {
  /**
   * Objects to render in row
   */
  children: any;
}

/**
 * Primary UI component for user interaction
 */
export const CenteredRow: React.FC<CenteredRowProps> = ({
  children,
  ...props
}) => {
  return (
    <div className='storybook-centered-row' {...props}>
      {children}
    </div>
  );
};
