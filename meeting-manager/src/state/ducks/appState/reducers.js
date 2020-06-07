import * as Actions from "./types"

const initialState = {
    
    appState : {
        radio: "",  
        wNum: 0, 
        "registration_types": [
            {
                "event_registration_type_id": 2886,
                "event_registration_type_title": "Student",
                "event_registration_type_price": 30
            },
            {
                "event_registration_type_id": 2887,
                "event_registration_type_title": "Regular",
                "event_registration_type_price": 45
            }
        ],
        "workshops": [
            {
                "event_workshop_id": 1549,
                "event_workshop_title": "Deep Dive with Vue3",
                "event_workshop_price": 50
            }
        ] 
    }
}

const appReducer = (state=initialState, action) => {
    switch(action.type) {
        
        case Actions.CHANGE_RADIO: 
            return {
                ...state, 
                appState: { ...state.appState, radio: action.payload}
            }
        case Actions.ADD_WORKSHOP: 
            return {
                ...state, 
                appState: {...state.appState, wNum: state.appState.wNum + 1}
            }
        default: 
            return state
    }
}

export default appReducer