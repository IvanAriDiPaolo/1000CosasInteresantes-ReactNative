import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import BusquedaScreen from '../screens/Tab/BusquedaScreen';
import DocumentosScreen from '../screens/Tab/DocumentosScreen';
import HomeScreen from '../screens/Tab/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import ServiciosScreen from '../screens/Tab/ServiciosScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { logoutUser } from '../redux/actions/auth';

export default function TabStack({ navigation, route }) {

    const Tab = createBottomTabNavigator();

    const dispatch = useDispatch();

    const { logged } = useSelector(state => state.auth);

    const loggedHeader = {
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

    const notLoggedHeader = {
        headerStyle: { backgroundColor: '#2f558a', borderBottomWidth: 0 },
        headerTintColor: 'white',
        headerRight: () => (
            <Ionicons
                color="#fff"
                name="log-in-outline"
                size={35}
                style={styles.profileIcon}
                onPress={() => {
                    dispatch(logoutUser())
                }}
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
                tabBarStyle: styles.container
            })}
        >
            {
                logged
                    ?
                    <>
                        <Tab.Screen
                            options={loggedHeader}
                            name='Home'
                            component={HomeScreen}
                        />
                        <Tab.Screen
                            options={loggedHeader}
                            name='Busqueda'
                            component={BusquedaScreen}
                        />
                        <Tab.Screen
                            options={loggedHeader}
                            name='Servicios'
                            component={ServiciosScreen}
                        />
                        <Tab.Screen
                            options={loggedHeader}
                            name='Documentos'
                            component={DocumentosScreen}
                        />
                    </>
                    :
                    <>
                        <Tab.Screen
                            options={notLoggedHeader}
                            name='Home'
                            component={HomeScreen}
                        />
                        <Tab.Screen
                            options={notLoggedHeader}
                            name='Busqueda'
                            component={BusquedaScreen}
                        />
                        <Tab.Screen
                            options={notLoggedHeader}
                            name='Servicios'
                            component={ServiciosScreen}
                        />
                    </>
            }
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f558a',
        borderTopWidth: 0
    },
    backIcon: {
        paddingLeft: 8
    },
    profileIcon: {
        paddingRight: 8
    }
})

