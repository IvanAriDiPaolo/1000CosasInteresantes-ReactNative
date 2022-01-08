import { LOG_IN_URL, SIGN_UP_URL } from "../../db/Database"
import { agregarUsuarioDB, tomarDatosDeUsuario } from "../../helpers/agregarUsuarioDB"

import { types } from "../types"

export const registrar = (name, email, password) => {
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

                agregarUsuarioDB(data.localId, name, email);

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

export const logoutUser = () => ({
    type: types.logout
})

export const invitado = () => ({
    type: types.invitado
})

export const setActiveUser = (user) => ({
    type: types.setActiveUser,
    payload: user
})