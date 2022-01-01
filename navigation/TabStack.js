import { StyleSheet, Text, View } from 'react-native'

import BusquedaScreen from '../screens/Tab/BusquedaScreen';
import HomeScreen from '../screens/Tab/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import ServiciosScreen from '../screens/Tab/ServiciosScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function TabStack() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            break;
                        case 'Busqueda':
                            // iconName = focused ? 'ios-list-box' : 'ios-list';
                            iconName = focused
                                ? 'search-circle'
                                : 'search-circle-outline';
                                break;
                                case 'Servicios':
                            iconName = focused
                                ? 'construct'
                                : 'construct-outline'
                            break;
                        // case 'Home':
                        //     break;

                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            {/* {/* <Tab.Screen options={{ tabBarBadge: 'none' }, { headerShown: false }} name='Logreg' component={LoginScreen} /> */}
            <Tab.Screen options={{ headerStyle: { backgroundColor: '#2f558a' } }} name='Home' component={HomeScreen} />
            <Tab.Screen options={{ headerStyle: { backgroundColor: '#2f558a' }, headerShown: false }} name='Busqueda' component={BusquedaScreen} />
            <Tab.Screen options={{ headerStyle: { backgroundColor: '#2f558a' }, headerShown: false }} name='Servicios' component={ServiciosScreen} />
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({})

