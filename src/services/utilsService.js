export const formatDate = dateStr => new Date(dateStr).toLocaleDateString()

export const saveToStorage = (STORAGE_KEY, data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
export const clearFromStorage = STORAGE_KEY => localStorage.removeItem(STORAGE_KEY)
export const loadFromStorage = STORAGE_KEY => JSON.parse(localStorage.getItem(STORAGE_KEY))

export const sliceFirst10 = arr => {
    if (arr.length <= 10) return arr
    return arr.slice(0, 10)
}
export const copy = data => JSON.parse(JSON.stringify(data))

export const isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function getKeysFromList(list){
    let keys = {};

    list.forEach(item => {
        Object.keys(item).forEach(key => {
            keys[key] = true
        })        
    })
    return Object.keys(keys)
}