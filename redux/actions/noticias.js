import { URL_API } from "../../db/Database"
import { types } from "../types";

export const tomarNoticias = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/noticias.json`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();
            const not = Object.keys(result).map(key => ({
                ...result[key],
                id: key,
            }));
            dispatch({
                type: types.cargaNoticias,
                payload: not
            })

        }
        catch (err) {
            console.log(err)
        }
    }
}
