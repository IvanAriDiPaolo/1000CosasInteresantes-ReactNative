import {
    Image,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import React, { useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/logo.png';
import { registrado } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';

export default function RegisterScreen({ navigation }) {

    const [showPassword, setshowPassword] = useState(true)
    const [showPassword2, setshowPassword2] = useState(true)

    const dispatch = useDispatch();

    const handleToggleScreen = () => {
        navigation.navigate('Login')
    }

    const handleRegister = () => {
        dispatch(registrado());
        navigation.navigate('Login');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text
                    style={styles.texto}
                >
                    CREA TU CUENTA
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre completo"
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                />
                <View style={styles.passwordView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#fff"
                        secureTextEntry={showPassword}
                    />
                    <Ionicons
                        name={
                            showPassword
                                ? 'eye-outline'
                                : 'eye-off-outline'
                        }
                        size={25}
                        color='#fff'
                        style={styles.eyePassword}
                        onPress={() => setshowPassword(!showPassword)}
                    />
                </View>
                <View style={styles.passwordView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Repetir contraseña"
                        placeholderTextColor="#fff"
                        secureTextEntry={showPassword}
                    />
                    <Ionicons
                        name={
                            showPassword2
                                ? 'eye-outline'
                                : 'eye-off-outline'
                        }
                        size={25}
                        color='#fff'
                        style={styles.eyePassword}
                        onPress={() => setshowPassword2(!showPassword2)}
                    />
                </View>
                <Pressable
                    style={styles.boton}
                    // color={'#48c5cd'}
                    // title="Login"
                    // disabled={disableLogin}
                    onPress={handleRegister}
                >
                    <Text style={styles.botonTexto}>Registrarse</Text>
                </Pressable>
                <View style={styles.hr} />
                <Text
                    style={styles.texto}
                    onPress={handleToggleScreen}
                >
                    ¿ Ya tenés una cuenta ?{"\n"} ¡ Click aca !
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f558a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 220,
        height: 140,
        resizeMode: "contain"
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        color: '#fff',
        height: 40,
        width: 230,
        margin: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    eyePassword: {
        position: 'absolute',
        right: 15,
        bottom: 12
    },
    passwordView: {
        flexDirection: 'row'
    },
    boton: {
        marginTop: 5,
        color: 'white',
        backgroundColor: '#48c5cd',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 4,
        elevation: 3,
        marginTop: 10,
        marginBottom: 15,
    },
    botonTexto: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    hr: {
        borderBottomColor: '#48c5cd',
        borderBottomWidth: 2,
        width: '65%',
        marginTop: 2,
        marginBottom: 10,
    },
})
