import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainNavigator from './MainNavigator';

export default createSwitchNavigator({
  Main: MainNavigator,
  // Auth: AuthNavigator,
  // AuthLoading: AuthLoadingScreen,
  // Register : RegisterNavigator
},
  {
    // initialRouteName: 'AuthLoading'
  });