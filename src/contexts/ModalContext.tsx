import { createContext, Dispatch, FC, useContext, useReducer } from 'react';

type ModalContextState = {
  dispatch: Dispatch<ModalReducerAction>;
  state: ModalReducerState;
};

type ModalReducerAction = {
  state?: ModalReducerState;
  type?: 'CLOSE' | 'OPEN';
};

type ModalReducerState = {
  type?: ModalType;
  userId?: string;
};

export type ModalType = 'user-details';

const ModalContext = createContext<ModalContextState>({
  dispatch: () => {},
  state: {},
});

const reducer = (state: ModalReducerState, action: ModalReducerAction) => {
  switch (action.type) {
    case 'CLOSE':
      return {};
    case 'OPEN':
      return action.state ?? {};
    default:
      return state;
  }
};

export const ModalProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return <ModalContext.Provider value={{ dispatch, state }}>{children}</ModalContext.Provider>;
};

export const useModalContext = () => useContext(ModalContext);
