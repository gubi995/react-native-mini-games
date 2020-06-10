import React from 'react';
import { View, StyleSheet } from 'react-native';

import Figure from './Figure';
import GameControl from './GameControl';
import HangmanGamePopup from './HangmanGamePopup';

const Hangman = () => {
  return (
    <>
      <View style={styles.container}>
        <Figure />
        <GameControl />
      </View>
      <HangmanGamePopup />
    </>
  );
};

export default Hangman;

const styles = StyleSheet.create({ container: { flex: 1, marginHorizontal: 10 } });
