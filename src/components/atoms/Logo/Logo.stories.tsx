import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArgsTable } from '@storybook/addon-docs/blocks';

import { Logo, LogoProps } from '.';

export default {
  title: 'Components/Atoms/Logo',
  component: Logo,
  argTypes: {
    fill: { control: 'color' },
  },
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Tiny = Template.bind({});
Tiny.args = {
  size: 'tiny',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
