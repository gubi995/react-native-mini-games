import React from 'react';
import { View } from 'react-native';

import { useTicTacToeStore, useTicTacToeDispatch } from './useTicTacToe';
import GameStatus from './GameStatus';
import Board from './Board';
import GameInfo from './GameInfo';
import GamePopup from '../../components/GamePopup';
import NewGame from './NewGame';
import { newGame, rematch } from './actions';

const TicTacToe = () => {
  const { winner, isDraw } = useTicTacToeStore();
  const dispatch = useTicTacToeDispatch();
  const isGameEnded = winner || isDraw;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NewGame />
      <GameInfo />
      <Board />
      {isGameEnded && <GamePopup newGame={() => dispatch(newGame())} rematch={() => dispatch(rematch())} />}
    </View>
  );
};

export default TicTacToe;
