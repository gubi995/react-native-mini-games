import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { useTicTacToeStore, useTicTacToeDispatch } from './useTicTacToe';
import GamePopup from '../../components/GamePopup';
import { newGame, rematch } from './actions';

const TicTacToeGamePopup = () => {
  const { winner, isDraw } = useTicTacToeStore();
  const dispatch = useTicTacToeDispatch();
  const isGameEnded = winner || isDraw;

  return isGameEnded ? (
    <GamePopup
      newGame={() => dispatch(newGame())}
      rematch={() => dispatch(rematch())}
      gameInfo={
        <>
          <Text style={styles.text}>Status: In progress</Text>
          <Text style={styles.text}>Adrian has 2 win</Text>
          <Text style={styles.text}>Nelli has 3 win</Text>
        </>
      }
    />
  ) : (
    <></>
  );
};

export default TicTacToeGamePopup;

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
});
