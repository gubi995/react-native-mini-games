import { ActionType, SET_WORD_TO_GUESS, GUESS, CHECK_GAME_STATUS, NEW_GAME, REMATCH } from './actions';
import { IN_PROGRESS, FINISHED } from '../../shared/constants';
import { cloneDeep } from 'lodash';

export interface State {
  wordToGuess: string;
  wrongAttempts: string[];
  rightAttempts: string[];
  players: { name: string; win: number; isActive: boolean }[];
  gameStatus: typeof IN_PROGRESS | typeof FINISHED;
}

export const initialState: State = {
  wordToGuess: '',
  wrongAttempts: [],
  rightAttempts: [],
  players: [
    { name: 'X Player', win: 0, isActive: true },
    { name: 'O Player', win: 0, isActive: false },
  ],
  gameStatus: IN_PROGRESS,
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
    case CHECK_GAME_STATUS: {
      const { wordToGuess, wrongAttempts, rightAttempts, players } = state;
      const [player1, player2] = players;
      const newPlayer1 = { ...player1 };
      const newPlayer2 = { ...player2 };

      const isWin = wordToGuess.split('').every((letter) => rightAttempts.includes(letter));
      if (isWin) {
        newPlayer1.win += newPlayer1.isActive ? 1 : 0;
        newPlayer2.win += newPlayer2.isActive ? 1 : 0;
      }

      const isLose = wrongAttempts.length === 6;
      if (isLose) {
        newPlayer1.win += newPlayer1.isActive ? 0 : 1;
        newPlayer2.win += newPlayer2.isActive ? 0 : 1;
      }

      return { ...state, players: [newPlayer1, newPlayer2], gameStatus: isWin || isLose ? FINISHED : IN_PROGRESS };
    }
    case NEW_GAME: {
      return cloneDeep(initialState);
    }

    case REMATCH: {
      const { players } = state;
      const [player1, player2] = players;
      const newPlayer1 = { ...player1 };
      const newPlayer2 = { ...player2 };

      newPlayer1.isActive = !newPlayer1.isActive;
      newPlayer2.isActive = !newPlayer2.isActive;

      return { ...cloneDeep(initialState), players: [newPlayer1, newPlayer2] };
    }

    default: {
      return state;
    }
  }
};
