import { extendTheme } from 'native-base';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
  fontConfig: {
    300: {
      normal: 'Montserrat_300Light',
    },
    500: {
      normal: 'Montserrat_500Medium',
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
};

const colors = {
  primary: {
    50: '#e0b1cb',
    100: '#be95c4',
    200: '#be95c4',
    300: '#9f86c0',
    400: '#9f86c0',
    500: '#9f86c0',
    600: '#5e548e',
    700: '#5e548e',
    800: '#5e548e',
    900: '#231942',
  },
};

export default extendTheme({ config, colors });
