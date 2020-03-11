export const formatDate = dateStr => new Date(dateStr).toLocaleDateString()

export const saveToStorage = (STORAGE_KEY, data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
export const loadFromStorage = STORAGE_KEY => JSON.parse(localStorage.getItem(STORAGE_KEY))
export const sliceFirst10 = arr => {
    if(arr.length <= 10) return arr
    return arr.slice(0, 10)
}
