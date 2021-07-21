import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react';

import { Footer, FooterProps } from '.';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';

export default {
  title: 'Components/Molecules/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const WithButton = Template.bind({});
WithButton.args = {
  children: <Button label='Button' />,
};

export const WithButtonAndText = Template.bind({});
WithButtonAndText.args = {
  children: (
    <Fragment>
      <Button label='Button' />
      <Text size='sm' content='This is some text' />
    </Fragment>
  ),
};

export const Empty = Template.bind({});
Empty.args = {};
