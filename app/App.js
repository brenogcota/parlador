import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "react-native";


import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from './src/context/authContext';

import Home from './src/screens/home';
import Profile from './src/screens/profile';
import Post from './src/screens/post';
import PostForm from './src/screens/postForm';
import Loading from './src/screens/loading';
import SignIn from './src/screens/auth/signin';
import SignUp from './src/screens/auth/signup';

const Stack = createStackNavigator();


export default function App() {

  const [Signed, setSigned ] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@token');
      setSigned(!!token);
      setLoading(false);
    })();

  }, [])

  const authContext = useMemo(() => ({
    signIn: async () => {
        setSigned(true);
    },
    signOut: async () => {
      setSigned(false);
    }
  }));
  
  return (

    <AuthContext.Provider value={authContext}>
      <StatusBar backgroundColor="#222" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            isLoading && <Stack.Screen name="Loading" component={Loading} />
          }

          { 
          Signed ?  
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="PostForm" component={PostForm} />
              </>
            : 
              <>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
          }
        </Stack.Navigator>
      
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

