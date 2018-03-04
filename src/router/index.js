import VueRouter from 'vue-router'
import queues from '../components/queues'
import agents from '../components/agents'
import account from '../components/account'
import login from '../components/login'
import home from '../components/Home'
import Vue from 'vue'


// Configure routes for all Applets



Vue.use(VueRouter)

// Instantiate `router`
export default
     new VueRouter({
        routes:[
            {
                path: '/',
                name: 'Home',
                component: agents,
                meta: {
                    permission: 'admin',
                    fail: '/login'
                }
            },
            {
                path: '/Agents',
                name: 'Home',
                component: agents,
                meta: {
                    permission: 'admin',
                    fail: '/login'
                }
            },
            {
                path: '/Queues',
                name:'Home',
                component:queues,
                meta: {
                    permission: 'admin',
                    fail: '/login'
                }
            },
            {
                path: '/Profile',
                name:'Home',
                component:account,
                meta: {
                    permission: 'admin',
                    fail: '/login'
                }
            },
            {
                path: '/login',
                name:'Login',
                component:login,
                meta: {
                    permission: 'public',
                    fail: '/login'
                }
            }
        ]
        ,
        mode: 'history'
    })