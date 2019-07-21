<template>
    <div class="container">
        <router-link to="/">Back</router-link>
  <h1>Edit</h1>
  <div class="form__container">
  <form  @submit.prevent ="updatePost(post)" >

      <div>
      <input v-validate="'required'" type="text" v-model="post.title">
      </div>
      <div>
     <textarea name="" id="" cols="30" rows="10" v-model="post.content"></textarea>
      </div>

<div>
       <button class="btn edit">Update</button>
</div>


  </form>
  </div>
    </div>
</template>

<script>
 //import {mapGetters} from 'vuex';
    export default {
       data(){
            return{
                postId: null,
            post:{
                title:'',
                content:''
            }
        }
       },
       computed:{
     ...mapGetters([
         'getposts'
     ])
       },
       mounted(){
           let id =this.$route.params.id;
            this.postId  = id;
            axios.get(`/api/post/${id}`)
            .then((response)=>{
              this.post = response.data.data
             // console.log(response.data)
            }).catch((err)=>{
                console.log(err)
            })

           console.log(id);
       },

        methods:{

       //     updatePost(){
        //      var newpost =  this.post;
        //     //  axios.patch('/api/post/'+this.postId, newpost)
        //     //  .then((response)=>{
        //     //      this.$router.replace('/');
        //     //  }).catch((response)=>{
        //     //      console.log(response);
        //     //  })
        //     // },

        // },

        updatePost(post){
              var newpost =  this.post;
                  this.$store.dispatch('updatePost',{id:this.postId,data:newpost});
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
