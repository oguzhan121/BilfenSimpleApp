import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);


const moduleForm = {
  state: {
    usersData: {},
    loginSuccess: false,
    message: null
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
            context.commit('setLogin', response.data);
            resolve(response)
          })
          .catch(error => {
            context.commit('messageFunction', 'Hatalı işlem');
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
          state.message = 'Kullanıcı bilgileri hatalı...';
        })
    }
  },
  mutations: {
    messageFunction(state, responseMessage) {
      state.message = responseMessage
    },
    exitUser(state) {
      state.loginSuccess = false;
      state.username = '';
      state.message = 'Çıkış başaralı';
    },
    setLogin(state, response) {
      state.loginSuccess = true;
    },
    setAccount(state, data) {
      state.usersData = data
    },
    updateAccount(state, phone) {
      state.usersData.phone = phone;
    }
  },
};


const vuexLocal = new createPersistedState({
  storage: window.localStorage
});

const store = new Vuex.Store({
  modules: {
    loginStore: moduleForm
  },
  plugins: [vuexLocal]
});

export default store
