import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function RegisterScreen({ navigation }) {

    const handleToggleScreen = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text
                style={styles.texto}
                onPress={handleToggleScreen}
            >
                ¿ Ya tenés una cuenta ?{"\n"} ¡ Click aca !
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f558a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 15,
        fontWeight: '500',
    },
})
