import { BACKEND_URL_DEV } from '../urls/urls.json'
console.log('BACKEND_URL_DEV', BACKEND_URL_DEV)

export const getCollections = query => {
    return fetch(`${BACKEND_URL_DEV}/tunes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
        .then(res => res.json())
        .then(data => data.results)
        .catch(err => err)
}