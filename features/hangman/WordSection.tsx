import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';

import { useHangmanDispatch, useHangmanStore } from './useHangMan';
import { setWordToGuess } from './actions';

const WIDE_SPACE = '   ';

const WordSection = () => {
  const dispatch = useHangmanDispatch();
  const { wordToGuess, rightAttempts } = useHangmanStore();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Word</Text>
      {wordToGuess ? (
        <View style={{ flexDirection: 'row' }}>
          {wordToGuess.split('').map((letter, index) => (
            <Text
              key={index}
              style={{ fontSize: 20, borderBottomColor: '#ccc', borderBottomWidth: 3, marginHorizontal: 5 }}
            >
              {rightAttempts.includes(letter) ? letter : WIDE_SPACE}
            </Text>
          ))}
        </View>
      ) : (
        <Input
          placeholder="Word to guess"
          onSubmitEditing={(event) => dispatch(setWordToGuess(event.nativeEvent.text.toUpperCase()))}
        />
      )}
    </View>
  );
};

export default WordSection;

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  text: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
});
