import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import home from '../screens/home';
import wait from '../screens/wait';

export default () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="wait" component={wait} />
            <Stack.Screen name="home" component={home} />
        </Stack.Navigator>
    );
}