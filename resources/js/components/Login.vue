<template>
    <div class="container">
           <h1>Please Sign in</h1>

        <form action="" class="form__container"  @submit.prevent="submitLogin()" >
              <span class="error">{{ loginError}}</span>

           <div>
             <input type="email" placeholder="Email" v-model="email" >
           </div>

           <div>
            <input type="password" placeholder="Password" v-model="password" >
           </div>

           <div>
                  <button type="submit" class="btn edit">Sign In</button>
                  <router-view></router-view>
                  <span>Register <router-link to="/register">Register</router-link></span>

           </div>
        </form>

    </div>
</template>

<script>
import {mapState}  from 'vuex';
    export default {

        data(){
            return{
                email:'',
                password: '',

            }
        },
        computed:{
           ...mapState([
               'loginError'
           ])
        },
        methods:{
            submitLogin(post){
                this.$store.dispatch('submitLogin',{email:this.email,password:this.password})

            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
