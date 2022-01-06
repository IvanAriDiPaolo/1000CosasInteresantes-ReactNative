import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ServicioEnLista from './ServicioEnLista';
import { tomarServicios } from '../../redux/actions/servicios';

export default function ListaServicios() {

    const dispatch = useDispatch();

    const { serviciosCargados } = useSelector(state => state.servicios);

    useEffect(() => {
        dispatch(tomarServicios())
    }, [])

    return (
        <View style={{ height: '100%', alignItems: 'center' }}>
            <FlatList
                nestedScrollEnabled
                ItemSeparatorComponent={
                    () => <View
                        style={{
                            height: '2%',
                        }}
                    />
                }

                contentContainerStyle={styles.lista}
                data={serviciosCargados[0]}
                keyExtractor={(item) => item.titulo}
                renderItem={({ item }) => (
                    <ServicioEnLista item={item} />
                )}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    lista: {
        paddingBottom: 140,
        flexGrow: 1,
        marginTop: 15,
        paddingLeft: 7,
        paddingRight: 20,
        alignItems: 'center',
    }
})
