import { extendTheme } from 'native-base';

const config = {
  useSystemColorMode: true,
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
  orange: {
    50: "#ffc154",
    100: "#ffb22f",
    200: "#ffb22f",
    300: "#fd890d",
    400: "#fd890d",
    500: "#fd890d",
    600: "#ee5f06",
    700: "#ee5f06",
    800: "#ee5f06",
    900: "#d64d1c",
  },
  blue: {
    50: "#00b4d8",
    100: "#0096c7",
    200: "#0096c7",
    300: "#0077b6",
    400: "#0077b6",
    500: "#0077b6",
    600: "#023e8a",
    700: "#023e8a",
    800: "#023e8a",
    900: "#03045e"
  },
  green: {
    50: "#86EFAC",
    100: "#4ADE80",
    200: "#4ADE80",
    300: "#22C55E",
    400: "#22C55E",
    500: "#22C55E",
    600: "#16A34A",
    700: "#16A34A",
    800: "#16A34A",
    900: "#15803D"
  }
};

export default extendTheme({ config, colors });
