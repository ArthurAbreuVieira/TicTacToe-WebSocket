import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lobby from '../pages/Lobby';
import Difficult from '../pages/Difficult';
import Board from '../pages/Board';

export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lobby">
        <Stack.Screen 
          name="Lobby"
          component={Lobby}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Difficult"
          component={Difficult}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Board"
          component={Board}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}