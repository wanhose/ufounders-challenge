import queryUsers from 'data/queries/users';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

type Props = {
  chunks?: number;
};

const useUsers = (props?: Props) => {
  const { data, isLoading: loading } = useQuery('users', queryUsers);

  const users = useMemo(
    () => (props?.chunks ? data?.slice(0, props.chunks * 50) : data),
    [data, props],
  );

  return {
    loading,
    users,
  };
};

export default useUsers;
