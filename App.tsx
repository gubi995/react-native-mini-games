import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import GamesScreen from './screens/GamesScreen';
import TicTacToeScreen from './screens/TicTacToeScreen';
import HangmanScreen from './screens/HangmanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Games" component={GamesScreen} options={{ headerLeft: () => null }} />
        <Stack.Screen name="TicTacToe" component={TicTacToeScreen} options={{ headerTitle: 'Tic Tac Toe' }} />
        <Stack.Screen name="Hangman" component={HangmanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
