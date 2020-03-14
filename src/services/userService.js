import { BACKEND_URL_DEV } from '../urls/urls.json'

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