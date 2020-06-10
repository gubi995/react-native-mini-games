import React from 'react';
import { View, StyleSheet } from 'react-native';

import Figure from './Figure';
import GameControl from './GameControl';
import { HangmanProvider } from './useHangMan';
import HangmanGamePopup from './HangmanGamePopup';

const Hangman = () => {
  return (
    <HangmanProvider>
      <View style={styles.container}>
        <Figure />
        <GameControl />
      </View>
      <HangmanGamePopup />
    </HangmanProvider>
  );
};

export default Hangman;

const styles = StyleSheet.create({ container: { flex: 1, marginHorizontal: 10 } });
