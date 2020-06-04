import * as Actions from "./types"

const initialState = {
    registration : {
        step: 1, 
        radio: "", 
        studentAmount: 30, 
        regularAmount: 45, 
        workshop: 50,
        numberOfWorkshops: 0,  
    }
}

const registrationReducer = (state=initialState, action) => {
    switch(action.type) {
        case Actions.NEXT: 
            return {
                ...state, 
                registration: {...state.registration, step: state.registration.step + 1}
            }
        case Actions.PREVIOUS: 
            return {
                ...state, 
                registration: {...state.registration, step: state.registration.step - 1}
            }
        case Actions.CHANGE_RADIO: 
            return {
                ...state, 
                registration: { ...state.registration, radio: action.payload}
            }
        case Actions.ADD_WORKSHOP: 
            return {
                ...state, 
                registration: { ...state.registration, numberOfWorkshops: state.registration.numberOfWorkshops + 1}
            }
        default: 
            return state
    }
}

export default registrationReducer