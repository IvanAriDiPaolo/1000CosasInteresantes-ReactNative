import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Articulo from '../../components/Articulo';
import ListaArticulos from '../../components/ListaArticulos';
import colosseo from '../../assets/colosseo.png'
import logo from '../../assets/logo.png';
import { logoutUser } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

const HomeScreen = ({ route, navigation }) => {

    const [articuloSeleccionado, setArticuloSeleccionado] = useState(true)

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser())
    }



    return (
        <View style={styles.container}>
            <Image source={colosseo} style={styles.colosseo} />
            <Image source={logo} style={styles.logo} />
            {/* <Button title="Logout" onPress={() => navigation.navigate('Logreg')} /> */}
            {/* <Button
                title='Logout'
                onPress={() => dispatch()}
            /> */}
            <View style={styles.articulos}>
                {
                    articuloSeleccionado
                        ? <ListaArticulos />
                        : <Articulo />
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
    }
})
