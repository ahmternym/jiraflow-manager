import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import EditTask from '@/components/EditTask.vue'
import AddTask from '@/components/AddTask.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/add',
      name: 'add',
      component: AddTask,
    },
    {
      path: '/editTask/:id',
      name: 'edit',
      component: EditTask,
      props:true
    },
   
  ],
})

export default router
