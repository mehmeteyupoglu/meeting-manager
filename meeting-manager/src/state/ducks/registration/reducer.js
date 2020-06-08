import * as Actions from "./types"

const initialState = {
    registration : []
}

const registrationReducer = (state=initialState, action) => {
    switch(action.type) {
        case Actions.REGISTER: 
            return { 
                registration: [...state.registration, 
                    {
                        "event_registration_firstname" :  action.payload.firstName, 
                        "event_registration_lastname" : action.payload.lastName, 
                        "event_registration_email" : action.payload.email, 
                    }
                ]
            }
        case Actions.ADD_WORKSHOP: 
            return { 
                ...state, 
                registration: [...state.registration, {"workshops" : action.payload}]
            }
        default: 
            return state
    }
}

export default registrationReducer