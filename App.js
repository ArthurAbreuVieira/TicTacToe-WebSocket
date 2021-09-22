import React from 'react';
import { StatusBar } from 'react-native';

import { enableScreens } from 'react-native-screens';
enableScreens(false);

import Router from './src/routes/router.js';

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Router />
    </>
  );
}