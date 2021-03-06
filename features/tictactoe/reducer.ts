import { cloneDeep } from 'lodash';

import { SET_BOARD, ActionType, NEXT_TURN, NEW_GAME, REMATCH } from './actions';
import { checkWinner, checkDraw } from './utils';
import { IN_PROGRESS, FINISHED } from '../../shared/constants';

export interface State {
  board: string[];
  players: { name: string; win: number; isActive: boolean }[];
  winner: string;
  isDraw: boolean;
  gameStatus: typeof IN_PROGRESS | typeof FINISHED;
}

export const initialState: State = {
  board: new Array(9).fill(''),
  players: [
    { name: 'X Player', win: 0, isActive: true },
    { name: 'O Player', win: 0, isActive: false },
  ],
  winner: '',
  isDraw: false,
  gameStatus: IN_PROGRESS,
};

export const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case SET_BOARD: {
      return {
        ...state,
        board: action.board,
      };
    }
    case NEXT_TURN: {
      let gameStatus = IN_PROGRESS;
      const { board, players } = state;
      const [xPlayer, oPlayer] = players;
      const newXPlayer = { ...xPlayer, isActive: !xPlayer.isActive };
      const newOPlayer = { ...oPlayer, isActive: !oPlayer.isActive };

      const isDraw = checkDraw(board);
      const winner = checkWinner(board);

      if (winner) {
        gameStatus = FINISHED;
        const isXPlayerTheWinner = winner === 'X';

        if (isXPlayerTheWinner) {
          newXPlayer.win++;
        } else {
          newOPlayer.win++;
        }
      }

      return { ...state, gameStatus, players: [newXPlayer, newOPlayer], winner: winner || '', isDraw };
    }

    case NEW_GAME: {
      return cloneDeep(initialState);
    }

    case REMATCH: {
      return { ...state, isDraw: false, winner: '', board: cloneDeep(initialState.board) };
    }

    default: {
      return state;
    }
  }
};
