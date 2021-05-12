<template>
  <div>
    <List :style="{color: 'red'}" :list='list' :render='renderFunc' />
  </div>
</template>

<script>
import List from '@/components/pratice/list/list'
import CountTo from '@/components/pratice/count-to'

export default {
  name: 'render-page',
  components: {
    List
  },
  data () {
    return {
      list: [
        { name: 'hf', number: 10 },
        { name: 'yy', number: 123 }
      ]
    }
  },
  methods: {
    renderFunc (h, number) {
      return (
        <CountTo nativeOn-click={this.handleClick} endVal={number} style={{ color: 'red' }}></CountTo>
      )
    },
    handleClick (event) {
      console.log(event, 'event')
    }
  }
}
</script>

<style>

</style>
