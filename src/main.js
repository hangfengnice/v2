import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

Vue.mixin({
  created () {
    console.log('parent created')
  }
})

const childComp = {
  template: '<div>{{msg}}</div>',
  created () {
    console.log('child created')
  },
  mounted () {
    console.log('child mounted')
  },
  data () {
    return {
      msg: 'Hello Vue'
    }
  }
}

const vm = new Vue({

  // template: `<div id="app" @click="changeMsg">
  //   {{ message }}
  // </div>`,
  // data () {
  //   return {
  //     message: 'hello Vue',
  //     single: {
  //       name: 'hf'
  //     }
  //   }
  // },
  // methods: {
  //   changeMsg () {
  //     this.message = 'hello hf'
  //   }
  // },
  // mounted () {
  //   // this.$set()
  // },
  // router,
  // store,
  render: h => h(childComp)
}).$mount('#app')

console.log(vm, vm.$el.__vue__)
