<template>
    <div class="container">

<router-link to="/logout">Logout</router-link>
    <h1 class="title">List All Posts</h1>
    <router-view></router-view>
   <table class="table">
       <thead>
           <tr>
               <th>Title </th>
               <th>Content</th>
               <th>Action</th>


           </tr>
       </thead>
       <tbody>
           <tr v-for="post in getposts" :key="post.id">
               <td >{{post.title}}</td>
               <td class="td">{{post.content}}</td>
               <td class="flex__buttons">
                   <router-link :to="{name:'editpost', params:{id:post.id}}" class="btn edit">Edit</router-link>
               <button class="btn delete" @click="deletePost(post)">Delete</button></td>

           </tr>

       </tbody>
   </table>


<div class="form__container">
    <h1 class="title">Create Post</h1>
    <form  @submit.prevent="createPost(post)">
          <div>
              <p class="error" v-if="errors.has('title')">
                           {{errors.first('title')}}
              </p>
               <input placeholder="Enter Post Title" name="title" v-validate="'required'" type="text" v-model="post.title"  >
          </div>

          <div>
             <textarea name="content" v-validate="'required'" placeholder="Enter Post Description"  v-model="post.content" >

             </textarea>
             <p class="error" v-if="errors.has('content')">
                {{errors.first('content')}}
             </p>
          </div>

          <div>
              <button  class="btn post__btn" type="submit">Add Post</button>
          </div>
    </form>

</div>
    </div>
</template>

<script>
 import {mapGetters} from 'vuex';
    export default {

        data(){
        return{
            post:{
                title:'',
                content: ''
            },
            data: ''
        }
        },

        computed:{
       ...mapGetters([
           'getposts'
       ]),

        },
        methods:{
           deletePost(post){
               this.$store.dispatch('deletePost',post)
           },
           createPost(post){
               this.$validator.validateAll().then((result)=>{
                    if(!result){
                        return;
                    }
                    else{
           this.$store.dispatch('createPost',post);
                    }
               });

           },

        },
        mounted(){
            this.$store.dispatch('fetchPosts')


        }
    }
</script>

<style lang="scss" >

*{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}


  .container{
      width: 50%;
      margin: 5rem auto;
  }
    .table{
        border: none;
        border-collapse: collapse;
        width: 100%;

    }
    th,td{
        padding: .5rem;
        border-bottom: 1px solid #ddd;
    }
    tr:nth-child(even){
        background: #f2f2f2;
    }
    th{
        height: 50px;
        text-align: left;


    }

.title{
    color: rgba(17, 23, 12, 0.94);
    padding-bottom: 1.5rem;
}
    .form__container{
        margin-top: 6rem;
    }

   input[type="text"],input[type="email"], input[type="password"] , textarea{
        width: 100%;
         border: none;
    border: 2px sold #eee;
       background: #f2f2f2;
       font-size: 1.2rem;
       margin-top: .5rem;
       height: 40px;
   }

textarea{
    margin-top: 2rem;
}
   input[type="text"]{
       height: 40px;



   }


.error{
    color:rgb(223, 33, 33);
    font-weight: bold;
    padding-bottom: 1rem;
}















    thead{
    background: #43A047;
    color: #FFFFFF;
    border-top: 1px solid #eeeeee;
    }

    .btn{
        color: #FFFFFF;
        border: none;
        padding: .5rem;
        cursor: pointer;
        width: 100%;
        display:inline-block;
        text-decoration: none;

    }
    .edit{
        background: rgb(74, 104, 75);

        &:hover{
            background: #43A047;
        }
    }
    .delete{
        background:  rgb(184, 29, 29);


        &:hover{
            background:rgb(195, 32, 32);
        }
    }

    .flex__buttons{
        display: flex;
    }

    .post__btn{
       background: #43A047;
       color: #FFFFFF;
    }
</style>
