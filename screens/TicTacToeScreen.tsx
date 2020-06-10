import React from 'react';

import { TicTacToeProvider } from '../features/tictactoe/useTicTacToe';
import TicTacToe from '../features/tictactoe/TicTacToe';

const TicTacToeScreen = () => {
  return (
    <TicTacToeProvider>
      <TicTacToe />
    </TicTacToeProvider>
  );
};

export default TicTacToeScreen;
