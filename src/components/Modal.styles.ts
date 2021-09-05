import styled from 'styled-components';
import { ReactComponent as DefaultCloseCircleIcon } from 'assets/icons/cross-circle.svg';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-self: end;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 2rem;
  top: 2rem;
  transition: opacity 0.5s linear;

  :focus,
  :hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: ${({ theme }) => theme.colors.trench100};
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.trenchWhite};
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  width: 40rem;
`;

export const CrossCircleIcon = styled(DefaultCloseCircleIcon)`
  height: 1.5rem;
`;
