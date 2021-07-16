import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArgsTable } from '@storybook/addon-docs/blocks';

import { ButtonChakra, ButtonChakraProps } from '.';

export default {
  title: 'Components/Atoms/ButtonChakra',
  component: ButtonChakra,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonChakraProps> = (args) => <ButtonChakra {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
