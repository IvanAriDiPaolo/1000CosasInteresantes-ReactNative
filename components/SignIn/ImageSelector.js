import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function ImageSelector({ setImagen }) {

    const [picked, setPicked] = useState(null)

    const verifyPermissions = async () => {

        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Se necesitan permisos de la camara para registrarse',
                [{ text: 'Ok' }],
            )
            return false
        } else {
            return true
        }
    }

    const handleTakePicture = async () => {
        const cameraPermission = await verifyPermissions()
        if (!cameraPermission) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 16],
            quality: 0.8,
        })

        setPicked(image)
        setImagen(image.uri)
    }

    return (
        <View>
            {
                picked
                    ? <Image source={{ uri: picked.uri }} style={styles.image} />
                    :
                    <View style={styles.input}>
                        <Text
                            onPress={handleTakePicture}
                            style={styles.texto}
                        >
                            Seleccionar{'\n'}Imagen{'\n'}de Perfil
                        </Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
        // marginBottom: 15,
        // fontSize: 15,
        // fontWeight: 'bold',
    },
    input: {
        justifyContent: 'center',
        color: '#fff',
        height: 70,
        width: 150,
        margin: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
})
