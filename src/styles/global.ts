import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset}

  body {
    background-color: ${({ theme }) => theme.colors.trenchWhite};
    color: ${({ theme }) => theme.colors.trench100};
    font-family: ${({ theme }) => theme.fonts.inter}, Arial, Helvetica, sans-serif;
  }

  body * {
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
  }

  *[hidden] {
    display: none !important;
  }
`;
