import React, { useReducer, Dispatch } from 'react';

import { useProvidedContext } from '../../shared/useProvidedContext';
import { State, reducer, initialState } from './reducers';
import { ActionType } from './actions';

const storeContext = React.createContext({} as State);
const dispatchContext = React.createContext({} as Dispatch<ActionType>);

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const HangmanProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
    </storeContext.Provider>
  );
};

export const useHangmanStore = () => useProvidedContext(storeContext);

export const useHangmanDispatch = () => useProvidedContext(dispatchContext);
