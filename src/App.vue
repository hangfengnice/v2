<template>
  <div id="app">
    <div>
      <router-link to='/form'>form.vue</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
let index = 1
export default {
  name: 'app',
  provide () {
    return {
      app: this
    }
  },
  data () {
    return {
      userInfo: null
    }
  },
  methods: {
    getUserInfo () {
      setTimeout(() => {
        this.userInfo = index++
      })
    }
  },
  mounted () {
    this.getUserInfo()
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
