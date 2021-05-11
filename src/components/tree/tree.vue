<template>
  <div>
    <TreeNode
      v-for="(item, index) in cloneData"
      :key="index"
      :data='item'
      :show-checkbox='showCheckbox'
    ></TreeNode>
  </div>
</template>

<script>
import TreeNode from './node'
import { deepCopy } from '@/util/assist.js'

export default {
  name: 'tree',
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cloneData: []
    }
  },
  created () {
    this.rebuildData()
  },
  methods: {
    rebuildData () {
      this.cloneData = deepCopy(this.data)
    },
    emitEvent (eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    }
  }
}
</script>

<style>

</style>
