import { createRouter, createWebHistory } from 'vue-router'
import OnBoardView from '../views/OnBoardView.vue'
import LoginView from '@/views/SigninView.vue'
import SingupView from '@/views/SingupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OnBoardView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SingupView
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: LoginView
    }
  ]
})

export default router
