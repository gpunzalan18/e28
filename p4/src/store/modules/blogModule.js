import * as app from "../../config.js";

export const blogModule = {
    state: {
        blogDetails: null,
        favoriteBlogDetails: null,
        blogDetail: null
    },
    mutations: {
        setBlogDetails(state, payload) {
            state.blogDetails = payload;
        },
        setBlogDetail(state, payload) {
            state.blogDetail = payload;
        },
        setFavoriteBlogDetails(state) {
            let localStorageHandler = new app.LocalStorageHandler();
            let favoritesById = localStorageHandler.retrieveFavorites();
            let arr = [];
            for (var i = 0; i < favoritesById.length; i++) {
                let index = favoritesById[i];
                let blogDetail = state.blogDetails[index - 1];
                arr.push(blogDetail);
            }
            state.favoriteBlogDetails = arr;
        }
    },
    actions: {
        setBlogData: function ({ commit }) {
            app.axios.get(app.configURL.BLOG_DETAILS_API).then(response => {
                commit("setBlogDetails", response.data);
                commit("setFavoriteBlogDetails");
            });
        },
        setBlogDetail: function ({ commit }, id) {
            commit("setBlogDetail", null)
            app.axios.get(app.configURL.BLOG_DETAILS_API + '/' + id).then(response => {
                commit("setBlogDetail", response.data);
            });
        },
    }

}