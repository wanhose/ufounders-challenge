import { AnchorHTMLAttributes } from 'react';
import { Container, Indicator } from './SidebarItem.styles';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const SidebarItem = ({ children, href }: Props) => (
  <Container exact to={href}>
    <Indicator />
    {children}
  </Container>
);

export default SidebarItem;
