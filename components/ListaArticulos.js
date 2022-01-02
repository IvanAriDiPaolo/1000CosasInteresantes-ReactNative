import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { tomarNoticias } from '../redux/actions/noticias';

export default function ListaArticulos() {

    const dispatch = useDispatch();

    const { noticiasCargadas } = useSelector(state => state.noticias);

    useEffect(() => {
        dispatch(tomarNoticias())
    }, [])

    // console.log(noticiasCargadas)

    return (
        <View>
            {/* {noticiasCargadas.map(item => <Text key={item}> {item[1]} </Text>)} */}
        </View>
    )
}

const styles = StyleSheet.create({
})
