<template>
  <div ref='boo'>
    inject: {{app.userInfo}}
    <button @click="handleEmitEvent">触发自定义事件</button>
    <ComponentA ref='compoenta' @hook:created='onCreated' />
  </div>
</template>

<script>
import ComponentA from './a'
export default {
  name: 'inject',
  inject: ['app'],
  components: {
    ComponentA
  },
  mounted () {
    console.log(this.$root)
    this.$on('test', (text) => {
      console.log(text, '组件本事的触发')
    })
  },
  data () {
    return {
      app: 'hello'
    }
  },
  watch: {
    // app: {
    //   deep: true,
    //   immedia
    // }
  },
  methods: {
    handleEmitEvent () {
      this.$emit('test', 'hello test')
    },
    onCreated () {
      console.log('crated')
    }
  }
}
</script>

<style>

</style>
