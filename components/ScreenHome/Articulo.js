import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { seleccionarNoticia } from '../../redux/actions/noticias';

export default function Articulo({ navigation }) {
    const dispatch = useDispatch();
    const { noticiaSeleccionada } = useSelector(state => state.noticias);

    const handleServicio = () => {
        dispatch(seleccionarNoticia(null));
        navigation.navigate('Servicios')
    }

    return (
        <View style={styles.container}>
            <Ionicons
                name="arrow-back-outline"
                size={45}
                color={'#fff'}
                onPress={() => dispatch(seleccionarNoticia(null))}
                style={styles.back}
            />
            <View style={styles.articulo}>
                <Text style={styles.titulo}>{noticiaSeleccionada.titulo}</Text>
                <Text style={styles.contenido}>{noticiaSeleccionada.cont}</Text>
            </View>
            <Pressable onPress={handleServicio} style={styles.servicioContainer}>
                <Text style={styles.servicioTexto}>
                    ¡ Enterate mas sobre nuestros servicios de {noticiaSeleccionada.titulo} aquí !
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        backgroundColor: '#444444',
        width: 370,
        height: 380
    },
    back: {
        position: 'absolute',
        left: 5
    },
    articulo: {
        marginTop: 45,
        margin: 25
    },
    titulo: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    contenido: {
        marginTop: 31,
        color: '#fff',
        fontSize: 15,
    },
    servicioContainer: {
        backgroundColor: '#48c5cd',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5
    },
    servicioTexto: {
        padding: 7,
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
