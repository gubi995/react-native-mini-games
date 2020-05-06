import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Banner = () => (
  <View style={styles.banner}>
    <Icon reverse name="logo-game-controller-a" type="ionicon" size={90} />
    <Text style={{ color: 'white', fontSize: 30 }}>Mini games!</Text>
    <Text style={{ color: 'white', fontSize: 18 }}>Play together</Text>
  </View>
);

const DividerDecoration = () => {
  const colors = ['yellow', 'orange', 'red', 'crimson', 'purple', 'darkblue'];

  return (
    <View style={{ flexBasis: '10%' }}>
      {colors.map((color) => (
        <Divider key={color} style={{ backgroundColor: color, flexGrow: 1 }} />
      ))}
    </View>
  );
};

const ButtonContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Games')} activeOpacity={0.9}>
        <Icon reverse raised name="md-play" type="ionicon" color="crimson" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor="black" />
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
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '35%',
  },
});

export default Home;
