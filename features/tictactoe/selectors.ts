import { State } from './reducer';

export const selectIsXPlayerActive = (state: State) => {
  const { players } = state;
  const [xPlayer] = players;

  return xPlayer.isActive;
};
