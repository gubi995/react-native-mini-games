import React, { Dispatch } from 'react';

import { useProvidedContext } from './useProvidedContext';

const makeStore = <StateType, DispatchType>(
  reducer: (state: StateType, action: DispatchType) => StateType,
  initialState: any
) => {
  const storeContext = React.createContext({} as StateType);
  const dispatchContext = React.createContext({} as Dispatch<DispatchType>);

  const StoreProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={state}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  const useDispatch = () => useProvidedContext(dispatchContext);

  const useStore = () => useProvidedContext(storeContext);

  return { StoreProvider, useDispatch, useStore };
};

export default makeStore;
