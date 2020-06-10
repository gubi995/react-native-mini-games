import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Icon } from 'react-native-elements';

interface Props {
  rematch: () => void;
  newGame: () => void;
  gameInfo: React.ReactNode[] | React.ReactNode;
}

const GamePopup: React.FC<Props> = ({ rematch, newGame, gameInfo }) => {
  const navigation = useNavigation();

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          borderColor: 'black',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
          style={{ marginVertical: 10 }}
        >
          {gameInfo}
        </ScrollView>
        <Button
          containerStyle={{ marginBottom: 10 }}
          type="clear"
          onPress={() => {}}
          TouchableComponent={TouchableOpacity}
          icon={<Icon raised reverse color="crimson" name="ios-arrow-down" type="ionicon" size={20} />}
        />
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
