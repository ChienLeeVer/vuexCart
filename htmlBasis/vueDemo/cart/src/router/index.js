import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
const routes = [
    { path:'/', name:'Home', component:Home },
    { path:'/cart', name:'Cart', component:Cart }
]

const router = new VueRouter({
    routes
})

export default router