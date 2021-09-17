import React from 'react';
import { StatusBar } from 'react-native';

import Router from './src/routes/router.js';

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <Router />
    </>
  );
}