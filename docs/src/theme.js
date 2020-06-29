import {createGlobalStyle} from "styled-components";

const colours = {
  green: '#40b10c',
  grey: '#1C1C1C',
  white: '#FFFFFF',
  black: '#000000',
  red: '#DA353C'
};

const {green, grey, white, black, red} = colours;

export const lightTheme = {
  body: white,
  color: black,
  boxShadow: grey + '55',
  cardBackground: 'none',
  cardColor: grey,
};

export const darkTheme = {
  body: grey,
  color: white,
  boxShadow: white + '44',
  cardBackground: green,
  cardColor: white,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
  }

  .header {
    color: ${white};
    h1, h2, h3, h4, h5, h6 {
      color: ${white};
    }
    background: ${green};
  }

  .card {
    box-shadow: 1px 2px 2px 2px ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.cardColor};
  }
`
