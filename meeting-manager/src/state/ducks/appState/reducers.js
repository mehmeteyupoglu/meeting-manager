import * as Actions from "./types"

const initialState = {
    
    appState : {
        step: 1, 
        radio: "", 
        studentAmount: 30, 
        regularAmount: 45, 
        workshop: 50,
        wNum: 0,  
    }
}

const appReducer = (state=initialState, action) => {
    switch(action.type) {
        case Actions.NEXT: 
            return {
                ...state, 
                appState: {...state.appState, step: state.appState.step + 1}
            }
        case Actions.PREVIOUS: 
            return {
                ...state, 
                appState: {...state.appState, step: state.appState.step - 1}
            }
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