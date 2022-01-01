import { Button, StyleSheet, Text, View } from 'react-native'

import MenuHamburguesa from '../../components/MenuHamburguesa'
import React from 'react'
import { logoutUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const HomeScreen = ({ route, navigation }) => {
    // console.log(route.params)

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <View style={styles.container}>
            {/* <Button title="Logout" onPress={() => navigation.navigate('Logreg')} /> */}
            <Text>Home</Text>
            <Button
                title='Logout'
                onPress={handleLogout}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        paddingTop: 50,
    }
})
