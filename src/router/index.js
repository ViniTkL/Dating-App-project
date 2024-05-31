import { createRouter, createWebHistory } from 'vue-router'
import OnBoardView from '../views/OnBoardView.vue'
import LoginView from '@/views/SigninView.vue'
import SingupView from '@/views/SingupView.vue'
import ProfileDetailsView from '@/views/ProfileDetailsView.vue'
import IamView from "@/views/IamView.vue"
import passionsView from "@/views/passionsView.vue"
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
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
    },
    {
      path: '/i-am',
      name: 'i-am',
      component: IamView
    },
    {
      path: '/passions',
      name: 'passions',
      component: passionsView
    }
  ]
})

export default router
