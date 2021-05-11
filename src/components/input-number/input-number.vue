<template>
  <div>
    <button @click="increase(-1)">减 1</button>
    <span>{{val}}</span>
    <span>currentValue: {{currentValue}}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>

<script>
export default {
  name: 'input-number',
  props: {
    val: {
      type: Number
    }
  },
  model: {
    prop: 'val',
    event: 'ch'
  },
  data () {
    return {
      currentValue: this.val
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    }
  },
  methods: {
    increase (val) {
      this.currentValue += val
      this.$emit('ch', this.currentValue)
    }
  }
}
</script>

<style>

</style>
