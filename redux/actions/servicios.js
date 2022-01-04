import { URL_API } from "../../db/Database"
import { types } from "../types";

export const tomarServicios = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/servicios.json`);
            const json = await response.json();
            dispatch({
                type: types.cargarServicios,
                payload: json
            })
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }
}

export const seleccionarServicio = (servicio) => ({
    type: types.servicioSeleccionado,
    payload: servicio
})