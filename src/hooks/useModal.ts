import { ModalType, useModalContext } from 'contexts/ModalContext';
import { useCallback } from 'react';

const useModal = (type: ModalType) => {
  const { dispatch, state } = useModalContext();
  const data = { userId: state.userId };
  const isOpen = state.type === type;

  const close = useCallback(() => dispatch({ type: 'CLOSE' }), [dispatch]);

  const open = useCallback(
    ({ userId }: { userId: string }) => dispatch({ state: { userId, type }, type: 'OPEN' }),
    [dispatch, type],
  );

  return {
    close,
    data,
    isOpen,
    open,
  };
};

export default useModal;
