import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../components/Home.vue'
import Welcome from './../components/Welcome.vue'
import Login from './../components/Login.vue'
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      title:"首页"
    },
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: "welcome",
        meta: {
          title:"欢迎页"
        },
        component:Welcome
      },
      {
        path: '/login',
        name: "login",
        meta: {
          title:"登录"
        },
        component:Login
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router