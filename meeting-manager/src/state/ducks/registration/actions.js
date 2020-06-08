import * as Actions from "./types"

export const register = (values) => {
    return {
        type: Actions.REGISTER, 
        payload: values
    }
}

export const addWorkshop = (values) => {
    return {
        type: Actions.ADD_WORKSHOP, 
        payload: values
    }
}
