import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import BottomMenu from '../components/BottomMenu/Menu';

const Games = () => {
  return (
    <View style={styles.root}>
      <ScrollView>
        <Button
          raised
          title="TIC TAC TOE"
          buttonStyle={{ height: 150, backgroundColor: 'crimson' }}
          containerStyle={{ margin: 10 }}
        />
        <Button
          raised
          title="HANGMAN"
          buttonStyle={{ height: 150, backgroundColor: 'crimson' }}
          containerStyle={{ margin: 10 }}
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

export default Games;
