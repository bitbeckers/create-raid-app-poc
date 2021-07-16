import React from 'react';
import './text.scss';

export interface TextProps {
  /**
   * Text content
   */
  content: string;
  /**
   * What background color to use
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for text
 */
export const Text: React.FC<TextProps> = ({
  size = 'medium',
  color,
  content,
  ...props
}) => {
  return (
    <p
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
      style={{ color }}
      {...props}
    >
      {content}
    </p>
  );
};
