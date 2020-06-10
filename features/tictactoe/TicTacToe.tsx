import React from 'react';
import { View } from 'react-native';

import Board from './Board';
import GameInfo from './GameInfo';
import NewGame from './NewGame';
import TicTacToeGamePopup from './TicTacToeGamePopup';

const TicTacToe = () => {
  return (
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
  );
};

export default TicTacToe;
