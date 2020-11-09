import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppContainer } from './modules'

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}
