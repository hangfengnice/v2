import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

const Child = {
  template: '<button @click="clickHandler($event)">' +
  'click me' +
  '</button>',
  methods: {
    clickHandler (e) {
      console.log('Button clicked!', e)
      this.$emit('select')
    }
  }
}

const vm = new Vue({
  components: {
    Child
  },
  template: '<div>' +
    '<child @hook:created="onCreated" @select="selectHandler" @click.native.prevent="clickHandler"></child>' +
  '</div>',
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
    clickHandler () {
      console.log('Child clicked!')
    },
    selectHandler () {
      console.log('Child select!')
    },
    onCreated () {
      console.log('created')
    }
  }
  // router,
  // store,
  // render: h => h(App)
}).$mount('#app')

console.log(vm)
