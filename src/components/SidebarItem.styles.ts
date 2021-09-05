import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Indicator = styled.div`
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  height: 100%;
  width: 100%;
`;

export const Container = styled(NavLink)`
  align-items: center;
  display: grid;
  grid-template-columns: 0.25rem 1fr 0.25rem;
  color: ${({ theme }) => theme.colors.trench30};
  height: 4.125rem;
  justify-items: center;
  transition: opacity 0.5s linear;
  width: 100%;

  &.active {
    color: ${({ theme }) => theme.colors.trench100};

    ${Indicator} {
      background-color: currentColor;
    }
  }

  :hover {
    opacity: 0.8;
  }

  svg {
    height: 1.125rem;
  }
`;
