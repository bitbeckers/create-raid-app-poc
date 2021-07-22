import '@fontsource/mirza';
import '@fontsource/uncial-antiqua';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primaryAlpha: {
      // Base colour is at 500
      200: '#ff95ad',
      300: '#ff6788',
      400: '#ff577c',
      500: '#ff3864',
      600: '#ff194c',
      700: '#ff0940',
      800: '#da0030',
    },
  },

  fonts: {
    heading: 'Uncial Antiqua',
    body: 'Mirza',
    mono: 'Inconsolata',
  },

  styles: {
    global: {
      body: {
        color: 'white',
        bg: 'black',
      },
    },
  },

  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primaryAlpha',
        variant: 'solid',
      },
    },

    Input: {
      defaultProps: {
        variant: 'rg',
      },
      parts: ['field'],
      variants: {
        rg: {
          field: {
            color: 'white',
            bg: 'black',
            border: '1px solid',
            borderColor: 'primaryAlpha.500',
            margin: '5px',
          },
        },
      },
    },

    Textarea: {
      defaultProps: {
        variant: 'rg',
      },
      variants: {
        rg: {
          color: 'white',
          bg: 'black',
          border: '1px solid',
          borderColor: 'primaryAlpha.500',
          margin: '5px',
        },
      },
    },

    Modal: {
      parts: ['dialog'],
      baseStyle: {
        dialog: {
          bg: 'black',
          color: 'primary.500',
          border: '1px solid',
          borderColor: 'primary.800',
        },
      },
    },
  },
});
