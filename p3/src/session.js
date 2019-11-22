let favoritesById = [];

function saveFavorites() {
    localStorage.setItem('favoritesById', JSON.stringify(favoritesById))
}

export function addToFavorites(id) {
    let arr = localStorage.getItem('favoritesById');
    if (arr && !arr.includes(id)) {
        favoritesById.push(id)
        saveFavorites()
    }
}

export function removeFromFavorites(id) {
    let index = favoritesById.indexOf(id)
    favoritesById.splice(index, 1)
    saveFavorites()
}

export function retrieveFavorites() {
    let favoritesById = localStorage.getItem('favoritesById');
    return (favoritesById) ? JSON.parse(favoritesById) : [];
}