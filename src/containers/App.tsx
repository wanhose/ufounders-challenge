import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Routes from './Routes';
import GlobalStyle from 'styles/global';
import { QueryClientProvider } from 'react-query';
import client from 'data/client';
import Modals from './Modals';
import { ModalProvider } from 'contexts/ModalContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from 'contexts/UserContext';

const App = () => (
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalProvider>
        <Router>
          <UserProvider>
            <Routes />
          </UserProvider>
        </Router>
        <Modals />
      </ModalProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
