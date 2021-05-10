<template>
  <div>
    <button @click="handleClick">触发事件</button>
    <component-b />
  </div>

</template>

<script>
import Emitter from '@/mixins/emitter.js'
import ComponentB from './b'
export default {
  name: 'component-a',
  components: {
    ComponentB
  },
  mixins: [Emitter],
  created () {
    this.$on('on-b', (text) => {
      console.log(text, 'zai a ')
    })
  },
  methods: {
    handleClick () {
      this.broadcast('component-b', 'on-message', 'hello vue.js')
    }
  }
}
</script>

<style>

</style>
