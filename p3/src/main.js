import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/main/HomePage.vue';
import FavoritesPage from './components/main/FavoritesPage.vue';
import BlogpostPage from './components/main/BlogpostPage.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: HomePage, name: "home" },
    { path: '/favorites', component: FavoritesPage, name: "favorites" },
    { path: '/blogpost/:id', component: BlogpostPage, name: "blogpost", props: true },
    { path: '*', component: HomePage, name: "home" }

]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
