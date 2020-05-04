import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Icon, Divider } from 'react-native-elements';

const Banner = () => (
  <View style={styles.banner}>
    <Icon reverse name="logo-game-controller-a" type="ionicon" size={100} />
    <Text style={styles.bannerText}>Play together</Text>
  </View>
);

const DividerDecoration = () => {
  const colors = ['yellow', 'orange', 'red', 'crimson', 'purple', 'blue'];

  return (
    <View style={{ flexBasis: '10%' }}>
      {colors.map((color) => (
        <Divider style={{ backgroundColor: color, flexGrow: 1 }} />
      ))}
    </View>
  );
};

const ButtonContainer = () => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight onPress={() => {}} activeOpacity={0.9} underlayColor="#fff">
      <Icon reverse raised name="md-play" type="ionicon" color="crimson" size={40} />
    </TouchableHighlight>
  </View>
);

const Home = () => {
  return (
    <View>
      <Banner />
      <DividerDecoration />
      <ButtonContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '55%',
    marginTop: 25,
  },
  bannerText: {
    color: 'white',
    fontSize: 30,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '35%',
  },
});

export default Home;
