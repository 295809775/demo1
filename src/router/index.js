import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/Home'
import Search from './../pages/Search'
import Cart from './../pages/Cart'
import Me from './../pages/Me'
import Login from './../pages/Login'
import Register from './../pages/Register'
import Introduce from './../pages/Introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/introduce',
      component: Introduce
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
