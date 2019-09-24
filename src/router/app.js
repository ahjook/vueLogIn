export default {
    routes: [{
        path: '/home',
        name: 'home',
        tokenRequired: false,
        component: resolve => requestAnimationFrame(['components/frame/Header.vue'], resolve),
    },{
        path: '/login',
        name: 'login',
        component: resolve => requestAnimationFrame(['components/Form.vue'], resolve),
        meta: {
        tokenRequired: false
    },
    }]
}






// const User = {
//     template: '<div>User</div>'
//   }

//   const router = new VueRouter({
//     routes: [
//       // dynamic segments start with a colon
//       { path: '/user/:id', component: User }
//     ]
//   })