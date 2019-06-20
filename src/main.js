import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Register from './components/Register'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: "/", component: Home},
        {path: "/register", component: Register}
    ],
    mode: "history"
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')