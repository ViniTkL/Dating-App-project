import { createRouter, createWebHistory } from 'vue-router'
import OnBoardView from '../views/OnBoardView.vue'
import LoginView from '@/views/SigninView.vue'
import SingupView from '@/views/SingupView.vue'
import ProfileDetailsView from '@/views/ProfileDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/on-board',
      name: 'on-board',
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
    },
    {
      path: '/profile-details',
      name: 'profile-details',
      component: ProfileDetailsView
    }
  ]
})

export default router
