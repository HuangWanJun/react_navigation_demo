/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import { name as appName } from './app.json';


AppRegistry.registerComponent(appName, () => App);

