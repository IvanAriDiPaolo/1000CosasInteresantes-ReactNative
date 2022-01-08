import { types } from "../types";

const initialState = {
    invitado: false,
    logged: false,
    token: null,
    userId: null,
    registrado: null,
    activeUser: {
        nombre: null,
        email: null
    }
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                invitado: false,
                logged: true,
                token: action.payload.idToken,
                userId: action.payload.localId
            };

        case types.logout:
            return {
                ...state,
                invitado: false,
                logged: false,
                registrado: false,
                token: null,
                userId: null,
                activeUser: {},
            };

        case types.invitado:
            return {
                ...state,
                invitado: true,
                logged: false
            };

        case types.registrado:
            return {
                ...state,
                registrado: true
            };

        case types.setActiveUser:
            return {
                ...state,
                activeUser: action.payload
            };

        default:
            return state;
    }

}