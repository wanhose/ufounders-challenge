import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.ufounders100};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.trenchWhite};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  line-height: 1.5rem;
  padding: 0.75rem 1rem;
  transition: background-color linear 0.5s;

  :focus {
    background-color: ${({ theme }) => theme.colors.ufounders120};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.ufounders80};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.ufounders20};
    cursor: not-allowed;
  }
`;

export default Button;
