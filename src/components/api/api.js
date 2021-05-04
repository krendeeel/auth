const baseUrl = 'https://mos-col-polygon.herokuapp.com/api/user/';

const sent = (url, data, headers) => {
    return fetch(`${baseUrl}${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    })
}
export const userApi = {
    registerUser: (data) => {
        return sent('register', data, {'Content-Type': 'application/json'})
        .then(response => response.json().then(r => {return r}))
        .catch(err => {return {
            type: "ERROR",
            error : err
        }})
    },

    loginUser: (data) => {
        return sent('login', data, {'Content-Type': 'application/json'})
        .then(res => res.json().then(r => {return {
            type: "SUCCESS",
            token:r.data.token
        }}))
        .catch(err => {return {
            type: "ERROR",
            error : err
        }})
    },

    infoUser: (token) => {
        return sent('info', {}, {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`})
        .then(response => response.json().then(r => {
            return {
                type: 'SUCCESS',
                firstName: r.data.firstname,
                lastName: r.data.lastname,
            }}))
        .catch(err => {
            return {
                type: 'ERROR',
                error: err
            }
        })
    }

}

