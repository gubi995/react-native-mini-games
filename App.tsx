import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import GamesScreen from './screens/GamesScreen';
import TicTacToe from './features/tictactoe/TicTacToe';

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
        <Stack.Screen name="Games" component={GamesScreen} />
        <Stack.Screen name="TicTacToe" component={TicTacToe} options={{ headerTitle: 'Tic Tac Toe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
