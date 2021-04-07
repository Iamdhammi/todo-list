import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './screens/Index';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default function AppNavigation () {
    return (
        <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}