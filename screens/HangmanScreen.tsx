import React from 'react';

import { HangmanProvider } from '../features/hangman/useHangMan';
import Hangman from '../features/hangman/Hangman';

const HangmanScreen = () => {
  return (
    <HangmanProvider>
      <Hangman />
    </HangmanProvider>
  );
};

export default HangmanScreen;
