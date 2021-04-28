import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

const vm = new Vue({
  template: `<ul :class="bindCls" class="list" v-if="isShow">
    <li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li>
  </ul>`,
  data () {
    return {
      bindCls: 'class',
      isShow: true,
      data: ['1', 2],
      message: 'hello Vue',
      single: {
        name: 'hf'
      }
    }
  },
  methods: {
    clickItem () {
    }
  }
  // mounted () {
  //   // this.$set()
  // },
  // router,
  // store,
  // render: h => h(App)
}).$mount('#app')

console.log(vm, vm.$el.__vue__)
