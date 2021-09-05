import { Container, List, Logo } from './Sidebar.styles';
import ListItem from './SidebarItem';
import { ReactComponent as AppsIcon } from 'assets/icons/apps.svg';
import { ReactComponent as DiplomaIcon } from 'assets/icons/diploma.svg';
import { ReactComponent as GraduationCapIcon } from 'assets/icons/graduation-cap.svg';
import { ReactComponent as InterrogationIcon } from 'assets/icons/interrogation.svg';
import { ReactComponent as MoneyIcon } from 'assets/icons/money.svg';
import { ReactComponent as StatsIcon } from 'assets/icons/stats.svg';

const Sidebar = () => (
  <Container>
    <Logo />
    <List>
      <ListItem href="/">
        <AppsIcon />
      </ListItem>
      <ListItem href="/education">
        <GraduationCapIcon />
      </ListItem>
      <ListItem href="/grades">
        <DiplomaIcon />
      </ListItem>
      <ListItem href="/stats">
        <StatsIcon />
      </ListItem>
      <ListItem href="/billing">
        <MoneyIcon />
      </ListItem>
      <ListItem href="/help">
        <InterrogationIcon />
      </ListItem>
    </List>
  </Container>
);

export default Sidebar;
