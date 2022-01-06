import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { seleccionarNoticia } from '../../redux/actions/noticias';
import { seleccionarServicio } from '../../redux/actions/servicios';
import { useDispatch } from 'react-redux';

export default function Resultados({ item, navigation }) {

    const dispatch = useDispatch();

    const handleNavigate = () => {
        switch (item.categoria) {
            case 'noticias':
                navigation.navigate('Home')
                dispatch(seleccionarNoticia(item))
                break;

            case 'servicios':
                navigation.navigate('Servicios')
                dispatch(seleccionarServicio(item))
                break;

            default:
                break;
        }
    }

    return (
        <View style={styles.container} >
            <Pressable style={styles.box} onPress={handleNavigate}>
                <Text style={styles.titulo}>
                    {item.titulo}
                </Text>
                <Text style={styles.cat}>
                    en {item.categoria}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 75,
        borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#48c5cd'
    },
    titulo: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 12
    },
    cat: {
        color: 'grey',
        marginLeft: 12
    }
})
