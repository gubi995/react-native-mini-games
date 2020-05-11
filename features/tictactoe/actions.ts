export const SET_BOARD = 'SET_BOARD';
export const NEXT_TURN = 'NEXT_TURN';
export const NEW_GAME = 'NEW_GAME';
export const REMATCH = 'REMATCH';

interface SetBoardAction {
  type: typeof SET_BOARD;
  board: string[];
}

interface NextTurnAction {
  type: typeof NEXT_TURN;
}

interface NewGameAction {
  type: typeof NEW_GAME;
}

interface RematchAction {
  type: typeof REMATCH;
}

export type ActionType = SetBoardAction | NextTurnAction | NewGameAction | RematchAction;

export const setBoard = (board: string[]): SetBoardAction => ({
  type: SET_BOARD,
  board,
});

export const nextTurn = (): NextTurnAction => ({ type: NEXT_TURN });

export const newGame = (): NewGameAction => ({ type: NEW_GAME });

export const rematch = (): RematchAction => ({ type: REMATCH });
