import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ArticuloEnLista from './ArticuloEnLista';
import { tomarNoticias } from '../../redux/actions/noticias';

export default function ListaArticulos() {

    const dispatch = useDispatch();

    const { noticiasCargadas } = useSelector(state => state.noticias);

    useEffect(() => {
        dispatch(tomarNoticias())
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                horizontal
                ItemSeparatorComponent={
                    () => <View style={{ width: 10 }} />
                }

                // contentContainerStyle={styles.lista}
                data={noticiasCargadas[0]}
                style={styles.lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ArticuloEnLista item={item} />
                )}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.cierre1}>
                    CIUDADANÍA ITALIANA EN ITALIA
                </Text>
                <Text style={styles.cierre2}>
                    ¡ TU CIUDADANÍA COMIENZA AQUÍ !
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lista: {
        height: '50%',
        paddingLeft: 5,
        paddingRight: 10,
        flexGrow: 0
    },
    cierre2: {
        color: '#fff',
        marginTop: 5,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold',
    },
    cierre1: {
        color: '#fff',
        marginTop: 10,
        fontSize: 10,
        lineHeight: 20,
        fontWeight: 'bold',
    }
})
