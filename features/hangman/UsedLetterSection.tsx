import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useHangmanStore } from './useHangMan';

const UsedLetterSection = () => {
  const { wrongAttempts } = useHangmanStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missed</Text>
      <Text style={styles.missedLetters}>{wrongAttempts.join(', ')}</Text>
    </View>
  );
};

export default UsedLetterSection;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  missedLetters: { fontSize: 20, fontWeight: 'bold' },
});
