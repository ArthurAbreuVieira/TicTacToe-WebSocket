import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lobby from '../pages/Lobby';
import Board from '../pages/Board';
import Option from '../pages/Option';

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
          name="Board"
          component={Board}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Option"
          component={Option}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}