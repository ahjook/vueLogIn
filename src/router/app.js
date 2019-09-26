export default {
    routes: [{
        path: '/sidebar',
         name: 'sidebar',
         component: resolve => require(['components/frame/Sidebar.vue'], resolve),
         meta: {
             tokenRequired: false
         }
     },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['components/Form.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['components/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }]
}
