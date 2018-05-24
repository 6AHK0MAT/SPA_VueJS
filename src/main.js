import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyAODf23hILG-x-Ga2uuIoW3ZM4vWPffQEI',
      authDomain: 'itc-ad-mib.firebaseapp.com',
      databaseURL: 'https://itc-ad-mib.firebaseio.com',
      projectId: 'itc-ad-mib',
      storageBucket: 'itc-ad-mib.appspot.com',
      messagingSenderId: '730580896901'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
