import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import ListaServicios from '../../components/ListaServicios';
import Servicio from '../../components/Servicio';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';

const ServiciosScreen = ({ route, navigation }) => {

    const { servicioSeleccionado } = useSelector(state => state.servicios);

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://www.dltviaggi.it/immagine/13124/Venezia.jpg' }} style={styles.colosseo} />
            <Image source={logo} style={styles.logo} />
            <View style={styles.servicios}>
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
        height: 275,
        resizeMode: "contain",
        position: 'absolute'
    },
    logo: {
        width: 220,
        height: 140,
        marginTop: 45,
        resizeMode: "contain"
    },
    servicios: {
        marginTop: 60
    },

})
