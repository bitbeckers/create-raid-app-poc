import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LogoPanel, LogoPanelProps } from '.';
import Container from '../../Container';
import logo from '../../../assets/swords-large.svg';

export default {
  title: 'Components/Molecules/LogoPanel',
  component: LogoPanel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LogoPanelProps> = (args) => (
  <Container>
    <LogoPanel {...args} />
  </Container>
);

export const Left = Template.bind({});
Left.args = {
  position: 'left',
  logoSource: logo,
};

export const Right = Template.bind({});
Right.args = {
  position: 'right',
  logoSource: logo,
};
