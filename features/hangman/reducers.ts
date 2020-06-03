import { ActionType, SET_WORD_TO_GUESS, GUESS } from './actions';

export interface State {
  wordToGuess: string;
  wrongAttempts: string[];
  rightAttempts: string[];
  players: { name: string; win: number; isActive: boolean }[];
}

export const initialState: State = {
  wordToGuess: '',
  wrongAttempts: [],
  rightAttempts: [],
  players: [
    { name: 'X Player', win: 0, isActive: true },
    { name: 'O Player', win: 0, isActive: false },
  ],
};

export const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case SET_WORD_TO_GUESS: {
      return { ...state, wordToGuess: action.word };
    }
    case GUESS: {
      const { wordToGuess, wrongAttempts, rightAttempts } = state;
      const newWrongAttempt = [...wrongAttempts];
      const newRightAttempt = [...rightAttempts];
      const letter = action.letter;

      if (wordToGuess.includes(letter)) {
        newRightAttempt.push(letter);
      } else {
        newWrongAttempt.push(letter);
      }

      return { ...state, wrongAttempts: newWrongAttempt, rightAttempts: newRightAttempt };
    }
    default: {
      return state;
    }
  }
};
