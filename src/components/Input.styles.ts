import styled, { css } from 'styled-components';

type ComponentProps = {
  $error?: boolean;
};

export const Component = styled.input<ComponentProps>`
  background-color: ${({ theme }) => theme.colors.trench05};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.textActive};
  font-size: 1rem;
  line-height: 150%;
  margin-top: 0.5rem;
  outline: unset;
  padding: 1rem;
  transition: opacity linear 0.5s;
  width: 100%;

  ${({ $error }) =>
    $error
      ? css`
          border: 0.0625rem solid ${({ theme }) => theme.colors.ufounders100};
          box-shadow: ${({ theme }) => theme.shadows.glowRed};
        `
      : null}

  :focus,
  :hover {
    opacity: 0.8;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.ufounders100};
  display: block;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1rem;
  margin-top: 0.25rem;
  min-height: 1rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.trench50};
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1rem;
  display: block;
`;
