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
          <input v-model="password_confirmation" v-validate="'required'" type="password" placeholder="Confirm Password" required>
             <span class="error">{{errorMessage}}</span>
        </div>


        <div>
          <button class="btn edit" type="submit"  @click="handleSubmit">Register</button>
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
                password_confirmation:'',
                errorMessage: ""
                }

        },
        methods:{
            handleSubmit(e){
                e.preventDefault();

              if(this.password !== this .password_confirmation || this.password.length <= 0){
                    this.password = "";
                    this.password_confirmation= "";
                  this.errorMessage = "sorry the passwords you enterd does not match";
              }
            }
        }


    }
</script>

<style lang="scss" scoped>

.error{
    color:red;
    display: block;
    margin-top: .5rem;
}

</style>
