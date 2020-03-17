import { BACKEND_URL_DEV, BACKEND_URL_PROD } from '../urls/urls.json'
import { loadFromStorage, saveToStorage, sliceFirst10 } from './utilsService'

const isDev = process.env.REACT_APP_ENV === 'dev'
const BASE_URL = isDev ?
    BACKEND_URL_DEV
    : BACKEND_URL_PROD

const STORAGE_KEY = 'ITUNES_APP'

export const getCollections = query => {
    return fetch(`${BASE_URL}/tunes`, {
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

export const getTop10Searches = () => loadFromStorage(STORAGE_KEY) || []
export const setTop10Searches = data => saveToStorage(STORAGE_KEY, data)


export const addTop10 = search => {
    let searches = getTop10Searches() || []
    searches.unshift(search)
    searches = sliceFirst10(searches)
    setTop10Searches(searches)
}

