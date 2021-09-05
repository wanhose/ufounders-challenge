import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

const TestProvider = ({ children }: any) => (
  <Router>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Router>
);

const customRender = (component: ReactElement, options?: RenderOptions) =>
  render(component, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
