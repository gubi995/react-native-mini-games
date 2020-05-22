import React, { useContext, useReducer, Dispatch } from 'react';

import { reducer, initialState, State } from './reducer';
import { ActionType } from './actions';

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

const useProvidedContext = <T extends unknown>(context: React.Context<T>) => {
  const contextValue = useContext<T>(context);
  const isContextProvided = Object.keys(context).length > 0;

  if (!isContextProvided) {
    throw new Error(`${context.displayName} is not provided`);
  }

  return contextValue;
};

export const useTicTacToeStore = () => useProvidedContext(storeContext);

export const useTicTacToeDispatch = () => useProvidedContext(dispatchContext);
