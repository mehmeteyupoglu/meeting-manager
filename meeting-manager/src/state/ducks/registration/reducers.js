import * as Actions from "./types"

const initialState = {
    registration : []
}

const registrationReducer = (state=initialState, action) => {
    switch(action.type) {
        case Actions.NEXT: 
            return {
                ...state, 
                registration: [...state.registration, action.payload]
            }
        case Actions.PREVIOUS: 
            return {
                ...state, 
                registration: [...state.registration, action.payload]
            }
        default: 
            return state
    }
}

export default registrationReducer