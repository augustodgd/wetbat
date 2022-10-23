import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const theme: ThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#EDF0F9',
      },
    },
  },
  colors: {
    teal: {
      500: '#32AEA8',
    },
    blue: {
      600: '#5E6DB0',
    },
  },
});

export default theme;
