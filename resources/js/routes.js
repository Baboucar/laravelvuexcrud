import VueRouter from "vue-router";
import List from './components/List';
import EditPost from './components/EditPost';

let routes  = [
    {

        path:'/',
         component:List,
         name:'home'
    },
    {
        path:'/edit/:id',
        component: EditPost,
        name:'editpost'
    }
]


export default new VueRouter({
    routes
});
