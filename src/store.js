import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import mixins from "./mixins";

Vue.use(Vuex);


const moduleForm = {
  state: {
    usersData: {},
    loginSuccess: false
  },
  actions: {
    loginPost(context, credentials) {

      return new Promise((resolve, reject) => {
        axios
          .post('https://reqres.in/api/login', {
            email: credentials.email,
            password: credentials.password,
          })
          .then(response => {
            context.commit('setLogin');
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    accountGet({commit}) {
      axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(data => {
          let posts = data.data
          commit('setAccount', posts)
        })
        .catch(error => {
        })
    }
  },
  mutations: {
    exitUser(state) {
      state.loginSuccess = false;
      state.username = '';
      mixins.methods.Error_Message('Çıkış', 'Başarılı', 'success')
    },
    setLogin(state, response) {
      mixins.methods.Error_Message('Giriş başarılı', 'Aktif', 'success')
      state.loginSuccess = true;
    },
    setAccount(state, data) {
      state.usersData = data
    },
    updateAccount(state, phone) {
      mixins.methods.Error_Message('Güncelleme', 'Başarılı', 'success')
      state.usersData.phone = phone;
    },
    loginErrorMessage() {
      mixins.methods.Error_Message('Hatalı işlem', 'Tekrar deneyiniz', 'error')
    },
    accounErrorMessage(){
      mixins.methods.Error_Message('Hatalı işlem', 'Giriş yapınız', 'error')
    }
  },
};


const vuexLocal = new createPersistedState({
  storage: window.localStorage
});

const store = new Vuex.Store({
  mixins: [mixins],
  modules: {
    loginStore: moduleForm
  },
  plugins: [vuexLocal]
});

export default store
