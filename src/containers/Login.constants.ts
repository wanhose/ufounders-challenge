import * as Yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().label('Email').required().email(),
  password: Yup.string().label('Password').required(),
});

export type Values = typeof initialValues;
