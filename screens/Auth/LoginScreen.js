import * as React from 'react'

import {
    Button,
    Image,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { invitado, loginUser } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/logo.png';

// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const { useEffect, useState } = React;

export default LoginScreen = ({ navigation }) => {

    const [disableLogin, setDisableLogin] = useState(true)
    const [showPassword, setshowPassword] = useState(true)
    // const [isSignedIn, setIsSignedIn] = useState(true)
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser())
    }

    const handleInvitado = () => {
        dispatch(invitado())
    }

    const handleToggleScreen = () => {
        navigation.navigate('Register')
    }

    const { registrado } = useSelector(state => state.auth)

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <Text
                    style={styles.texto}
                >
                    INICIAR SESION
                </Text>
                {
                    <View style={{ alignContent: 'center' }}>
                        {
                            registrado
                            && <Text style={styles.botonInvitado}>
                                ¡ Registro exitoso !
                                {'\n'} Inicia sesión para ingresar a tu cuenta.
                                {'\n'} Recuerda validar tu email en tu correo.
                            </Text>
                        }
                    </View>
                }
                <TextInput
                    style={styles.input}
                    placeholder="Usuario o Email"
                    placeholderTextColor="#fff"
                />
                <View style={styles.passwordView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#fff"
                        secureTextEntry={showPassword}
                        onChange={() => setDisableLogin(false)}
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
                <Pressable
                    style={styles.boton}
                    onPress={handleLogin}
                >
                    <Text style={styles.botonTexto}>Login</Text>
                </Pressable>
                <View style={styles.hr} />
                <Text
                    style={styles.texto}
                    onPress={handleToggleScreen}
                >
                    ¿ Usuario nuevo ?{"\n"} ¡ Click Aca !
                </Text>
                <Pressable
                    style={styles.botonInvitado}
                    onPress={handleInvitado}
                >
                    <Text style={styles.botonTexto}>Ingresar como Invitad@</Text>
                </Pressable>
                {/* <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress}
            />; */}
            </View>
        </TouchableWithoutFeedback >
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
        marginBottom: 15,
        resizeMode: "contain"
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
    botonInvitado: {
        marginTop: 5,
        color: 'white',
        backgroundColor: '#2f558a',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#48c5cd',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 4,
        elevation: 3,
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'center'
    },
    botonTexto: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
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
    texto: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 15,
        fontWeight: 'bold',
    },
    hr: {
        borderBottomColor: '#48c5cd',
        borderBottomWidth: 2,
        width: '65%',
    },
    eyePassword: {
        position: 'absolute',
        right: 15,
        bottom: 12
    },
    passwordView: {
        flexDirection: 'row'
    },
});