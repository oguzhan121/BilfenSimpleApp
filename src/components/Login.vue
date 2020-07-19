<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">

      <!--Error Message-->
      <div class="alert alert-dark" role="alert" v-if="$store.state.loginStore.message!=''">
        {{$store.state.loginStore.message}}
      </div>

      <!-- Login Form -->
      <form>
        <input type="text" class="fadeIn second" v-model="login_email"
               placeholder="Email">
        <input type="password" class="fadeIn third" v-model="login_password"
               placeholder="Password">
        <input type="submit" class="fadeIn fourth" value="Log In" v-on:click.stop.prevent="LoginUser">
      </form>


    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data: function () {
      return {
        login_email: null,
        login_password: null,
      }
    },
    methods: {
      LoginUser: function () {
        this.$store.dispatch('loginPost',{
          email:this.login_email,
          password:this.login_password
        })
        .then(response=>{
          this.$router.push('/account')
        })
      },

    },
  }
</script>


<style scoped>

</style>
