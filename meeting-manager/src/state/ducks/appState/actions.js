import * as Actions from "./types"

export const next = () => {
    return {
        type: Actions.NEXT
    }
}

export const previous = () => {
    return {
        type: Actions.PREVIOUS
    }
}

export const changeRadio = value => {
    return {
        type: Actions.CHANGE_RADIO, 
        payload: value
    }
}

