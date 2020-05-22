import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTicTacToeStore } from './useTicTacToe';

const GameStatus = () => {
  const store = useTicTacToeStore();
  const { players } = store;
  const [xPlayer, oPlayer] = players;

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.square, { backgroundColor: 'blue' }]} />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.statusText}>Win: {xPlayer.win}</Text>
            <Text style={styles.statusText}>Lose:{xPlayer.lose}</Text>
          </View>
        </View>
        <Text style={[styles.statusText, { marginTop: 5 }]}>{xPlayer.name}</Text>
      </View>

      <View style={[styles.status, { alignItems: 'flex-end' }]}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginHorizontal: 10, alignItems: 'flex-end' }}>
            <Text style={styles.statusText}>Win: {oPlayer.win}</Text>
            <Text style={styles.statusText}>Lose: {oPlayer.lose}</Text>
          </View>

          <View style={[styles.square, { backgroundColor: 'crimson' }]} />
        </View>
        <Text style={[styles.statusText, { marginTop: 5 }]}>{oPlayer.name}</Text>
      </View>
    </View>
  );
};

export default GameStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 0.5,
    alignItems: 'center',
    margin: 15,
  },
  status: {
    flex: 1,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  square: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
