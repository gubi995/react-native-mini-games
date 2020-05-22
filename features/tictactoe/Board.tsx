import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

import { useTicTacToeStore, useTicTacToeDispatch } from './useTicTacToe';
import { setBoard, nextTurn } from './actions';
import { selectIsXPlayerActive } from './selectors';
import Tile from './Tile';

const Board = () => {
  const { width } = useWindowDimensions();
  const store = useTicTacToeStore();
  const dispatch = useTicTacToeDispatch();
  const { board, winner } = store;

  const isDisabled = (tileText: string) => {
    return Boolean(tileText) || Boolean(winner);
  };

  const handleTilePress = (index: number) => {
    const isTileEmpty = !Boolean(board[index]);

    if (isTileEmpty) {
      board[index] = selectIsXPlayerActive(store) ? 'X' : 'O';
      dispatch(setBoard(board));
      dispatch(nextTurn());
    }
  };

  return (
    <View style={[styles.board, { width, height: width }]}>
      {board.map((tileText, index) => (
        <Tile key={index} text={tileText} disabled={isDisabled(tileText)} onPress={() => handleTilePress(index)} />
      ))}
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
