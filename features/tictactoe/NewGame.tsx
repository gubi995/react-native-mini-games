import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { useTicTacToeDispatch } from './useTicTacToe';
import { newGame } from './actions';

const NewGame = () => {
  const dispatch = useTicTacToeDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(newGame());
    }, [])
  );

  return null;
};

export default NewGame;
