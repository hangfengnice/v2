<template>
  <div>
    <button @click="handleClick">触发事件</button>
    <component-b />
  </div>

</template>

<script>
import Emitter from '@/mixins/emitter.js'
import ComponentB from './b'

import { findBrothersComponents } from '@/util/assist.js'

export default {
  name: 'component-a',
  components: {
    ComponentB
  },
  mixins: [Emitter],
  data () {
    return {
      a: 'a.vue li de data. a'
    }
  },
  created () {
    this.$on('on-b', (text) => {
      console.log(text, 'zai a ')
    })
  },
  mounted () {
    // const child = findComponentDownward(this, 'component-b')
    // if (child) {
    //   console.log(child, child.name, 'childb')
    // }
    // const childs = findComponentsDownward(this, 'component-b')

    // console.log(childs, 'cilds')
    const brothers = findBrothersComponents(this, 'component-a', false)

    console.log(brothers, 'brothers')
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
