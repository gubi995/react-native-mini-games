import { State, reducer, initialState } from './reducers';
import { ActionType } from './actions';
import makeStore from '../../shared/makeStore';

const { StoreProvider, useDispatch, useStore } = makeStore<State, ActionType>(reducer, initialState);

export { StoreProvider as HangmanProvider, useDispatch as useHangmanDispatch, useStore as useHangmanStore };
