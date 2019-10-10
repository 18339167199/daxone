import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import Shop from '@/components/shop/Shop'
import ProductDetail from '@/components/productdetail/ProductDetail'
import Test from '../components/pagecomponents/main/bestsell2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductDetail
    }
  ]
})
