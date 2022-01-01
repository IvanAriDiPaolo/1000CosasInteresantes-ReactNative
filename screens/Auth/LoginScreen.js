import * as React from 'react'

import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { loginUser } from '../../redux/actions/auth';
import logo from '../../assets/logo.png';
import { useDispatch } from 'react-redux';

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

    const handleToggleScreen = () => {
        navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#fff"
            />
            <View style={styles.passwordView}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
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
            <Text
                style={styles.texto}
                onPress={handleToggleScreen}
            >
                ¿ Nuevo usuario ?{"\n"} ¡ Click Aca !
            </Text>
            <View style={styles.hr} />
            <Button
                style={styles.boton}
                color={'#48c5cd'}
                title="Login"
                // disabled={disableLogin}
                onPress={handleLogin}
            />
            {/* <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress}
            />; */}
        </View>
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
        marginBottom: 45,
        resizeMode: "contain"
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
        fontWeight: '500',
    },
    hr: {
        borderBottomColor: '#48c5cd',
        borderBottomWidth: 2,
        width: '65%',
        marginTop: 2,
        marginBottom: 10,
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