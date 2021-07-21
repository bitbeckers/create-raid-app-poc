import React, { useState } from 'react';

import { Button } from '../../atoms/Button';
import { ButtonGroup as CButtonGroup } from '@chakra-ui/button';

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
   * Display the buttons as a single entity
   */
  isAttached?: boolean;
  /**
   * How large should the buttons be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

/**
 * Container for grouping and wrapping buttons - can be used for toggles
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  defaultSelected = 0,
  size = 'md',
  isAttached = true,
  ...props
}) => {
  const [selected, setSelected] = useState<number>(defaultSelected);

  const handleSelection = (index: number) => {
    setSelected(index);
  };

  console.log('Buttons: ', buttons);

  return (
    <CButtonGroup isAttached={isAttached}>
      {buttons.map((label: string, i: number) => {
        return (
          <Button
            label={label}
            key={i}
            variant={i === selected ? 'solid' : 'outline'}
            size={size}
            onClick={() => handleSelection(i)}
            {...props}
          />
        );
      })}
    </CButtonGroup>
  );
};
