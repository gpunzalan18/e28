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
        addPost(state, payload) {
            _.merge(state.blogDetails, payload)
        },
        setFavoriteBlogDetails(state) {
            let localStorageHandler = new app.LocalStorageHandler();
            let favoritesById = localStorageHandler.retrieveFavorites();
            let arr = [];
            for (let slug of favoritesById) {
                let blogDetail = _.find(state.blogDetails, { 'slug': slug })
                if (!blogDetail) continue;
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
    },
    getters: {
        blogDetail(state) {
            return function (slug) {
                let blogDetail = _.find(state.blogDetails, { 'slug': slug })
                return blogDetail
            }
        }
    }
}