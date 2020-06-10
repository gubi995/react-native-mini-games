export const SET_WORD_TO_GUESS = 'SET_WORD_TO_GUESS';
export const GUESS = 'GUESS';
export const CHECK_GAME_STATUS = 'CHECK_GAME_STATUS';
export const NEW_GAME = 'NEW_GAME';
export const REMATCH = 'REMATCH';

interface SetWordToGuessAction {
  type: typeof SET_WORD_TO_GUESS;
  word: string;
}

interface GuessAction {
  type: typeof GUESS;
  letter: string;
}

interface CheckGameStatusAction {
  type: typeof CHECK_GAME_STATUS;
}

interface NewGameAction {
  type: typeof NEW_GAME;
}

interface RematchAction {
  type: typeof REMATCH;
}

export type ActionType = SetWordToGuessAction | GuessAction | CheckGameStatusAction | NewGameAction | RematchAction;

export const setWordToGuess = (word: string): SetWordToGuessAction => ({ type: SET_WORD_TO_GUESS, word });

export const guess = (letter: string): GuessAction => ({ type: GUESS, letter });

export const checkGameStatus = (): CheckGameStatusAction => ({ type: CHECK_GAME_STATUS });

export const newGame = (): NewGameAction => ({ type: NEW_GAME });

export const rematch = (): RematchAction => ({ type: REMATCH });
