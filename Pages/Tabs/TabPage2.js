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

export default function TabPage2({ navigation, route }) {




    return <View style={{ flex: 1, backgroundColor: "white", paddingTop: 30, alignItems: 'center', justifyContent: 'center' }}>

        <Button title={'Go page 2'}
            onPress={() => {
                navigation.navigate('Page1', { name: "come from tab" });
            }}></Button>
        <Text>
            {route?.params?.owner ? `${route.params.owner}'s Profile` : ''}
        </Text>
    </View>
}