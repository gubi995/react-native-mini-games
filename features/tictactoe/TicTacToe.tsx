import React from 'react';
import { View } from 'react-native';

import { TicTacToeProvider } from './useTicTacToe';
import Board from './Board';
import GameInfo from './GameInfo';
import NewGame from './NewGame';
import TicTacToeGamePopup from './TicTacToeGamePopup';

const TicTacToe = () => {
  return (
    <TicTacToeProvider>
      <View
        style={{
          flex: 1,
        }}
      >
        <NewGame />
        <GameInfo />
        <Board />
        <TicTacToeGamePopup />
      </View>
    </TicTacToeProvider>
  );
};

export default TicTacToe;
