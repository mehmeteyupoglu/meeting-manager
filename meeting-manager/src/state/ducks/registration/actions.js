import * as Actions from "./types"

export const register = (values) => {
    return {
        type: Actions.REGISTER, 
        payload: values
    }
}
