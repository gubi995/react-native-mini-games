import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GamePopup from '../../components/GamePopup';
import InfoButton from '../../components/InfoButton';
import { useHangmanStore, useHangmanDispatch } from './useHangMan';
import { FINISHED } from '../../shared/constants';
import { newGame, rematch, ActionType } from './actions';

const HangmanGamePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { players, gameStatus } = useHangmanStore();
  const dispatch = useHangmanDispatch();
  const navigation = useNavigation();
  const [player1, player2] = players;
  const isGameEnded = gameStatus === FINISHED;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <InfoButton onPress={() => setShowPopup((prevState) => !prevState)} />,
    });
  }, [navigation]);

  const dispatchAndClosePopup = (action: ActionType) => {
    dispatch(action);
    setShowPopup(false);
  };

  const getGuesser = () => {
    if (gameStatus === FINISHED) {
      const notActivePlayerName = player1.isActive ? player2.name : player1.name;

      return `${notActivePlayerName} will guess`;
    }

    const activePlayerName = player1.isActive ? player1.name : player2.name;

    return `${activePlayerName} is guessing`;
  };

  return isGameEnded || showPopup ? (
    <GamePopup
      newGame={() => dispatchAndClosePopup(newGame())}
      rematch={() => dispatchAndClosePopup(rematch())}
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
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
});

export default HangmanGamePopup;
