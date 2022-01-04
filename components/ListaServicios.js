import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { tomarServicios } from '../redux/actions/servicios';

export default function ListaServicios() {

    const dispatch = useDispatch();

    const { serviciosCargados } = useSelector(state => state.servicios);

    useEffect(() => {
        dispatch(tomarServicios())
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                horizontal
                ItemSeparatorComponent={
                    () => <View style={{ width: 15 }} />
                }

                contentContainerStyle={styles.lista}
                data={serviciosCargados[0]}
                style={styles.lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    // <ArticuloEnLista item={item} />
                    <Text>Hola</Text>
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
        height: 380,
        marginTop: 25,
        paddingLeft: 7,
        paddingRight: 20,
        flexGrow: 0
    },
    cierre2: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold'
    },
    cierre1: {
        color: '#fff',
        fontSize: 10,
        lineHeight: 20,
        fontWeight: 'bold'
    }
})
