import { useContext } from 'react';

import TicTacToeContext from './TicTacToeContext';

const useTicTacToe = () => {
  const { state, dispatch } = useContext(TicTacToeContext);
  const isContextProvided = Object.keys(state).length > 0;

  if (!isContextProvided) {
    throw new Error('TicTacToe Context is not provided');
  }

  return { state, dispatch };
};

export default useTicTacToe;
