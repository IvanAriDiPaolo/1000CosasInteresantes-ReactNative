import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SignInStack from './SignInStack';
import { StyleSheet } from 'react-native'
import TabStack from './TabStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { tomarDb } from '../redux/actions/db';
import { tomarNoticias } from '../redux/actions/noticias';
import { tomarServicios } from '../redux/actions/servicios';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function MenuStack() {


    const MainStack = createNativeStackNavigator();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tomarNoticias())
        dispatch(tomarServicios())
        dispatch(tomarDb())
    }, [])

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
