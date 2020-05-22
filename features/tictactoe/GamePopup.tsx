import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { newGame, rematch } from './actions';
import { useTicTacToeDispatch, useTicTacToeStore } from './useTicTacToe';
import GamePopupButton from './GamePopupButton';

const GamePopup = () => {
  const navigation = useNavigation();
  const dispatch = useTicTacToeDispatch();
  const store = useTicTacToeStore();
  const { winner, isDraw } = store;
  const isGameEnded = winner || isDraw;

  return isGameEnded ? (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <GamePopupButton text="Rematch" onPress={() => dispatch(rematch())} />
      <GamePopupButton text="New Game" onPress={() => dispatch(newGame())} />
      <GamePopupButton text="Pick other game" onPress={() => navigation.navigate('Games')} />
    </View>
  ) : (
    <></>
  );
};

export default GamePopup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
