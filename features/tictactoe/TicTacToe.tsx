import React from 'react';
import { View } from 'react-native';

import { TicTacToeProvider } from './useTicTacToe';
import GameStatus from './GameStatus';
import Board from './Board';
import GameInfo from './GameInfo';
import GamePopup from './GamePopup';
import NewGame from './NewGame';

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
        <GameStatus />
        <GamePopup />
      </View>
    </TicTacToeProvider>
  );
};

export default TicTacToe;
