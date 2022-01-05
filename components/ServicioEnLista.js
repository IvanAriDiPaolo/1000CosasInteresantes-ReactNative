import { Pressable, StyleSheet, Text, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { seleccionarServicio } from '../redux/actions/servicios';
import { useDispatch } from 'react-redux';

export default function ServicioEnLista({ item }) {

    const dispatch = useDispatch();

    const handleSeleccionarServicio = () => {
        dispatch(seleccionarServicio(item))
    }

    return (
        <View style={styles.servicioEnLista} >
            <Ionicons name={item.icon} size={20} color={'#000'} />
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.abreviado}>{item.abreviado}</Text>
            <Pressable style={styles.seleccionar} onPress={handleSeleccionarServicio}>
                <Text style={styles.seleccionarTexto}>
                    + INFO
                </Text>
            </Pressable>
        </View>
    )
}
// onPress={() => handleServicio(item)}
const styles = StyleSheet.create({
    servicioEnLista: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '95%',
        height: 160,
        padding: 12,
        marginTop: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#48c5cd'
    },
    titulo: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    abreviado: {
        textAlign: 'center'
    },
    seleccionar: {
        width: 90,
        height: 40,
        backgroundColor: '#333333',
        borderRadius: 5,
        padding: 4,
        marginTop: 9,
        justifyContent: 'center'
    },
    seleccionarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
