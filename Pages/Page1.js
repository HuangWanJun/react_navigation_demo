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

export default function Page1({ navigation, route }) {
    const [count, setCount] = React.useState(0);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button onPress={() => setCount(c => c + 1)} title="add Sum" />
            },
        })
    });

    const { name } = route.params;

    return <View style={{ flex: 1, backgroundColor: "white", paddingTop: 30, alignItems: 'center', justifyContent: 'center' }}>
        <Text>my new Title {JSON.stringify(name)}</Text>
        <Button title={'Go page 1'}
            onPress={() => {
                navigation.navigate('Page1');
            }}></Button>
        <Text>{count}</Text>
    </View>
}