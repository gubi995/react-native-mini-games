import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useTicTacToe from './useTicTacToe';
import { newGame, rematch } from './actions';
import GamePopupButton from './GamePopupButton';

const GamePopup = () => {
  const navigation = useNavigation();
  const { dispatch } = useTicTacToe();

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <GamePopupButton text="Rematch" onPress={() => dispatch(rematch())} />
      <GamePopupButton text="New Game" onPress={() => dispatch(newGame())} />
      <GamePopupButton text="Pick other game" onPress={() => navigation.navigate('Games')} />
    </View>
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
