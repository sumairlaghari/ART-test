import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Galary from '../screens/galary';
import Connect from '../screens/connect';

const Stack = createStackNavigator();

class AppNavigatior extends Component {
    render() {
        return (
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
        );
    }
}

export default AppNavigatior;