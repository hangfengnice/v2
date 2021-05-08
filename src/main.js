import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

Vue.config.productionTip = false

const Child = {
  template: '<div class="child">' +
  '<slot text="Hello " :msg="msg"></slot>' +
  '</div>',
  data () {
    return {
      msg: 'Vue'
    }
  }
}

new Vue({
  template: '<div>' +
  '<child>' +
  '<template slot-scope="props">' +
  '<p>Hello from parent</p>' +
  '<p>{{ props.text + props.msg}}</p>' +
  '</template>' +
  '</child>' +
  '</div>',
  components: {
    Child
  }
}).$mount('#app')
