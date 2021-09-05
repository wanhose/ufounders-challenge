import styled from 'styled-components';
import MaxContent from 'components/MaxContent';
import DefaultInput from 'components/Input';
import DefaultButton from 'components/Button';

export const Button = styled(DefaultButton)`
  margin-top: 2rem;
  width: 100%;
`;

export const Container = styled(MaxContent)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  max-width: 27.5rem;
`;

export const Input = styled(DefaultInput)`
  margin-top: 2rem;
`;
