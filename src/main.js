import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

const vm = new Vue({
  template: `<div id="app" @click="changeMsg">
    {{ message }}
  </div>`,
  data () {
    return {
      message: 'hello Vue',
      single: {
        name: 'hf'
      }
    }
  },
  methods: {
    changeMsg () {
      this.message = 'hello hf'
    }
  },
  mounted () {
    // this.$set()
  },
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')

console.log(vm)
