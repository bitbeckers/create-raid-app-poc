import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArgsTable } from '@storybook/addon-docs/blocks';

import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: { options: ['solid', 'outline'], control: { type: 'radio' } },
    size: { options: ['xs', 'sm', 'md', 'lg'], control: { type: 'radio' } },
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  label: 'Button',
};
