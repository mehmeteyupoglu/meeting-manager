import * as Actions from "./types"

export const next = values => {
    return {
        type: Actions.NEXT, 
        payload: values
    }
}

export const previous = values => {
    return {
        type: Actions.PREVIOUS, 
        payload: values
    }
}

export const changeRadio = value => {
    return {
        type: Actions.CHANGE_RADIO, 
        payload: value
    }
}

