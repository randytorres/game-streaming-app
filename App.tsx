import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppContainer, navigationRef } from './modules'

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppContainer />
    </NavigationContainer>
  );
}
