import { useUserContext } from 'contexts/UserContext';
import { useCallback } from 'react';

type LoginInput = {
  email: string;
  password: string;
};

const useAuth = () => {
  const { dispatch } = useUserContext();

  const login = useCallback(
    async (input: LoginInput) => {
      const areCredentialsValid = await new Promise<boolean>((resolve) =>
        setTimeout(() => {
          if (input.email === 'unicornio@ufounders.com' && input.password === 'ufounders2021') {
            resolve(true);
          }

          resolve(false);
        }, 2000),
      );

      if (!areCredentialsValid) {
        throw new Error('Wrong credentials');
      }

      dispatch({ type: 'LOG_IN' });
    },
    [dispatch],
  );

  return {
    login,
  };
};

export default useAuth;
