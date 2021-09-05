import { InputHTMLAttributes, memo } from 'react';
import { Component, Error, Label } from './Input.styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errorMessage?: string;
  label: string;
};

const Input = ({ className, error, errorMessage, id, label, name, ...props }: Props) => (
  <div className={className}>
    <Label as="label" htmlFor={id || name}>
      {label}
    </Label>
    <Component $error={error} id={id || name} name={name} {...props} />
    <Error>{error ? errorMessage : null}</Error>
  </div>
);

export default memo(Input);

export type InputProps = Props;
