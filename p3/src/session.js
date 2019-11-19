export let blogDetails = {};
export let favoritesById = [];

export function setBlogDetails(data) {
    blogDetails = data;
}
export function getBlogDetails() {
    return blogDetails
}

export function getBlogDetailsById(index) {
    return blogDetails[index - 1]
}

export function addToFavorites(id) {
    favoritesById.push(id)
    saveFavorites()
}

export function saveFavorites() {
    localStorage.setItem('favoritesById', JSON.stringify(favoritesById))
}

export function retrieveFavorites() {
    saveFavorites()
    return localStorage.getItem('favoritesById')
}