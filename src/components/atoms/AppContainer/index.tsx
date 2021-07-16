import React from 'react';
import './appContainer.scss';

export interface AppContainerProps {
  /**
   * The backgroundcolor for the app
   */
  backgroundColor?: string;
  /**
   * The components to render within the app container
   */
  children?: any;
}

/**
 * Primary UI component for user interaction
 */
export const AppContainer: React.FC<AppContainerProps> = ({
  backgroundColor = 'black',
  children,
  ...props
}) => {
  return (
    <div
      className='storybook-app-container'
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </div>
  );
};
