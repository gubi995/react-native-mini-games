import React from 'react';
import { StyleSheet, View } from 'react-native';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <View style={styles.container}>
      <MenuItem iconName="md-settings" text="Settings" />
      <MenuItem iconName="md-podium" text="Score board" />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
