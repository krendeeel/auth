import { ERROR_AUTH, SET_USER_INFO, SET_AUTH, SET_PRELOADER} from "../actions/actions"

const initialState = {
    user: {
        firstName: null,
        lastName: null
    },
    auth: null,
    error: null,
    preloader: null,
}


export const authReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ERROR_AUTH: 
            return {...state, error: action.error}
        case SET_USER_INFO: 
            return {...state, user: {...state.user, firstName: action.firstName, lastName: action.lastName}}
        case SET_AUTH: 
            return {...state, auth: action.auth}
        case SET_PRELOADER: 
            return {...state, preloader: action.preloader}
        default:
            return state;
    }
}
