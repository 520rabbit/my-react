import Login from '@/pages/login'
import Module from '@/pages/module'
const routes = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/module',
    component: Module
  }
]

export default routes