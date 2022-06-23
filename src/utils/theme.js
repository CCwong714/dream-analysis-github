import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'brandBg',
      },
    },
  },
  colors: {
    brandBg: '#1B1A17',
    brandLightBg: 'rgba(65, 63, 66, 0.4)',
    brandYellow: '#F0A500',
    brandText: '#E6D5B8',
    placeholderText: 'rgba(244, 244, 244, 0.5)',
  },
  fontSize: {
    '2xs': '10px'
  }
});

export default theme;

// Breakpoint reference
// sm: '30em',
// md: '48em',
// lg: '62em',
// xl: '80em',
// '2xl': '96em',
