import Card from 'components/Card';
import useUsers from 'hooks/useUsers';
import { useCallback, useEffect, useState } from 'react';
import { List, Subtitle, Title } from './Home.styles';

const useLogic = () => {
  const [chunks, setChunks] = useState<number>(1);
  const { loading, users } = useUsers({ chunks });

  const handleScroll = useCallback(() => {
    if (document.documentElement.offsetHeight - document.documentElement.scrollTop < 1000) {
      setChunks((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    loading,
    users,
  };
};

const Home = () => {
  const { loading, users } = useLogic();

  return (
    <div>
      <Title>
        Bienvenido de nuevo, unicornio.{' '}
        <span aria-label="Waving Hand" role="img">
          👋
        </span>
      </Title>
      <Subtitle>Estas son las personas que han comprado entrada</Subtitle>
      <List>
        {loading ? (
          <p>Loading...</p>
        ) : (
          users?.map((user) => (
            <Card
              fullName={`${user.firstName} ${user.lastName}`}
              id={user._id}
              isPresent={user.present}
              key={user._id}
              ticket={user.ticket}
            />
          ))
        )}
      </List>
    </div>
  );
};

export default Home;
