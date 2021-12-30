import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const HomeScreen = ({ route, navigation }) => {
    // console.log(route.params)
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
