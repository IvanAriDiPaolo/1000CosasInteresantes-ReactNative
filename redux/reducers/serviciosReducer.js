import { types } from "../types";

const initialState = {
    serviciosCargados: [],
    servicioSeleccionado: null
}

export const serviciosReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.cargarServicios:
            return {
                ...state,
                serviciosCargados: [
                    // ...state.serviciosCargados,
                    action.payload
                ]
            }

        case types.servicioSeleccionado:
            return {
                ...state,
                servicioSeleccionado: action.payload
            }

        default:
            return state;

    }
}
