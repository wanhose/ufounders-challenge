import styled from 'styled-components';
import MaxContent from './MaxContent';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled(MaxContent)`
  padding-bottom: 5.125rem;
  padding-top: 4.875rem;
  width: 100%;
`;
