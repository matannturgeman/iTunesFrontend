import { BACKEND_URL_DEV } from '../urls/urls.json'

export const getUsers = () => {
    return fetch(`${BACKEND_URL_DEV}/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
}

export const deleteUser = id => {
    return fetch(`${BACKEND_URL_DEV}/user/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
}

export const addUser = variables => {
    return fetch(`${BACKEND_URL_DEV}/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(variables)
    })
        .then(res => res.json())
}

export const updateUser = variables => {
    return fetch(`${BACKEND_URL_DEV}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ variables })
    })
        .then(res => res.json())
}

export const loginUser = variables => {
    return fetch(`${BACKEND_URL_DEV}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(variables)
    })
        .then(res => res.json())
}

export const getUserById = variables => {
    return fetch(`${BACKEND_URL_DEV}/loginById`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(variables)
    })
        .then(res => res.json())
}