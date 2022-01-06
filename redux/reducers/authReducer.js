import { types } from "../types";

export const authReducer = (state = {}, action) => {

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
                userId: null
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

        default:
            return state;
    }

}