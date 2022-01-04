import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { seleccionarNoticia } from '../redux/actions/noticias';
import { useDispatch } from 'react-redux';

export default function ArticuloEnLista({ item }) {

    const dispatch = useDispatch();

    const handleArticulo = (noticia) => {
        dispatch(seleccionarNoticia(noticia))
    }

    return (
        <Pressable style={styles.articuloEnLista} onPress={() => handleArticulo(item)}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.abreviado}>{item.abreviado}</Text>
            <Image source={{ uri: item.img }} style={styles.imagenes} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    articuloEnLista: {
        width: 240,
        height: 370,
        backgroundColor: '#444444',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
    },
    titulo: {
        color: '#fff',
        fontSize: 15,
        padding: 10,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    abreviado: {
        padding: 10,
        color: '#fff',
        fontSize: 12,
    },
    imagenes: {
        marginTop: 5,
        height: 250
    },
})
