<template>
  <ul>
    <li v-for="item in list" :key="item.name">
      <render-func v-if="render" :renderFunc="render" :name="item.name" :number="item.number"></render-func>
      <span v-else>{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
import RenderFunc from './render-dom'
export default {
  name: 'list',
  components: {
    RenderFunc
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function
    }
  }
}
</script>

<style>

</style>
