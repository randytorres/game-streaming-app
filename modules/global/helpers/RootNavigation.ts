import { DrawerActions } from '@react-navigation/native';
import * as React from 'react';

export const navigationRef = React.createRef();

export function toggleDrawer() {
  navigationRef?.current?.dispatch(DrawerActions.toggleDrawer);
}