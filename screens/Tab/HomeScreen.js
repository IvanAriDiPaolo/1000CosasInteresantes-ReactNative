import { Button, Image, StyleSheet, Text, View } from 'react-native'

import Articulo from '../../components/Articulo';
import ListaArticulos from '../../components/ListaArticulos';
import React from 'react'
import colosseo from '../../assets/colosseo.png'
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';

const HomeScreen = ({ route, navigation }) => {

    const { noticiaSeleccionada } = useSelector(state => state.noticias);

    return (
        <View style={styles.container}>
            <Image source={colosseo} style={styles.colosseo} />
            <Image source={logo} style={styles.logo} />
            <View style={styles.articulos}>
                {
                    noticiaSeleccionada
                        ? <Articulo navigation={navigation} />
                        : <ListaArticulos />
                }
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    colosseo: {
        width: '100%',
        height: 230,
        resizeMode: "contain",
        position: 'absolute'
    },
    logo: {
        width: 220,
        height: 140,
        // marginBottom: 15,
        marginTop: 45,
        resizeMode: "contain"
    },
    articulos: {
        marginTop: 60
    },

})
