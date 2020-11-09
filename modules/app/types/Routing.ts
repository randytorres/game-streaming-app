import { DrawerNavigationProp } from '@react-navigation/drawer'

export type RootDrawerParamList = {
  Home: undefined
}

export type HomeScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
>;
