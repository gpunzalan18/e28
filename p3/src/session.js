let favoritesById = localStorage.getItem('favoritesById') ? JSON.parse(localStorage.getItem('favoritesById')) : [];

function saveFavorites() {
    localStorage.setItem('favoritesById', JSON.stringify(favoritesById));
}

export function addToFavorites(id) {
    if (!favoritesById.includes(id)) {
        favoritesById.push(id);
        saveFavorites();
    }
}

export function removeFromFavorites(id) {
    let index = favoritesById.indexOf(id);
    favoritesById.splice(index, 1);
    saveFavorites();
}

export function retrieveFavorites() {
    return favoritesById;
}