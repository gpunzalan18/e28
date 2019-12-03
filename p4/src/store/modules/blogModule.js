import * as config from "../../config.js";
import * as session from "../../session";

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
            let favoritesById = session.retrieveFavorites();
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
            config.axios.get(config.configURL.BLOG_DETAILS_API).then(response => {
                commit("setBlogDetails", response.data);
                commit("setFavoriteBlogDetails");
            });
        },
        setBlogDetail: function ({ commit }, id) {
            commit("setBlogDetail", null)
            config.axios.get(config.configURL.BLOG_DETAILS_API + '/' + id).then(response => {
                commit("setBlogDetail", response.data);
            });
        },
    }



}