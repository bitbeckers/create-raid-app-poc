import React, { useState } from 'react';
import './buttonGroup.scss';

export interface ButtonGroupProps {
  /**
   * Provide the list of buttons
   */
  buttons: string[];
  /**
   * Provide the default selected value
   */
  defaultSelected?: number;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the buttons be?
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Container for grouping and wrapping buttons - can be used for toggles
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  defaultSelected = 0,
  size = 'medium',
  backgroundColor,
  ...props
}) => {
  const [selected, setSelected] = useState<number>(defaultSelected);

  const handleSelection = (index: number) => {
    setSelected(index);
  };

  return (
    <div className='storybook-button-group'>
      {buttons.map((label: string, i: number) => {
        const mode: string =
          i === selected
            ? 'storybook-button--primary'
            : 'storybook-button--secondary';
        return (
          <button
            key={i}
            type='button'
            className={[
              'storybook-button',
              `storybook-button--${size}`,
              mode,
            ].join(' ')}
            style={{ backgroundColor }}
            onClick={() => handleSelection(i)}
            {...props}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
