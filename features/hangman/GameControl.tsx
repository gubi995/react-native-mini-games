import React from 'react';
import { StyleSheet, View } from 'react-native';

import WordSection from './WordSection';
import UsedLetterSection from './UsedLetterSection';
import TipSection from './TipSection';

const GameControl = () => {
  return (
    <View style={styles.container}>
      <WordSection />
      <UsedLetterSection />
      <TipSection />
    </View>
  );
};

export default GameControl;

const styles = StyleSheet.create({
  container: { flex: 1, flexBasis: '60%', justifyContent: 'space-between' },
});
