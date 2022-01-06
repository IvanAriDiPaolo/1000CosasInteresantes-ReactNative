import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import imagen from '../../assets/profile.jpg';
import { logoutUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

export default function PerfilScreen() {

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Image source={imagen} style={{ height: 150, width: 150, borderRadius: 200, marginTop: 20 }} />
            <Pressable>
                <Text style={{ color: '#48c5cd', marginTop: 5 }}> Cambiar foto de perfil </Text>
            </Pressable>
            <Text style={styles.nombre}>Ivan Ari Di Paolo</Text>
            <Text style={{ color: '#fff', marginTop: 100 }}>Proximamente mas configaraciones</Text>
            <Pressable onPress={() => dispatch(logoutUser())} style={styles.logout}>
                <Text style={styles.logoutText}> Cerrar sesión</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    nombre: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 15
    },
    logout: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: '#2f558a',
        width: '35%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5
    },
    logoutText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})
