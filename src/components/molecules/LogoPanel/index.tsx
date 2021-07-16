import React from 'react';
import './logoPanel.scss';

export interface LogoPanelProps {
  /**
   * Provide the logo image source
   */
  logoSource: string;
  /**
   * Provide the default selected value
   */
  position?: 'left' | 'right';
  /**
   * How large should the logo be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Container for grouping and wrapping buttons - can be used for toggles
 */
export const LogoPanel: React.FC<LogoPanelProps> = ({
  logoSource,
  position,
  size = 'large',
  ...props
}) => {
  const _position: string = location ? `storybook-logo-panel--${position}` : '';

  return (
    <div
      className={[
        'storybook-logo-panel',
        `storybook-logo-panel--${size}`,
        _position,
      ].join(' ')}
      {...props}
    >
      <img alt='This should be a logo' src={logoSource} />
    </div>
  );
};
