import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

const vm = new Vue({

  template: `<div>
  <input type="text" placeholder='edit me' v-model='message' />
  <p>message is: {{message}}</p>
</div>`,
  data () {
    return {
      message: ''
    }
  }
  // router,
  // store,
  // render: h => h(App)
}).$mount('#app')

console.log(vm)
