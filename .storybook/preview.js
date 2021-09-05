import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import { MemoryRouter as Router, Route } from 'react-router-dom';

const withRouter = (Story) => (
  <Router>
    <Route component={Story} path="*" />
  </Router>
);

const withThemeProvider = (Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);

export const decorators = [withRouter, withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
