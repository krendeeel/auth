export const SET_USER_INFO = 'authReducer/SET_USER_INFO';
export const ERROR_AUTH = 'authReducer/ERROR_AUTH';
export const SET_AUTH = 'authReducer/SET_AUTH';
export const SET_PRELOADER = 'authReducer/SET_PRELOADER';

export const errorAuth = (error) => {
    return {
        type: ERROR_AUTH,
        error
    }
}

export const setUserInfo = (firstName, lastName) => {
    return {
        type: SET_USER_INFO,
        firstName,
        lastName
    }
}

export const setAuth = (auth) => {
    return {
        type: SET_AUTH,
        auth
    }
}

export const setPreloader = (preloader) => {
    return {
        type: SET_PRELOADER,
        preloader
    }
}
