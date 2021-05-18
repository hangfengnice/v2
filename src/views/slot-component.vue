<template>
  <div>
    <slot :item='item'></slot>
  </div>
</template>

<script>
export default {
  name: 'view-slot',
  data () {
    return {
      item: 'from child'
    }
  }
}
</script>

<style>

</style>
