import Modal from 'components/Modal';
import useUser from 'hooks/useUser';
import useModal from 'hooks/useModal';
import { Content, Header, Inline, Text, TicketIcon, Title } from './UserDetailsModal.styles';

const useLogic = () => {
  const { close, data, isOpen } = useModal('user-details');
  const { loading, user } = useUser(data.userId ?? '');

  return {
    close,
    isOpen,
    loading,
    user,
  };
};

const UserDetailsModal = () => {
  const { close, isOpen, loading, user } = useLogic();

  return (
    <Modal aria-label="User Details" isOpen={isOpen && !loading} onClose={close}>
      <Content>
        <Inline style={{ gridColumnEnd: 4, gridColumnStart: 1 }}>
          <TicketIcon $isPresent={user?.present} />
          <div>
            <Title>
              {user?.firstName} {user?.lastName}
            </Title>
            <Text>{user?.present ? 'Ha entrado' : 'No ha entrado'}</Text>
          </div>
        </Inline>
        <div>
          <Header>ID</Header>
          <Text>{user?._id}</Text>
        </div>
        <div style={{ gridColumnEnd: 4, gridColumnStart: 2 }}>
          <Header>Nº de ticket</Header>
          <Text>{user?.ticket}</Text>
        </div>
        <div>
          <Header>Fecha de nacimiento</Header>
          <Text>{user?.birthdate}</Text>
        </div>
        <div>
          <Header>Email</Header>
          <Text>{user?.email}</Text>
        </div>
        <div>
          <Header>Teléfono</Header>
          <Text>{user?.phone}</Text>
        </div>
        <div style={{ gridColumnEnd: 4, gridColumnStart: 1 }}>
          <Header>Dirección</Header>
          <Text>{user?.address}</Text>
        </div>
      </Content>
    </Modal>
  );
};

export default UserDetailsModal;
