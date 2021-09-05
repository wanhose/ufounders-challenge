import { FC } from 'react';
import { Container, Content } from './Layout.styles';
import Sidebar from './Sidebar';

const Layout: FC = ({ children }) => (
  <Container>
    <Sidebar />
    <Content>{children}</Content>
  </Container>
);

export default Layout;
