import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { tomarNoticias } from '../redux/actions/noticias';

export default function ListaArticulos() {

    const dispatch = useDispatch();

    const { noticiasCargadas } = useSelector(state => state.noticias);

    // const listaArticulos = JSON.stringify(noticiasCargadas[0])

    useEffect(() => {
        dispatch(tomarNoticias())
    }, [])

    // console.log(noticiasCargadas)
    // console.log(typeof (noticiasCargadas[0]))
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={noticiasCargadas[0]}
                keyExtractor={(item) => item.titulo}
                renderItem={({ item }) => (
                    <Text>{item.titulo}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    lista: {
        // width: 50,
        // height: 10,
    }
})
