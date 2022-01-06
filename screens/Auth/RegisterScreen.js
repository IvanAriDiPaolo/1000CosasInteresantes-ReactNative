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
import MyTextInput from '../../components/SignIn/MyTextInput';
import logo from '../../assets/logo.png';
import { registrar } from '../../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export default function RegisterScreen({ navigation }) {

    const [showPassword, setshowPassword] = useState(false)
    const [showPassword2, setshowPassword2] = useState(false)
    const [registerEnabled, setRegisterEnabled] = useState(false)

    const initialForm = {
        name: '',
        email: '',
        password: '',
        password2: ''
    };

    const [formValues, handleInputChange] = useForm(initialForm)

    const {
        name,
        email,
        password,
        password2
    } = formValues;

    const dispatch = useDispatch();

    const handleToggleScreen = () => {
        navigation.navigate('Login')
    }

    const handleRegister = () => {
        if (name !== '' && password2 !== '' && password === password2) {
            dispatch(registrar(email, password));
            navigation.navigate('Login')
        } else {
            alert("Revisar campos para continuar con registro.")
        }
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
                <MyTextInput
                    value={name}
                    name="name"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                />
                <MyTextInput
                    value={email}
                    name="email"
                    placeholder="Email"
                    keyboardType='email-address'
                    onChange={handleInputChange}
                />
                <View style={styles.passwordView}>
                    <MyTextInput
                        value={password}
                        name="password"
                        placeholder="Contraseña"
                        secureTextEntry={showPassword}
                        onChange={handleInputChange}
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
                    <MyTextInput
                        value={password2}
                        name="password2"
                        placeholder="Repetir contraseña"
                        secureTextEntry={showPassword2}
                        onChange={handleInputChange}
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
                    onPress={handleRegister}
                    disabled={registerEnabled}
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
        height: 200,
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
