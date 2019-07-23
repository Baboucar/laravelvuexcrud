<template>
    <div class="container">

        <form action="" class="form__container"  @submit.prevent="submitLogin()" >

            <h1>Please Sign in</h1>
           <div>
             <input type="email" placeholder="Email" v-model="email" >
           </div>

           <div>
            <input type="password" placeholder="Password" v-model="password" >
           </div>

           <div>
                  <button type="submit" class="btn edit">Sign In</button>
           </div>
        </form>

    </div>
</template>

<script>
    export default {

        data(){
            return{
                email:'',
                password: '',

            }
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
