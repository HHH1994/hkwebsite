import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index.vue'
import FirstPage from '../page/FirstPage.vue'
import Product from '../page/Product.vue'
import Case from '../page/Case.vue'
import Trends from '../page/Trends.vue'
import AboutUs from '../page/AboutUs.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
        path:'/index',
        redirect:'/index/first-page',
        component:Index,
        children:[
          {
            path:'first-page',
            alias:'index',
            component:FirstPage
          },{
            path:'product',
            component:Product
          },{
            path:'trends',
            component:Trends
          },{
            path:'case',
            component:Case
          },{
            path:'about-us',
            component:AboutUs
          }

        ]
    }
  ]
})
