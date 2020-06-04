import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-elements';

interface Props {
  rematch: () => void;
  newGame: () => void;
}

const GamePopup: React.FC<Props> = ({ rematch, newGame }) => {
  const navigation = useNavigation();

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Status: In progress</Text>
        <Text style={styles.text}>Adrian has 2 win</Text>
        <Text style={styles.text}>Nelli has 3 win</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
        <Button
          title="Rematch"
          buttonStyle={styles.button}
          titleStyle={{ fontSize: 28 }}
          containerStyle={{ marginVertical: 10 }}
          onPress={rematch}
        />
        <Button
          title="New Game"
          buttonStyle={styles.button}
          titleStyle={{ fontSize: 28 }}
          containerStyle={{ marginVertical: 10 }}
          onPress={newGame}
        />
        <Button
          title="Pick other game"
          buttonStyle={styles.button}
          titleStyle={{ fontSize: 28 }}
          containerStyle={{ marginVertical: 10 }}
          onPress={() => navigation.navigate('Games')}
        />
      </View>
    </View>
  );
};

export default GamePopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffed',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
  button: { backgroundColor: 'crimson', borderRadius: 60 },
});
