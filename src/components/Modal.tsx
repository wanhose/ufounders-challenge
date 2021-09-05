import { HTMLAttributes, memo, MouseEvent, useCallback, useEffect, useRef } from 'react';
import { Button, Container, Content, CrossCircleIcon } from './Modal.styles';

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
};

const useLogic = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }, []);

  useEffect(() => {
    ref.current?.focus();
  });

  return {
    handleClick,
    ref,
  };
};

const Modal = ({ children, isOpen, onClose, ...props }: Props) => {
  const { handleClick, ref } = useLogic();

  if (!isOpen) return null;

  return (
    <Container onClick={onClose} ref={ref} tabIndex={0}>
      <Content onClick={handleClick} role="dialog" {...props}>
        <Button onClick={onClose}>
          <CrossCircleIcon />
        </Button>
        {children}
      </Content>
    </Container>
  );
};

export default memo(Modal);

export type ModalProps = Props;
