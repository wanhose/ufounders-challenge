import Logo from 'components/Logo';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import useAuth from 'hooks/useAuth';
import { useCallback } from 'react';
import { initialValues, validationSchema, Values } from './Login.constants';
import { Button, Container, Input } from './Login.styles';

const useLogic = () => {
  const { login } = useAuth();

  const handleSubmit = useCallback(
    async (values: Values, { setFieldError }: FormikHelpers<Values>) => {
      try {
        await login(values);
      } catch (error) {
        // @ts-ignore
        setFieldError('password', error.message);
      }
    },
    [login],
  );

  return {
    handleSubmit,
  };
};

const Login = () => {
  const { handleSubmit } = useLogic();

  return (
    <Container>
      <Logo variant="isologotype" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {({ errors, isSubmitting, touched }) => (
          <Form>
            <Field
              as={Input}
              disabled={isSubmitting}
              error={errors.email && touched.email}
              errorMessage={errors.email}
              label="Email"
              name="email"
              placeholder="Enter your email..."
            />
            <Field
              as={Input}
              disabled={isSubmitting}
              error={errors.password && touched.password}
              errorMessage={errors.password}
              label="Password"
              name="password"
              placeholder="Enter your password..."
              type="password"
            />
            <Button disabled={isSubmitting} type="submit">
              LOG IN
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
