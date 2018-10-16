import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: HomeScreen
});



export default createDrawerNavigator({
  Home: {
    /**
     * Determine which stack navigator we are going to use depending on the user mode defined in the env.
     * This means that to switch modes, the env var needs to be changed and RECOMPILE the app from the expo XDE app (or the console)
     * We can later store this in the asyncStorage if we decide that a user can switch modes.
     * 
     * Switching between one stack navigator and the other lets us keep a simple routing, e.g.:
     * this.props.navigation.navigate('main') // navigates to the home screen, either gym or trainer home screen depending on the user mode (only once)
     * instead of:
     * this.props.navigation.navigate(USER_MODE === 'TRAINER' ? 'mainTrainer' : 'mainGym') // route names are different and we have to figure out
     * which one to use according to the user mode (everywhere).
     */
    screen: MainNavigator,
    // navigationOptions: {
    //   drawerLabel: (<NullComponent />)
    // }
  }
});