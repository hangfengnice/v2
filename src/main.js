import Vue from 'vue'
// import App from './App.vue'
// import AppTest from './App-test.vue'
// import router from './router'
// import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
Vue.use(ElementUI)
// Vue.use(ViewUI)

Vue.config.productionTip = false
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

const Child = {
  name: 'child',
  template:
    '<div><span>{{ localMsg }}</span><button @click="change">click</button></div>',
  data: function () {
    return {
      localMsg: this.msg
    }
  },
  props: {
    msg: String
  },
  methods: {
    change () {
      this.$emit('update:msg', 'world')
    }
  }
}

const app = new Vue({
  el: '#app',
  template: '<child :msg.sync="msg"><child>',
  beforeUpdate () {
    alert('update twice')
  },
  data () {
    return {
      msg: 'hello'
    }
  },
  components: {
    Child
  }
})

console.log(app)
