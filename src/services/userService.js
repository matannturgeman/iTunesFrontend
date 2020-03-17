import { BACKEND_URL_DEV, BACKEND_URL_PROD } from '../urls/urls.json'

const isDev = process.env.REACT_APP_ENV === 'dev'
const BASE_URL = isDev ?
    BACKEND_URL_DEV
    : BACKEND_URL_PROD

export const getUsers = () => {
    return fetch(`${BASE_URL}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
}

export const deleteUser = id => {
    return fetch(`${BASE_URL}/user/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
}

export const addUser = variables => {
    return fetch(`${BASE_URL}/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(variables)
    })
        .then(res => res.json())
}

export const updateUser = variables => {
    return fetch(`${BASE_URL}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ variables })
    })
        .then(res => res.json())
}

export const loginUser = variables => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(variables)
    })
        .then(res => res.json())
}

export const getUserById = variables => {
    return fetch(`${BASE_URL}/loginById`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(variables)
    })
        .then(res => res.json())
}