import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primaryAlpha: {
      100: '#ff3864',
    },
  },
  fonts: {
    heading: 'Uncial Antiqua',
    body: 'Open Sans',
    mono: 'Inconsolata',
  },
  components: {
    // core components
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        color: 'white',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'body',
        color: 'white',
      },
    },
  },
});
