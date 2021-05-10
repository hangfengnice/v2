<template>
  <button @click="handleClick">b 组件</button>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
export default {
  name: 'component-b',
  mixins: [Emitter],
  created () {
    this.$on('on-message', this.showMessage)
  },
  methods: {
    showMessage (text) {
      console.log(text, '在 b 组件')
    },
    handleClick () {
      this.dispatch('component-a', 'on-b', 'from b')
    }
  }
}
</script>

<style>

</style>
