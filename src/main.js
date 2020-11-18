import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

const firebaseConfig = {
  apiKey: "AIzaSyAQlODwMaNSQMubQBgt1ikrliTJwDo8Z74",
  authDomain: "vue-crm-system-481ef.firebaseapp.com",
  databaseURL: "https://vue-crm-system-481ef.firebaseio.com",
  projectId: "vue-crm-system-481ef",
  storageBucket: "vue-crm-system-481ef.appspot.com",
  messagingSenderId: "181126849170",
  appId: "1:181126849170:web:1d72ed439265547572fc4b",
  measurementId: "G-TQQ0H0S0D9"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

