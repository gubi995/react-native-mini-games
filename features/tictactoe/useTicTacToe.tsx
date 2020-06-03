import React, { useReducer, Dispatch } from 'react';

import { reducer, initialState, State } from './reducer';
import { ActionType } from './actions';
import { useProvidedContext } from '../../shared/useProvidedContext';

const storeContext = React.createContext({} as State);
const dispatchContext = React.createContext({} as Dispatch<ActionType>);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const TicTacToeProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
    </storeContext.Provider>
  );
};

export const useTicTacToeStore = () => useProvidedContext(storeContext);

export const useTicTacToeDispatch = () => useProvidedContext(dispatchContext);