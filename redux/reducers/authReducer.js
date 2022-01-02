import { types } from "../types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                invitado: false,
                logged: true
            };

        case types.logout:
            return {
                ...state,
                invitado: false,
                logged: false,
                registrado: false
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