import styled from 'styled-components';
import { ReactComponent as DefaultTicketIcon } from 'assets/icons/ticket.svg';

type TicketIconProps = {
  $isPresent?: boolean;
};

export const Content = styled.div`
  display: grid;
  gap: 3.5rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const Header = styled.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: ${({ theme }) => theme.weights.medium};
  line-height: 1rem;
`;

export const Inline = styled.div`
  align-items: center;
  display: flex;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.trench50};
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.25rem;
  word-break: break-all;
`;

export const TicketIcon = styled(DefaultTicketIcon)<TicketIconProps>`
  color: ${({ $isPresent, theme }) => theme.colors[$isPresent ? 'secondaryGreen' : 'ufounders100']};
  flex-shrink: 0;
  height: 2rem;
  margin-right: 1.75rem;
`;

export const Title = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weights.bold};
  line-height: 1.1875rem;
`;
