import Vue from 'vue'
import Router from 'vue-router'
// import { MachineInventoryRoutes } from '../components/MachineInventory/MachineInventoryRouter'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Index from '@/components/MachineInventory/Index'
import Add from '@/components/MachineInventory/Add'
import Edit from '@/components/MachineInventory/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/machine-inventory/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/machine-inventory/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/machine-inventory/add',
      name: 'Add',
      component: Add
    }
  ]
})
