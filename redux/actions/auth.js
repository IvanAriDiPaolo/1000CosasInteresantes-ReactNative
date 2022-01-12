import { LOG_IN_URL, SIGN_UP_URL } from "../../db/Database"
import { agregarUsuarioDB, tomarDatosDeUsuario } from "../../helpers/agregarUsuarioDB"
import { collection, getDocs, query, where } from "firebase/firestore"

import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from "react-native"
import { db } from "../../db/firestore"
import { types } from "../types"

export const registrar = (name, email, password, imagen) => {
    return async dispatch => {
        try {
            const response = await fetch(SIGN_UP_URL, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            })
            const data = await response.json();

            if (data.error) {
                console.log(data.error.errors[0].message)
                switch (data.error.errors[0].message) {
                    case 'INVALID_EMAIL':
                        alert('Email o contraseña inválido.')
                        break;

                    case 'INVALID_PASSWORD':
                        alert('Email o contraseña inválido.')
                        break;

                    case 'MISSING_PASSWORD':
                        alert('Por favor escribir una contraseña.')
                        break;

                    case 'USER_DISABLED':
                        alert('Su usuario está deshabilidato temporalmente.')
                        break;

                    case 'EMAIL_EXISTS':
                        alert('Un usuario con este email ya existe.')
                        break;

                    case 'OPERATION_NOT_ALLOWED':
                        alert('Accion momentaneamente fuera de servicio.')
                        break;

                    default:
                        break;
                }
            } else {
                dispatch({
                    type: types.registrado,
                    payload: data
                });

                agregarUsuarioDB(data.localId, name, email, imagen);

            }

        } catch (error) {
            console.log(error)
        }
    }
}

export const loginUser = (email, password) => {
    return async dispatch => {
        try {
            const response = await fetch(LOG_IN_URL, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
            })

            const data = await response.json();

            if (data.error) {
                console.log(data.error.errors[0].message)
                switch (data.error.errors[0].message) {
                    case 'INVALID_EMAIL':
                        alert('Email o contraseña inválido.')
                        break;

                    case 'INVALID_PASSWORD':
                        alert('Email o contraseña inválido.')
                        break;

                    case 'MISSING_PASSWORD':
                        alert('Por favor escribir una contraseña.')
                        break;

                    case 'USER_DISABLED':
                        alert('Su usuario está deshabilidato temporalmente.')
                        break;

                    default:
                        break;
                }
            } else {
                dispatch({
                    type: types.login,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem('@invitado')
        } catch (e) {
            console.log(e)
        }
        dispatch({
            type: types.logout
        })
    }
}

export const invitado = () => {
    return async dispatch => {
        try {
            await AsyncStorage.setItem('@invitado', 'ok')
        } catch (e) {
            console.log(e)
        }
        dispatch({
            type: types.invitado
        })
    }
}

export const setActiveUser = (user) => ({
    type: types.setActiveUser,
    payload: user
})

export const tomarUsuarioDB = (uid) => {
    return async dispatch => {
        try {
            LogBox.ignoreLogs(['Setting a timer']);
            const q = query(collection(db, "usuarios"), where("uid", "==", uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                let userData = doc.data()

                dispatch({
                    type: types.setActiveUser,
                    payload: userData
                });
                // dispatch(setActiveUser(userData))

            });
        } catch (err) {
            console.log(err)
        }
    }
}

export const initAuth = () => {
    return async dispatch => {
        try {
            const invitado = await AsyncStorage.getItem('@invitado')
            if (invitado !== null) {
                dispatch({
                    type: types.invitado
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}