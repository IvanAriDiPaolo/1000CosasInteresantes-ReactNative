import { URL_API } from "../../db/Database"
import { types } from "../types";

export const tomarNoticias = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/noticias.json`);
            const json = await response.json();
            dispatch({
                type: types.cargarNoticias,
                payload: json
            })
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
}

export const seleccionarNoticia = (noticia) => ({
    type: types.noticiaSelecionada,
    payload: noticia
})