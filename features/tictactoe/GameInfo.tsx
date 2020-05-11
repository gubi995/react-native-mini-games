import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { selectIsXPlayerActive } from './selectors';
import useTicTacToe from './useTicTacToe';

const GameInfo = () => {
  const { state } = useTicTacToe();

  const createInfo = () => {
    const { winner, isDraw, players } = state;
    const [xPlayer, oPlayer] = players;

    if (winner) {
      return `${winner === 'X' ? xPlayer.name : oPlayer.name} won the game`;
    }

    if (isDraw) {
      return 'Draw';
    }

    return `${selectIsXPlayerActive(state) ? xPlayer.name : oPlayer.name} pick`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>{createInfo()}</Text>
    </View>
  );
};

export default GameInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 26,
  },
});
