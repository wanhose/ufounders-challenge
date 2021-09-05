import styled from 'styled-components';

export const List = styled.div`
  margin-top: 2.5rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.trench50};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  line-height: 1.5rem;
  margin-top: 0.25rem;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.trench100};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  line-height: 2.25rem;
`;
