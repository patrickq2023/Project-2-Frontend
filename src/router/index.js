import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClimbListView from '../views/ClimbListView.vue'
import SingleClimbView from '../views/SingleClimbView.vue'
import ClimbEditView from '../views/ClimbEditView.vue'
import UsersCommentsView from '../views/UsersCommentsView.vue'
//import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/climb',
      name: 'climb',
      component: ClimbListView
    },
    
    {
      path: '/climb/:id',
      name: 'singleclimb',   
      component: SingleClimbView  
    },

    {
      path: '/climb/update/:id',
      name: 'editclimb',
      component: ClimbEditView
    },

    {
      path: '/user-comments',
      name: 'userComments',
      component: UsersCommentsView      
    }

    // {
    //   path: '',
    //   name: '',
    //   component: LoginView
    // }
  ]
})

export default router
