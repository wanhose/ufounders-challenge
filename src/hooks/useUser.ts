import queryUsers from 'data/queries/users';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

const useUser = (id: string) => {
  const { data, isLoading: loading } = useQuery('users', queryUsers);

  const user = useMemo(() => data?.find((user) => user._id === id), [data, id]);

  return {
    loading,
    user,
  };
};

export default useUser;
