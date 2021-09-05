import { createContext, Dispatch, FC, useContext, useReducer } from 'react';

type UserContextState = {
  dispatch: Dispatch<UserReducerAction>;
  state: UserReducerState;
};

type UserReducerAction = {
  state?: UserReducerState;
  type?: 'LOG_IN';
};

type UserReducerState = {
  loggedIn: boolean;
};

const initialState = {
  loggedIn: false,
};

const UserContext = createContext<UserContextState>({
  dispatch: () => {},
  state: initialState,
});

const reducer = (state: UserReducerState, action: UserReducerAction) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export const UserProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ dispatch, state }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
