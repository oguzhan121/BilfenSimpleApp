<template>

  <div class="container">
    <div class="row">

      <div class="col-md-8 offset-md-2">
        <div class="card card-outline-secondary">
          <div class="card-header">
            <h3 class="mb-0">User Account</h3>
          </div>

          <div class="card-body">
            <form class="form" role="form" autocomplete="off">
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Phone</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" v-model="phone">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Address City</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" v-model="$store.state.loginStore.usersData.address.city">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Address Street</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" v-model="$store.state.loginStore.usersData.address.street">
                </div>
              </div>

              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Zipcode</label>
                <div class="col-lg-9">
                  <input class="form-control" type="text" v-model="$store.state.loginStore.usersData.address.zipcode">
                </div>
              </div>


              <input type="submit" class="fadeIn fourth" value="update" v-on:click.stop.prevent="updateForm">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Account",
    data() {
      return {
        phone: this.$store.state.loginStore.usersData.phone
      }
    },

    mounted() {
      this.loggedInuserControl();
      this.$store.dispatch('accountGet');
    },
    methods: {
      loggedInuserControl() {
        if (this.$store.state.loginStore.loginSuccess == false) {
          this.$store.commit('accounErrorMessage'),
            this.$router.push('/')
        }
      },
      updateForm() {
        this.$store.commit('updateAccount', this.phone)
      }
    }
  }
</script>

<style scoped>

</style>
