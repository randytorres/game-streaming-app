import React from 'react'
import { ScrollView, Text, ImageBackground } from 'react-native'
import tailwind from 'tailwind-rn'

interface HomeProps {
}

export const Home: React.FC<HomeProps> = (props) => {
  return (
    <ScrollView contentContainerStyle={tailwind('flex-1 bg-white')}>
      <ImageBackground
        source={{ uri: 'https://ui8-unity-gaming.herokuapp.com/img/main-pic-1.png' }}
        style={tailwind('flex-1')}
      />
    </ScrollView>
  )
}

Home.defaultProps = {
  user: {
    id: '123'
  }
}
