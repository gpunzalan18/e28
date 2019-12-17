export default class LocalStorageHandler {
    constructor() {
        
        let favoritesById = localStorage.getItem('favoritesById');

        this.favoritesById = (favoritesById) ? JSON.parse(favoritesById) : [];
    }

    saveFavorites() {
        localStorage.setItem('favoritesById', JSON.stringify(this.favoritesById));
    }

    retrieveFavorites() {
        return this.favoritesById;
    }

    removeFromFavorites(id) {
        let index = this.favoritesById.indexOf(id);
        this.favoritesById.splice(index, 1);
        this.saveFavorites();
    }

    addToFavorites(id) {
        if (!this.favoritesById.includes(id)) {
            this.favoritesById.push(id);
            this.saveFavorites();
        }
    }
}