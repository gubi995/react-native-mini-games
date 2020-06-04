import React from 'react';

import TicTacToe from './TicTacToe';

import { TicTacToeProvider } from './useTicTacToe';

const TicTacToeWithContext = () => (
  <TicTacToeProvider>
    <TicTacToe />
  </TicTacToeProvider>
);

export default TicTacToeWithContext;
