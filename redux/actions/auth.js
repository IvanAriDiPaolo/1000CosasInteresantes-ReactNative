import { types } from "../types"

export const loginUser = () => ({
    type: types.login
})

export const logoutUser = () => ({
    type: types.logout
})