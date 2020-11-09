import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import tailwind from 'tailwind-rn'

import { Home } from './Home'
import { RootDrawerParamList } from '../types'

const StackNav = createStackNavigator()
const DrawerNav = createDrawerNavigator<RootDrawerParamList>()

interface AppContainerProps {}

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  return (
    <View style={tailwind('flex-1')}>
      <DrawerNav.Navigator
        initialRouteName='Home'
        drawerStyle={{
          width: '100%',
          marginTop: 90.5
        }}
        overlayColor='rgba(0,0,0,0)'
      >
        <DrawerNav.Screen name='Home' component={Home} />
      </DrawerNav.Navigator>
    </View>
  );
}