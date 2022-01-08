import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { seleccionarServicio } from '../../redux/actions/servicios';

export default function Servicio() {
    const dispatch = useDispatch();
    const { servicioSeleccionado } = useSelector(state => state.servicios);
    const { logged } = useSelector(state => state.auth);

    const handleServicio = () => {
        dispatch(seleccionarServicio(null));
    }

    const pantalla = Dimensions.get('window').height;

    const handleSolicitarSinLogin = () => {
        alert(`Necesitas estar logueado \n para poder solicitar servicios.`);
    }

    return (
        <View style={styles.container}>
            <Ionicons
                name="arrow-back-outline"
                size={45}
                color={'#000'}
                onPress={handleServicio}
                style={styles.back}
            />
            <Ionicons name={servicioSeleccionado.icon} size={45} color={'#000'} style={{ marginTop: 20 }} />
            <Text style={styles.titulo}>{servicioSeleccionado.titulo}</Text>
            <Text style={styles.contenido}>{servicioSeleccionado.abreviado}</Text>
            {
                logged
                    ?
                    <Pressable style={styles.solicitar} onPress={() => alert('Esto está en desarrollo, aparecerarn en "Documentos')}>
                        <Text style={styles.solicitarTexto}> Solicitar </Text>
                    </Pressable>
                    :
                    <Pressable style={[styles.solicitar, pantalla > 800 && styles.solicitar2]} onPress={handleSolicitarSinLogin}>
                        <Text style={styles.solicitarTexto}> Loguearse {'\n'} para solicitar </Text>
                    </Pressable>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        backgroundColor: '#fff',
        width: '90%',
        height: '70%',
        borderRadius: 10,
        // paddingLeft: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#48c5cd'
    },
    titulo: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    contenido: {
        marginTop: 5,
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    },
    back: {
        position: 'absolute',
        left: 5
    },
    solicitarTexto: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    solicitar: {
        backgroundColor: '#444444',
        width: 120,
        height: 60,
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 5
    },
    solicitar2: {
        marginTop: 20
    }
})
