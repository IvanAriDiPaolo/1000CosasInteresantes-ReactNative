import * as React from 'react'

import {
    Image,
    Keyboard,
    Linking,
    Pressable,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { invitado, loginUser } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTextInput from '../../components/SignIn/MyTextInput';
import logo from '../../assets/logo.png';
import { useForm } from '../../hooks/useForm';

// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const { useEffect, useState } = React;

export default LoginScreen = ({ navigation }) => {

    const [showPassword, setshowPassword] = useState(true)

    const initialForm = {
        email: '',
        password: '',
    };

    const [formValues, handleInputChange] = useForm(initialForm)

    const {
        email,
        password,
    } = formValues;

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser(email, password))
    }

    const handleInvitado = async () => {
        dispatch(invitado());

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

                <MyTextInput
                    value={email}
                    name="email"
                    placeholder="Email"
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
                <View style={styles.social}>
                    <Ionicons
                        name="logo-instagram"
                        size={30}
                        color='#fff'
                        style={styles.redSocial}
                        onPress={() => Linking.openURL('https://www.instagram.com/1000cosasinteresantes/')}
                    />
                    <Ionicons
                        name="logo-facebook"
                        size={30}
                        color='#fff'
                        style={styles.redSocial}
                        onPress={() => Linking.openURL('https://www.facebook.com/groups/ciudadaniaenitalia')}
                    />
                    <Ionicons
                        name="logo-youtube"
                        size={30}
                        color='#fff'
                        style={styles.redSocial}
                        onPress={() => Linking.openURL('https://www.youtube.com/1000cosasinteresantes')}
                    />
                    <Ionicons
                        name="paper-plane-outline"
                        size={30}
                        color='#fff'
                        style={styles.redSocial}
                        onPress={() => Linking.openURL('https://t.me/canal1000ci')}
                    />
                    <Ionicons
                        name="musical-notes-outline"
                        size={30}
                        color='#fff'
                        style={styles.redSocial}
                        onPress={() => Linking.openURL('https://open.spotify.com/show/2saMUvUR6q69fj2GCkWEUM?si=bad6099f48254fef')}
                    />
                </View>
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
        height: 200,
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
    social: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingLeft: 45
    },
    redSocial: {
        width: 65,
    }
});