import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

export default function CreatePostScreen({ navigation, route }) {

    const [postText, setPostText] = React.useState('');

    return <View style={{ flex: 1, backgroundColor: "white", paddingTop: 30, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput multiline placeholder="What's on your mind"
            style={{ height: 200, padding: 10, backgroundColor: 'white' }}
            value={postText}
            onChangeText={setPostText}
        />
        <Button title="Done"
            onPress={() => {
                navigation.navigate({
                    name: 'HomePage',
                    params: { post: postText },
                    merge: true,
                }

                )
            }}
        ></Button>
    </View>
}