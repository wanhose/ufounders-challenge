import useModal from 'hooks/useModal';
import { useCallback } from 'react';
import {
  Button,
  Container,
  Header,
  MenuIcon,
  Separator,
  Text,
  TicketIcon,
  Title,
} from './Card.styles';

type Props = {
  fullName: string;
  id: string;
  isPresent: boolean;
  ticket: number;
};

type LogicProps = {
  id: Props['id'];
};

const useLogic = ({ id }: LogicProps) => {
  const { open } = useModal('user-details');

  const handleOpenModal = useCallback(() => open({ userId: id }), [id, open]);

  return {
    handleOpenModal,
  };
};

const Card = ({ fullName, id, isPresent, ticket }: Props) => {
  const { handleOpenModal } = useLogic({ id });

  return (
    <Container>
      <TicketIcon $isPresent={isPresent} />
      <div>
        <Title>{fullName}</Title>
        <Text>{isPresent ? 'Ha entrado' : 'No ha entrado'}</Text>
      </div>
      <Separator role="separator" />
      <div>
        <Header>ID</Header>
        <Text>{id}</Text>
      </div>
      <Separator />
      <div>
        <Header>Nº de ticket</Header>
        <Text>{ticket}</Text>
      </div>
      <Button aria-label="Details" onClick={handleOpenModal}>
        <MenuIcon />
      </Button>
    </Container>
  );
};

export default Card;

export type CardProps = Props;
