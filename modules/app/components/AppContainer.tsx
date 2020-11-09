import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import tailwind from 'tailwind-rn'

import { Header } from './Header'
import { Home } from './Home'
import { HomeScreenNavigationProp, RootDrawerParamList } from '../types'
import { User } from '../../global'

const StackNav = createStackNavigator()
const DrawerNav = createDrawerNavigator<RootDrawerParamList>()

interface AppContainerProps {
  user: User
  navigation: HomeScreenNavigationProp;
}

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  const { user } = props
  return (
    <View style={tailwind('flex-1')}>
      <Header userId={user?.id} />
      <DrawerNav.Navigator
        initialRouteName='Home'
        drawerStyle={{
          width: '100%',
        }}
        overlayColor='rgba(0,0,0,0)'
      >
        <DrawerNav.Screen name='Home' component={Home} />
      </DrawerNav.Navigator>
    </View>
  );
}