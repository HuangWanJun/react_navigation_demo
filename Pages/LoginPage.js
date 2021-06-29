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
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from './HomePage';
import Page1 from './Page1';
import { TextInput } from 'react-native-gesture-handler';
import { AuthContext } from '../App';

//https://reactnavigation.org/docs/drawer-based-navigation/

function LoginScreen({ navigation }) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);


    return (
        <View>
            <TextInput
                placeholder="userName"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title={'login'} style={{ backgroundColor: 'red' }}
                onPress={() => signIn({ username, password })} ></Button>
            <Button
                onPress={() => navigation.openDrawer()}
                title="Go to notifications"
            />

        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function LoginPage() {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="LoginScreen" component={LoginScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>

    );
}
