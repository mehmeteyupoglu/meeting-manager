import * as Actions from "./types"

const next = values => {
    return {
        type: Actions.NEXT, 
        payload: values
    }
}

const previous = values => {
    return {
        type: Actions.PREVIOUS, 
        payload: values
    }
}

