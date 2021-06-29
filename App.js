/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type { Node } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory, createSwitchNavigator } from '@react-navigation/compat';

import HomePage from './Pages/HomePage';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Button,
  View,
} from 'react-native';


import Page1 from './Pages/Page1';

import CreatePostScreen from './Pages/CreatePostScreen';
import TabPages from './Pages/Tabs/TabPage';
import TopTabPage from './Pages/Tabs/TopTabPage';


const AuthContext = React.createContext();

const Stack = createStackNavigator();

function SplashScreen() {

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function LoginPage() {

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
    </View>
  );
}


function App() {

  const [state, dispatch] = React.useReducer(

    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );




  return (

    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen name="Login" component={LoginPage}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            // <HomeNav />
            //<Stack.Screen name="HomePage" component={HomePage} options={{ title: "Home View" }} />
            <>
              <Stack.Screen name="HomePage" component={HomePage} options={{ title: "Home View" }} />
              <Stack.Screen name="Page1" component={Page1} />
              <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
              <Stack.Screen name="TabPages" component={TabPages} />
              <Stack.Screen name="TopTabPage" component={TopTabPage} />
            </>
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );


  // return (

  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="HomePage" component={HomePage} options={{ title: "Home View" }} />
  //       <Stack.Screen name="Page1" component={Page1} />
  //       <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
  //       <Stack.Screen name="TabPages" component={TabPages} />
  //       <Stack.Screen name="TopTabPage" component={TopTabPage} />
  //     </Stack.Navigator>
  //   </NavigationContainer>

  // );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

function HomeNav() {
  return (
    <>
      <Stack.Screen name="HomePage" component={HomePage} options={{ title: "Home View" }} />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
      <Stack.Screen name="TabPages" component={TabPages} />
      <Stack.Screen name="TopTabPage" component={TopTabPage} />
    </>
  );
}

export default App;
