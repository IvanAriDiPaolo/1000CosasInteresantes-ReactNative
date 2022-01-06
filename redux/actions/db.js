import { URL_API } from "../../db/Database"
import { types } from "../types";

export const tomarDb = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}.json`);
            const json = await response.json();
            dispatch({
                type: types.cargarDb,
                payload: json
            })
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
}