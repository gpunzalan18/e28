import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as app from './../app.js';

export default new Vuex.Store({
    state: {
        cartCount: 0,
        products: [],
    },
    mutations: {
        setCartCount: function (state, payload) {
            state.cartCount = payload;
        },
        updateCartCount: function (state, payload) {
            state.cartCount += payload;
        },
        setProducts: function (state, payload) {
            state.products = payload;
        }
    },
    actions: {
        setProducts(context) {
            app.axios.get(app.config.api + 'products').then(response => {
                context.commit('setProducts', response.data);
            });
        }
    }
})