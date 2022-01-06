import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import ListaServicios from '../../components/ScreenServicios/ListaServicios';
import Servicio from '../../components/ScreenServicios/Servicio';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';

const ServiciosScreen = ({ route, navigation }) => {

    const { servicioSeleccionado } = useSelector(state => state.servicios);

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://www.dltviaggi.it/immagine/13124/Venezia.jpg' }} style={styles.colosseo} />
            <Image source={logo} style={styles.logo} />
            <Text style={styles.serviciosTexto}>
                Nuestros servicios:
            </Text>
            <View style={styles.servicios} nestedScrollEnabled>
                {
                    servicioSeleccionado
                        ? <Servicio />
                        : <ListaServicios />
                }
            </View>
        </View>
    )
}

export default ServiciosScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    colosseo: {
        width: '100%',
        height: 270,
        resizeMode: "contain",
        position: 'absolute',
        zIndex: 1
    },
    logo: {
        width: 220,
        height: 140,
        marginTop: 45,
        resizeMode: "contain",
        zIndex: 2
    },
    servicios: {
        flex: 1,
        flexGrow: 1,
    },
    serviciosTexto: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 60,
        zIndex: 3,
        backgroundColor: '#333333',
        width: 260,
        textAlign: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    }
})
