import React from 'react';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
import { useEffect } from 'react/cjs/react.production.min';


function HomePage({ navigation, route }) {


    React.useEffect(() => {
        if (route.params?.post) {

        }
    }, [route.params?.post])

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [count, setCount] = React.useState(0);

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'red' }}>

                < Text > Welcome</Text >
                <Text>Count:{count}</Text>

                <Button title={'Change My title'} onPress={() => {
                    navigation.setOptions({ title: "update title" })
                }}></Button>

                <Button title={'go Page1'} onPress={() => {
                    navigation.navigate('Page1', { name: "Dynamic" })
                }}></Button>
                <Button
                    title="Create post"
                    onPress={() => navigation.push('CreatePostScreen')}
                />
                <Text style={{ margin: 10 }}>return Post: {route.params?.post}</Text>

                <Button
                    title="Go go Bottom Tab Page"
                    onPress={() => navigation.push('TabPages')}
                />
                <Button
                    title="Go go Top Tab Page"
                    onPress={() => navigation.push('TopTabPage')}
                />

            </View>
        </SafeAreaView>
    );
}

export default HomePage;