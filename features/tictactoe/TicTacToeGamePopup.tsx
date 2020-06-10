import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { useTicTacToeStore, useTicTacToeDispatch } from './useTicTacToe';
import GamePopup from '../../components/GamePopup';
import { newGame, rematch } from './actions';

const TicTacToeGamePopup = () => {
  const { winner, isDraw, players, gameStatus } = useTicTacToeStore();
  const [player1, player2] = players;
  const dispatch = useTicTacToeDispatch();
  const isGameEnded = winner || isDraw;

  return isGameEnded ? (
    <GamePopup
      newGame={() => dispatch(newGame())}
      rematch={() => dispatch(rematch())}
      gameInfo={
        <>
          <Text style={styles.text}>{`Game ${gameStatus}`}</Text>
          <Text style={styles.text}>{`${player1.name} has ${player1.win} win`}</Text>
          <Text style={styles.text}>{`${player2.name} has ${player2.win} win`}</Text>
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