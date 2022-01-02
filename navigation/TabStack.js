import { Button, StyleSheet, Text, View } from 'react-native'

import BusquedaScreen from '../screens/Tab/BusquedaScreen';
import DocumentosScreen from '../screens/Tab/DocumentosScreen';
import HomeScreen from '../screens/Tab/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import ServiciosScreen from '../screens/Tab/ServiciosScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

export default function TabStack() {

    const Tab = createBottomTabNavigator();

    const { logged } = useSelector(state => state.auth);

    const defaultHeader = {
        headerStyle: { backgroundColor: '#2f558a' },
        headerTintColor: '#fff',
        // headerLeft: () => (
        //     <Ionicons
        //         color="#fff"
        //         name="arrow-back-outline"
        //         size={35}
        //         style={st    yles.backIcon}
        //     />
        // ),
        headerRight: () => (
            <Ionicons
                color="#fff"
                name="person-circle-outline"
                size={35}
                style={styles.profileIcon}
            />
        )
    }

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
                            iconName = focused
                                ? 'search-circle'
                                : 'search-circle-outline';
                            break;
                        case 'Servicios':
                            iconName = focused
                                ? 'construct'
                                : 'construct-outline'
                            break;
                        case 'Documentos':
                            iconName = focused
                                ? 'folder'
                                : 'folder-outline'
                            break;

                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#48c5cd',
                tabBarInactiveTintColor: 'white',
                tabBarInactiveBackgroundColor: '#2f558a',
                tabBarActiveBackgroundColor: '#2f558a',
            })}
        >
            {
                logged
                    ?
                    <>
                        <Tab.Screen
                            options={defaultHeader}
                            name='Home'
                            component={HomeScreen}
                        />
                        <Tab.Screen
                            options={defaultHeader}
                            name='Busqueda'
                            component={BusquedaScreen}
                        />
                        <Tab.Screen
                            options={defaultHeader}
                            name='Servicios'
                            component={ServiciosScreen}
                        />
                        <Tab.Screen
                            options={defaultHeader}
                            name='Documentos'
                            component={DocumentosScreen}
                        />
                    </>
                    :
                    <>
                        <Tab.Screen options={{ headerStyle: { backgroundColor: '#2f558a' } }} name='Home' component={HomeScreen} />
                    </>
            }
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    backIcon: {
        paddingLeft: 5
    },
    profileIcon: {
        paddingRight: 8
    }
})

