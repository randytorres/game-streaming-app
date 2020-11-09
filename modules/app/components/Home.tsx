import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

import { User } from '../../global'
import { HomeScreenNavigationProp } from '../types'
import { Header } from './Header'

interface HomeProps {
  user: User
  navigation: HomeScreenNavigationProp;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { navigation, user } = props

  return (
    <View style={tailwind('flex-1 bg-white')}>
      <Header userId={user?.id} navigation={navigation} />
      <Text>TEST</Text>
    </View>
  )
}

Home.defaultProps = {
  user: {
    id: '123'
  }
}
