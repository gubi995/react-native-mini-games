import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

import { setBoard, nextTurn } from './actions';
import { selectIsXPlayerActive } from './selectors';
import useTicTacToe from './useTicTacToe';
import Tile from './Tile';

const Board = () => {
  const { width } = useWindowDimensions();
  const { state, dispatch } = useTicTacToe();
  const { board, winner } = state;

  const isDisabled = (tileText: string) => {
    return Boolean(tileText) || Boolean(winner);
  };

  const handleTilePress = (index: number) => {
    const isTileEmpty = !Boolean(board[index]);

    if (isTileEmpty) {
      board[index] = selectIsXPlayerActive(state) ? 'X' : 'O';
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
