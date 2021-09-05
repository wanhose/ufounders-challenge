import styled from 'styled-components';
import { ReactComponent as DefaultTicketIcon } from 'assets/icons/ticket.svg';
import { ReactComponent as DefaultMenuIcon } from 'assets/icons/menu-dots.svg';

type TicketIconProps = {
  $isPresent: boolean;
};

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-self: end;
  margin: 0;
  padding: 0;
  transition: opacity 0.5s linear;

  :focus,
  :hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.trench100};
  display: grid;
  gap: 2rem;
  grid-template-columns: 2rem 12.5rem 0.125rem 15rem 0.125rem 12.5rem 1fr;
  padding: 1.5rem;
  width: 100%;

  :not(:last-child) {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.trench20};
  }
`;

export const Header = styled.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: ${({ theme }) => theme.weights.medium};
  line-height: 1rem;
`;

export const MenuIcon = styled(DefaultMenuIcon)`
  height: 1.5rem;
`;

export const Separator = styled.hr`
  background-color: ${({ theme }) => theme.colors.trench20};
  border: none;
  height: 100%;
  width: 0.0625rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.trench50};
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.25rem;
`;

export const TicketIcon = styled(DefaultTicketIcon)<TicketIconProps>`
  color: ${({ $isPresent, theme }) => theme.colors[$isPresent ? 'secondaryGreen' : 'ufounders100']};
  height: 2rem;
`;

export const Title = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weights.bold};
  line-height: 1.1875rem;
`;
