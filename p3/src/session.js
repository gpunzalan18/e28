export let blogDetails = {};
export let favoritesById = [1, 2, 3];

export function setBlogDetails(data) {
    blogDetails = data;
}
export function getBlogDetails() {
    return blogDetails
}

export function getBlogDetailsById(index) {
    return blogDetails[index - 1]
}

export function saveFavorites() {
    localStorage.setItem('favoritesById', JSON.stringify(favoritesById))
}

export function retrieveFavorites() {
    saveFavorites()
    return localStorage.getItem('favoritesById')
}