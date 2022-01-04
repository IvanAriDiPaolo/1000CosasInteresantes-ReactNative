import React, { useEffect, useState } from 'react'

import LoginScreen from '../screens/Auth/LoginScreen';
import SignInStack from './SignInStack';
import { StyleSheet } from 'react-native'
import TabStack from './TabStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function MenuStack() {

    const MainStack = createNativeStackNavigator();

    // const {isSignedIn} = useSelector( state => state.auth );

    const { logged } = useSelector(state => state.auth);
    const { invitado } = useSelector(state => state.auth);

    return (
        <MainStack.Navigator>
            {
                logged
                    ? <MainStack.Screen options={{ headerStyle: { backgroundColor: '#2f558a' }, headerShown: false }} name='TabStack' component={TabStack} />
                    : invitado
                        ? <MainStack.Screen options={{ headerStyle: { backgroundColor: '#2f558a' }, headerShown: false }} name='TabStack' component={TabStack} />
                        : <MainStack.Screen options={{ headerShown: false }} name='SignInStack' component={SignInStack} />
            }
        </MainStack.Navigator>
    )
}

const styles = StyleSheet.create({})
