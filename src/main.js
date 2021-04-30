import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// const Child = {
//   template: '<div>' +
//   '<input :value="value" @input="updateValue" placeholder="edit me">' +
//   '</div>',
//   props: ['value'],
//   methods: {
//     updateValue (e) {
//       this.$emit('input', e.target.value)
//     }
//   }
// }

new Vue({
  // template: '<div>' +
  // '<child v-model="message"></child>' +
  // '<p>Message is: {{ message }}</p>' +
  // '</div>',
  // data () {
  //   return {
  //     message: ''
  //   }
  // },
  // components: {
  //   Child
  // }
  render: h => h(App)
}).$mount('#app')
