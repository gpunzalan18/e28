import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/main/HomePage.vue';
import FavoritesPage from './components/main/FavoritesPage.vue';
import BlogpostPage from './components/main/BlogpostPage.vue';
import CreatePage from './components/main/CreatePage.vue'
import store from './store';
import Vuelidate from 'vuelidate';

/* eslint-disable no-unused-vars */
const _ = require('lodash');
/* eslint-enable no-unused-vars */

Vue.use(VueRouter);
Vue.use(Vuelidate)

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: HomePage, name: "home" },
    { path: '/', component: HomePage, name: "cancel" },
    { path: '/favorites', component: FavoritesPage, name: "favorites" },
    { path: '/create', component: CreatePage, name: "create" },
    { path: '/blogpost/:slug', component: BlogpostPage, name: "blogpost", props: true },
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app')
