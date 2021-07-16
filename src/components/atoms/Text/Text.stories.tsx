import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArgsTable } from '@storybook/addon-docs/blocks';

import { Text, TextProps } from '.';

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const content: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  content,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  content,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  content,
};

export const MaxWords = Template.bind({});
MaxWords.args = {
  size: 'large',
  content,
};
