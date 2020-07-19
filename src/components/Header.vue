<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <notifications position="left top"/>
    <router-link to="/" class="navbar-brand">Navbar</router-link>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.loginStore.loginSuccess==false">
          <router-link to="/" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.loginStore.loginSuccess!=false">
          <router-link to="/account" class="nav-link">Account</router-link>
        </li>
        <li class="nav-item" v-if="$store.state.loginStore.loginSuccess!=false">
          <div @click="exitUser" class="nav-link">Logout</div>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
  export default {
    name: "Header",
    methods: {
      exitUser() {
        this.$store.commit('exitUser');
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
