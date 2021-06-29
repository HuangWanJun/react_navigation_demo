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

export default function TabPage1({ navigation, route }) {

    return <View style={{ flex: 1, backgroundColor: "white", paddingTop: 30, alignItems: 'center', justifyContent: 'center' }}>

        <Button title={'Go page 2 and pass parameter'}
            onPress={() => {
                //navigation.navigate('Page1', { name: "come from tab" });
                navigation.jumpTo('TabPage2', { owner: 'Michaś' })
            }}></Button>

    </View>
}