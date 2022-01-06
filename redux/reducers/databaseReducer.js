import { types } from "../types";

const initialState = {
    databaseCargada: []
}

export const databaseReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.cargarDb:
            return {
                ...state,
                databaseCargada: [
                    action.payload
                ]
            }

        default:
            return state;

    }
}