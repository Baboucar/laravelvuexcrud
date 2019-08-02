<template>
    <div class="container">

      <div class="form__container">
          <h1>Please Register Below</h1>
      <form>
        <div>
          <input  v-model="name" v-validate="'required'" type="text" placeholder="Name"  required >
        </div>

        <div>
          <input  v-model="email" v-validate="'required'" type="email" placeholder="Email"  required>
        </div>
        <div>
          <input  v-model="password" v-validate="'required'" type="password" placeholder="Password"  required>
        </div>
        <div>
          <input v-model="confirm__password" v-validate="'required'" type="text" placeholder="Confirm Password" required>
        </div>


        <div>
          <button class="btn edit" type="submit">Register</button>
          <span><router-link to="/login">Login Here</router-link></span>
        </div>
      </form>
    </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{

                name:'',
                email:'',
                password: '',
                confirmpassword:''
                }

        },
        

    }
</script>

<style lang="scss" scoped>

</style>
