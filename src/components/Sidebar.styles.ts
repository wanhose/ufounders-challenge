import styled from 'styled-components';
import DefaultLogo from 'components/Logo';

export const Container = styled.nav`
  align-items: center;
  display: grid;
  grid-template-rows: 1.75rem 1fr 1.75rem;
  height: 100vh;
  justify-items: center;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  min-width: 4.375rem;
`;

export const List = styled.div`
  width: 100%;
`;

export const Logo = styled(DefaultLogo)`
  height: 1.75rem;
`;
