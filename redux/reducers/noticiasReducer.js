import { types } from "../types";

const initialState = {
    noticiasCargadas: [],
    noticiaSeleccionada: null
}

export const noticiasReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.cargarNoticias:
            return {
                ...state,
                noticiasCargadas: [
                    ...state.noticiasCargadas,
                    action.payload
                ]
            }

        case types.noticiaSelecionada:
            return {
                ...state,
                noticiaSeleccionada: action.payload
            }

        default:
            return state;

    }
}