import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import BottomMenu from '../components/BottomMenu/Menu';

const GamesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <ScrollView>
        <Button
          raised
          title="TIC TAC TOE"
          buttonStyle={{ height: 150, backgroundColor: 'crimson' }}
          containerStyle={{ margin: 10 }}
          onPress={() => navigation.navigate('TicTacToe')}
        />
        <Button
          raised
          title="HANGMAN"
          buttonStyle={{ height: 150, backgroundColor: 'crimson' }}
          containerStyle={{ margin: 10 }}
          onPress={() => navigation.navigate('Hangman')}
        />
        <Button
          raised
          title="BATTLESHIP"
          buttonStyle={{ height: 150, backgroundColor: 'crimson' }}
          containerStyle={{ margin: 10 }}
        />
      </ScrollView>

      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default GamesScreen;
