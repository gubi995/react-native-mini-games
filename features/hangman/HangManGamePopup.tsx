import React from 'react';
import { StyleSheet, Text } from 'react-native';
import GamePopup from '../../components/GamePopup';
import { useHangmanStore, useHangmanDispatch } from './useHangMan';
import { FINISHED } from '../../shared/constants';
import { newGame, rematch } from './actions';

export default function HangmanGamePopup() {
  const { players, gameStatus } = useHangmanStore();
  const dispatch = useHangmanDispatch();
  const [player1, player2] = players;
  const isGameEnded = gameStatus === FINISHED;

  const getGuesser = () => {
    if (gameStatus === FINISHED) {
      const notActivePlayerName = player1.isActive ? player2.name : player1.name;

      return `${notActivePlayerName} will guess`;
    }

    const activePlayerName = player1.isActive ? player1.name : player2.name;

    return `${activePlayerName} is guessing`;
  };

  return isGameEnded ? (
    <GamePopup
      newGame={() => dispatch(newGame())}
      rematch={() => dispatch(rematch())}
      gameInfo={
        <>
          <Text style={styles.text}>{`Game ${gameStatus}`}</Text>
          <Text style={styles.text}>{getGuesser()}</Text>
          <Text style={styles.text}>{`${player1.name} has ${player1.win} win`}</Text>
          <Text style={styles.text}>{`${player2.name} has ${player2.win} win`}</Text>
        </>
      }
    />
  ) : (
    <></>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
});
