import * as Actions from "./types"

const initialState = {
    registration : [{
        step: 1, 
        radio: true, 
        studentAmount: 30, 
        regularAmount: 45, 
        workshop: 50,
        numberOfWorkshops: 0,  
    }]
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
        case Actions.CHANGE_RADIO: 
            return {
                ...state, 
                registration: {...state.registration, radio: action.payload}
            }
        default: 
            return state
    }
}

export default registrationReducer