//import VueRouter from "vue-router";
import Router from 'vue-router';
import List from './components/List';
import Login from './components/Login';
import EditPost from './components/EditPost';
import Logout from './components/Logout';
import Register from './components/Register';
import store from './store';


const routes = new Router({
    mode:'history',
    routes: [
        {
         path:'*',
         redirect:{name:'login'}
        },
        {
        path:'/',
        name:'login',
        component:Login
        },
        {
        path:'/logout',
        name:'logout',
        component:Logout
        },
        {

            path:'/home',
             component:List,
             name:'home',
             meta:{
                 requiresAuth:true
             }
        },
        {
            path:'/register',
            component:Register,
            name:'register'
        },
        {
            path:'/edit/:id',
            component: EditPost,
            name:'editpost'
        },

    ]


})
// export default new VueRouter({
//     routes
// });

routes.beforeEach((to,from,next)=>{
 // check if the route requres authentication and user is not logged in
    if(to.matched.some(route=>route.meta.requiresAuth) && ! store.state.isLoggedIn){
         // redirect ot login if the user is not authenticated
         next({name:'login'})
         return;
    }

    // if the user is logged in rediret to Post list
    if(to.path === '/login' && store.state.isLoggedIn){
        next({name:'home'})
        return;
    }

    // if(to.path === '/register' ){
    //     next({name:'register'})
    //     return;
    // }
    next()

});




export default routes;

