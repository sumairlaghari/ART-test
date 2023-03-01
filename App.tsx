import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Galary from './src/screens/galary';
import Connect from './src/screens/connect';
import { Provider } from "react-redux";
import store from './src/store/store';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      
      <NavigationContainer>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <Stack.Navigator initialRouteName={'galary'}>
                <Stack.Screen name='galary' component={Galary} options={{ headerShown: false }}/>
                <Stack.Screen name='connect' component={Connect} options={{ headerShown: false }}/>
                </Stack.Navigator>
      </NavigationContainer>
  
    </Provider>
       
  );
}