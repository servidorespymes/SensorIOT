import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/lectura',
            name: 'lectura',
            component: () => import('./components/SensorList.vue')
        },        

	{
            path: '/add',
            alias: '/sensors',
            name: 'sensors',
            component: () => import('./components/AddCustomer.vue')
        }
        


	
        
        // ,
        // {
        //     path: '/sensors/:id',
        //     name: 'edit-sensor',
        //     component: () => import('./components/Editsensor')
        // },
        // {
        //     path: '/add',
        //     name: 'add-sensor',
        //     component: () => import('./components/Addsensor')
        // }
    ]
})