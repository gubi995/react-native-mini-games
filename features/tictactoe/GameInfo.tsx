import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTicTacToeStore } from './useTicTacToe';
import { selectIsXPlayerActive } from './selectors';

const GameInfo = () => {
  const store = useTicTacToeStore();

  const createInfo = () => {
    const { winner, isDraw, players } = store;
    const [xPlayer, oPlayer] = players;

    if (winner) {
      return `${winner === 'X' ? xPlayer.name : oPlayer.name} won the game`;
    }

    if (isDraw) {
      return 'Draw';
    }

    return `${selectIsXPlayerActive(store) ? xPlayer.name : oPlayer.name} pick`;
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
    flexGrow: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 26,
  },
});
