export const SET_WORD_TO_GUESS = 'SET_WORD_TO_GUESS';
export const GUESS = 'GUESS';

interface SetWordToGuessAction {
  type: typeof SET_WORD_TO_GUESS;
  word: string;
}

interface GuessAction {
  type: typeof GUESS;
  letter: string;
}

export type ActionType = SetWordToGuessAction | GuessAction;

export const setWordToGuess = (word: string): SetWordToGuessAction => ({ type: SET_WORD_TO_GUESS, word });

export const guess = (letter: string): GuessAction => ({ type: GUESS, letter });
