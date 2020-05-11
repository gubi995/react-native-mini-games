import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

const GamePopupButton: React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GamePopupButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'crimson',
    padding: 15,
    borderRadius: 60,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});
