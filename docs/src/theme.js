import {createGlobalStyle} from "styled-components";

const colours = {
  green: '#28b76b',
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
  docsNavShadow: grey,
};

export const darkTheme = {
  body: grey,
  color: white,
  boxShadow: white + '44',
  cardBackground: green,
  cardColor: white,
  docsNavShadow: white,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
  }

  .header-banner {
    color: ${white};
    h1, h2, h3, h4, h5, h6 {
      color: ${white};
    }
    background: ${green};
  }

  .card {
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.cardColor};
  }

  .header-icons svg {
    fill: ${({ theme }) => theme.color};
  }

  #docs-nav {
    box-shadow: ${({ theme }) => theme.docsNavShadow};
  }
`
