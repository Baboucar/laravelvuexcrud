import Vue from 'vue';
import Vuex from 'vuex';
import routes from './routes.js';
Vue.use(Vuex);


export default new Vuex.Store({
     state: {
         posts: [],
         isLoggedIn: !!localStorage.getItem('token')
    },
    getters:{
        getposts:state=>{
            return state.posts;
        }
    },

   mutations:{
       CREATE_POST(state,post){
           state.posts.unshift(post)
       },
       FETCH_POSTS(state,post){
         return state.posts = post;
       },
       UPDATE_POST(state,payload){
          state.posts =  state.posts.map(post=>{
              if(post.id === payload.id){
                  return Object.assign({},post,payload.data)
              }
          })
       },
       DELETE_POST(state,post){
           let index = state.posts.findIndex(item=>item.id ==post.id);
           state.posts.splice(index,1);
       },
       LOGIN_USER(state){
           state.isLoggedIn = true
       },
       LOGOUTUSER(state){
           state.isLoggedIn = false
       }
   },
    actions:{
        createPost({commit}, post){
            axios.post('/api/post',post)
            .then(response=>{
                commit('CREATE_POST',response.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        fetchPosts({commit}){
            axios.get('/api/post')
            .then(response=>{
                commit('FETCH_POSTS',response.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        updatePost({commit},payload){
          axios.patch('/api/post/'+payload.id, payload.data)
         .then(response=>{
             commit('UPDATE_POST',payload);
             routes.push({ name:'home'})
               //this.$router.replace('/');

         }).catch(error=>{
             console.log(error)
         })
        },
        deletePost({commit},post){
            axios.delete(`/api/post/${post.id}`)
            .then(response=>{
                if(response.data == 'ok'){
                    commit('DELETE_POST',post)
                }
            }).catch(error=>{
                console.log(err)
            })
        },
        submitLogin({commit},payload){
            axios.post('/api/auth/login',{
                email:payload.email,
                password:payload.password
            }).then(response=>{
                commit('LOGIN_USER',payload)
                localStorage.setItem('token',response.data.token);
                   routes.push({name:'home'})
            }).catch(error=>{
                console.log(error)
            })
        },
        logout({commit}){
            localStorage.removeItem('token')
             commit('LOGOUTUSER')
             routes.push({name:'login'})
        }

    }
})
