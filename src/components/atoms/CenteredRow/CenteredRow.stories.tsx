import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArgsTable } from '@storybook/addon-docs/blocks';

import { Button } from '../Button';
import { Text } from '../Text';
import { CenteredRow, CenteredRowProps } from '.';

export default {
  title: 'Components/Atoms/CenteredRow',
  component: CenteredRow,
  argTypes: {
    widht: { control: 'number' },
  },
} as Meta;

const Template: Story<CenteredRowProps> = (args) => <CenteredRow {...args} />;

export const ButtonRow = Template.bind({});
ButtonRow.args = {
  children: <Button label='Button' />,
};

export const TextRow = Template.bind({});
TextRow.args = {
  children: <Text content={'LALALALALALALA'} />,
};
