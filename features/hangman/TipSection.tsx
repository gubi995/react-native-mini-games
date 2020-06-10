import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { useHangmanStore, useHangmanDispatch } from './useHangMan';
import { guess, checkGameStatus } from './actions';

const TipSection = () => {
  const [tip, setTip] = useState('');
  const [error, setError] = useState('');
  const { wrongAttempts, rightAttempts, wordToGuess } = useHangmanStore();
  const dispatch = useHangmanDispatch();

  const handleTextChange = (text: string) => {
    const letters = text.split('');

    setError('');

    if (letters.length > 0) {
      const lastLetter = letters.pop();

      setTip(lastLetter!.toUpperCase());
    }
  };

  const handelClick = () => {
    const isLetterUsed = wrongAttempts.includes(tip) || rightAttempts.includes(tip);

    if (isLetterUsed) {
      setError('Letter is used already');
    } else {
      dispatch(guess(tip));
      dispatch(checkGameStatus());
      setTip('');
    }
  };

  return (
    <View>
      <Input
        label="Tip"
        inputStyle={{ fontSize: 40 }}
        placeholder="A"
        value={tip}
        onChangeText={handleTextChange}
        errorMessage={error}
      />
      <Button
        raised
        title="Guess"
        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 60 }}
        titleStyle={{ fontSize: 28 }}
        containerStyle={{ marginVertical: 10 }}
        onPress={handelClick}
        disabled={!Boolean(tip) || !Boolean(wordToGuess)}
      />
    </View>
  );
};

export default TipSection;
