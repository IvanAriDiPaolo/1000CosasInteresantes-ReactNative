import { types } from "../types"

export const loginUser = () => ({
    type: types.login
})

export const logoutUser = () => ({
    type: types.logout
})

export const invitado = () => ({
    type: types.invitado
})

export const registrado = () => ({
    type: types.registrado
})