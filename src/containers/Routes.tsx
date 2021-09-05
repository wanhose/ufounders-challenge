import Layout from 'components/Layout';
import { useUserContext } from 'contexts/UserContext';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Home from './Home';
import Login from './Login';

const useLogic = () => {
  const { state } = useUserContext();
  const loggedIn = state.loggedIn;

  return {
    loggedIn,
  };
};

const Pending = () => {
  const theme = useTheme();

  return (
    <p style={{ fontFamily: theme.fonts.poppins }}>
      Page under construction{' '}
      <span aria-label="Hammer and Wrench" role="img">
        🛠️
      </span>
    </p>
  );
};

const Routes = () => {
  const { loggedIn } = useLogic();

  if (loggedIn) {
    return (
      <Layout>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Pending} exact path="/education" />
          <Route component={Pending} exact path="/grades" />
          <Route component={Pending} exact path="/stats" />
          <Route component={Pending} exact path="/billing" />
          <Route component={Pending} exact path="/help" />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }

  return (
    <Switch>
      <Route component={Login} path="/login" />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Routes;
