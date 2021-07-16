import { addDecorator } from '@storybook/react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import React from 'react';

// import {  } from '@chakra-ui/react';

export const Chakra = ({ children }) => (
  <ChakraProvider>
    <CSSReset />

    {children}
  </ChakraProvider>
);

addDecorator((StoryFn) => (
  <Chakra>
    <StoryFn />
  </Chakra>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
