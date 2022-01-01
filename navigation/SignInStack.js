import LoginScreen from '../screens/Auth/LoginScreen';
import React from 'react'
import RegisterScreen from '../screens/Auth/RegisterScreen';
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function SignInStack() {

    const SignInStack = createNativeStackNavigator();

    return (
        <SignInStack.Navigator initialRouteName='Login'>
            <SignInStack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
            <SignInStack.Screen options={{ headerShown: false }} name='Register' component={RegisterScreen} />
        </SignInStack.Navigator>
    )
}

const styles = StyleSheet.create({})
