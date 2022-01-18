import { StatusBar } from 'expo-status-bar';
import React from 'react';

import MainStack from './src/stacks/mainStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <>
      <StatusBar
        barStyle="light-content"
      />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
}