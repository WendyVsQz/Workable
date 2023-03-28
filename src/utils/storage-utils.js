// function for geting local storage value
export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// function for saving local storage value
export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}