import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UsedLetterSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missed</Text>
      <Text style={styles.missedLetters}>A, B, C, D, F</Text>
    </View>
  );
};

export default UsedLetterSection;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  missedLetters: { fontSize: 20, fontWeight: 'bold' },
});
