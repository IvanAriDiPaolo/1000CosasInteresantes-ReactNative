import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { seleccionarNoticia } from '../../redux/actions/noticias';
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
        height: '100%',
        backgroundColor: '#444444',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        flexGrow: 1,
    },
    titulo: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
    },
    abreviado: {
        padding: 10,
        color: '#fff',
        fontSize: 12,
    },
    imagenes: {
        height: '60%'
    },
})
