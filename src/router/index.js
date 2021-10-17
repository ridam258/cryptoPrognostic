import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AlertPage from '../components/AlertPage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:HomePage},
        {path:'/setAlert', component:AlertPage},
        
    ]
  });
export default router
