import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ServiciosScreen = ({ route, navigation }) => {
    // console.log(route.params)
    return (
        <View style={styles.container}>
            {/* <Button title="Logout" onPress={() => navigation.navigate('Logreg')} /> */}
        </View>
    )
}

export default ServiciosScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        paddingTop: 50,
    }
})
