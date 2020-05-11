import React, { useReducer, useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { reducer, initialState } from './reducer';
import { newGame } from './actions';
import TicTacToeContext from './TicTacToeContext';
import GameStatus from './GameStatus';
import Board from './Board';
import GameInfo from './GameInfo';
import GamePopup from './GamePopup';

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { winner, isDraw } = state;
  const isGameEnded = winner || isDraw;

  useFocusEffect(
    useCallback(() => {
      dispatch(newGame());
    }, [])
  );

  return (
    <TicTacToeContext.Provider value={{ state, dispatch }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <GameInfo />
        <Board />
        <GameStatus />
        {isGameEnded && <GamePopup />}
      </View>
    </TicTacToeContext.Provider>
  );
};

export default TicTacToe;
