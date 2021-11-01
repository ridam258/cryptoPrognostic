import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import PriceDisplay from '../components/PriceDisplay.vue'
import NewsDisplay from '../components/NewsDisplay.vue'
import AlertPage from '../components/AlertPage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:HomePage},
        {path:'/setAlert', component:AlertPage},
        {path:'/prices', component:PriceDisplay},
        {path:'/news', component:NewsDisplay},
        
    ]
  });
export default router
