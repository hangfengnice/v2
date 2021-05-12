<template>
  <a-sub-menu>
    <div slot='title'>{{parent.title}}</div>
    <template v-for="item in parent.children">
      <a-menuitem :key="item.title" v-if="!item.children">{{item.title}}</a-menuitem>
      <re-sub-menu :key="item.title" v-else :parent='item'></re-sub-menu>
    </template>
  </a-sub-menu>
</template>

<script>
import AMenuitem from '@/components/pratice/menu-page/a-menu-item'
import ASubMenu from '@/components/pratice/menu-page/a-sub-menu'
export default {
  name: 're-sub-menu',
  components: {
    AMenuitem,
    ASubMenu
  },
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
