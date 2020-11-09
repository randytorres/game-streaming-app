import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AntDesign, Fontisto, Ionicons } from '@expo/vector-icons'
import tailwind from 'tailwind-rn'
import * as Svg from 'react-native-svg'

import { getAvatar, toggleDrawer } from '../../global'
import { HomeScreenNavigationProp } from '../types'

interface HeaderProps {
  userId: string
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { userId } = props
  const avatar = getAvatar(userId)
  return (
    <View style={tailwind('flex flex-row justify-between pl-4 pr-4 pb-6 pt-16 border-b border-gray-400')}>
      <View style={tailwind('flex-1')}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons name='ios-menu' size={25} />
        </TouchableOpacity>
      </View>
      <View style={tailwind('flex-1 justify-between flex-row pl-16')}>
        <AntDesign name='search1' size={25} />
        <Fontisto name='bell' size={25} />
        <Svg.SvgXml xml={avatar} width={25} />
      </View>
    </View>
  )
}
