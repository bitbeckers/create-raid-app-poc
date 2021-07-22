import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Page, PageProps } from '.';
import * as HeaderStories from '../../components/molecules/Header/Header.stories';

export default {
  title: 'Pages/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
