import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import ProductsPage from './components/pages/ProductsPage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import store from './store'

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    { path: '/', component: HomePage, name: "home" },
    { path: '/products', component: ProductsPage, name: "products" },
    { path: '/product/:id', component: ProductPage, name: "product", props: true },
    { path: '/categories', component: CategoriesPage, name: "categories" },
    { path: '/cart', component: CategoriesPage, name: "cart" },
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
