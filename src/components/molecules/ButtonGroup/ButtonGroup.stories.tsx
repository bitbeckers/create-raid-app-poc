import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArgsTable } from '@storybook/addon-docs/blocks';

import { ButtonGroup, ButtonGroupProps } from '.';

export default {
  title: 'Components/Molecules/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    defaultSelected: { control: 'number' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const Two = Template.bind({});
Two.args = {
  buttons: ['Wrap', 'Unwrap'],
};

export const Three = Template.bind({});
Three.args = {
  buttons: ['Tic', 'Tac', 'Toe'],
};
