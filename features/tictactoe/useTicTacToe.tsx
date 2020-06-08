import { reducer, initialState, State } from './reducer';
import { ActionType } from './actions';
import makeStore from '../../shared/makeStore';

const { StoreProvider, useDispatch, useStore } = makeStore<State, ActionType>(reducer, initialState);

export { StoreProvider as TicTacToeProvider, useDispatch as useTicTacToeDispatch, useStore as useTicTacToeStore };
