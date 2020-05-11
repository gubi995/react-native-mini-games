import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, useWindowDimensions } from 'react-native';

interface Props {
  text: string;
  disabled: boolean;
  onPress: () => void;
}

const Tile: React.FC<Props> = ({ text, disabled, onPress }) => {
  const { width } = useWindowDimensions();
  const tileSize = width / 3 - 15;

  return (
    <TouchableNativeFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.tile, { width: tileSize, height: tileSize }]}>
        <Text style={styles.tileText}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Tile;

const styles = StyleSheet.create({
  tile: {
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  tileText: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});
