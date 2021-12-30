import * as React from 'react'
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import logo from '../assets/logo.png';

const { useEffect, useState } = React;

export default LoginScreen = ({ navigation }) => {

    const [disableLogin, setDisableLogin] = useState(true)
    const [response, setResponse] = useState(true)

    const handleLogin = () => {
        if (response) {
            navigation.navigate('Home', { logged: response })
        }
        else {
            alert('Error')
        }
    }

    const handleRegister = () => {

    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#fff"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#fff"
                onChange={() => setDisableLogin(false)}
            />
            <Text style={styles.nuevoUsuario} onPress={() => handleRegister} >¿ Nuevo usuario ?{"\n"} ¡ Click Aqui !</Text>
            <View style={styles.hr} />
            <Button
                title="Login"
                disabled={disableLogin}
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
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 120,
        marginBottom: 75,
        resizeMode: "contain"
    },
    input: {
        color: '#fff',
        height: 40,
        textAlign: 'center'
    },
    nuevoUsuario: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 15,
        fontWeight: '500'
    },
    hr: {
        borderBottomColor: '#48c5cd',
        borderBottomWidth: 2,
        width: '65%'
    },
});