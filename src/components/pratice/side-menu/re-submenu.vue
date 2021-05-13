<template>
  <Submenu :name='parent.title'>
    <template slot='title'>
      <Icon :type='parent.icon'></Icon>
      {{parent.title}}
    </template>
    <template v-for="item in parent.children">
        <re-submenu v-if="item.children" :parent='item' :key="item.title"></re-submenu>
        <menu-item v-else :key='item.title' :name='item.title'>
          <Icon :type='item.icon'></Icon>
          {{item.title}}
        </menu-item>
      </template>
  </Submenu>
</template>

<script>
export default {
  name: 're-submenu',
  props: {
    parent: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
