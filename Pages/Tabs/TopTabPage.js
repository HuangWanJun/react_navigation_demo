import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabPage1 from './TabPage1';
import TabPage2 from './TabPage2';

const Tab = createMaterialTopTabNavigator();

export default function TopTabPage({ navigation, route }) {


    return (

        <Tab.Navigator initialRouteName="TabPage1" tabBarOptions={{ activeTintColor: '#e91e63', labelStyle: { fontSize: 20 }, tabStyle: { width: 100 }, style: { backgroundColor: 'powderblue' } }}>
            <Tab.Screen name="TabPage1" component={TabPage1} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) =>
                    <Icon name="music" size={26} color={color} />

            }} />
            <Tab.Screen name="TabPage2" component={TabPage2} options={{
                tabBarLabel: 'My',
                tabBarIcon: ({ color, size }) => {
                    return <Icon name="star" size={26} color={color} />;
                }
            }} />
        </Tab.Navigator>

    );

}