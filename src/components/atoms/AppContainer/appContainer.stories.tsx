import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AppContainer, AppContainerProps } from '.';

export default {
  title: 'Components/Atoms/AppContainer',
  component: AppContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<AppContainerProps> = (args) => <AppContainer {...args} />;

export const Light = Template.bind({});
Light.args = {
  backgroundColor: 'white',
};

export const Dark = Template.bind({});
Dark.args = {
  backgroundColor: 'black',
};
