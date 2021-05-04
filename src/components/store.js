import {combineReducers, createStore, applyMiddleware} from 'redux'
import { authReducer } from './reducers/authReducer';
import thunk from 'redux-thunk'
import { userApi } from './api/api';
import { errorAuth, setUserInfo, setAuth, setPreloader } from './actions/actions';
import { cookies } from './Helpers';

const rootReducer = combineReducers({
    authReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export const registerUserThunk = (data) => {
    return (dispatch) => {
        dispatch(errorAuth(false))
        dispatch(setPreloader(true));
        userApi.registerUser(data).then(
            response => {
                if(response.result === 'ok'){
                    dispatch(setAuth(true));
                   
                }
                else{
                   dispatch(errorAuth('Registration error!'));
                }
                dispatch(setPreloader(false));
            }
        )
        
    }
}



export const loginUserThunk = (data) => {
     return  (dispatch) => {
        dispatch(setPreloader(true))
        dispatch(errorAuth(false))
        userApi.loginUser(data).then(
            response => {
                if(response.type === 'SUCCESS'){
                    cookies.set('token', response.token)
                    dispatch(setAuth(true))
                    
                } else{
                    dispatch(errorAuth('Invalid data!'))
                }
                dispatch(setPreloader(false))
            }
        )

    }
}

export const deleteCookies = () => {
    cookies.remove('token');
}

export const checkedCookies = () => {
    return (dispatch) => {
        if(cookies.get('token')) {dispatch(setAuth(true));}
        else {dispatch(setAuth(false))};
    } 
}

export const me = () => {
     return  dispatch => {
        dispatch(errorAuth(false))
        userApi.infoUser(cookies.get('token')).then (
            data => {
                if(data.type === 'SUCCESS'){
                    dispatch(setUserInfo(data.firstName, data.lastName));
                    dispatch(setAuth(true))
                }
            }
        )
    }

}