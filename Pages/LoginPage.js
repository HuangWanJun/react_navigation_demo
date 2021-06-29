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
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from './HomePage';
import Page1 from './Page1';
import { TextInput } from 'react-native-gesture-handler';

const AuthContext = React.createContext();

export default function LoginPage1() {

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
            <Button title={'login'}
                onPress={() => signIn({ username, password })} ></Button>
        </View>
    );
}