import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Open Sans, sans-serif',
  },
  components: {
    Form: {
      baseStyle: {
        requiredIndicator: {
          color: '#9f1f1f',
        },
      },
    },
  },
});

export default theme;
