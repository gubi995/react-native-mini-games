import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTicTacToeStore, useTicTacToeDispatch } from './useTicTacToe';
import GamePopup from '../../components/GamePopup';
import { newGame, rematch, ActionType } from './actions';
import InfoButton from '../../components/InfoButton';

const TicTacToeGamePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { winner, isDraw, players, gameStatus } = useTicTacToeStore();
  const dispatch = useTicTacToeDispatch();
  const navigation = useNavigation();
  const [player1, player2] = players;
  const isGameEnded = winner || isDraw;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <InfoButton onPress={() => setShowPopup((prevState) => !prevState)} />,
    });
  }, [navigation]);

  const dispatchAndClosePopup = (action: ActionType) => {
    dispatch(action);
    setShowPopup(false);
  };

  return isGameEnded || showPopup ? (
    <GamePopup
      newGame={() => dispatchAndClosePopup(newGame())}
      rematch={() => dispatchAndClosePopup(rematch())}
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
