<template>
  <div class="menu-box">
    <a-menu>
      <template v-for="item in list">
        <a-menuitem v-if="!item.children" :key="item.title">
          {{item.title}}
        </a-menuitem>

        <re-sub-menu v-else :key="item.title" :parent='item'></re-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import AMenu from '@/components/pratice/menu-page/a-menu'
import AMenuitem from '@/components/pratice/menu-page/a-menu-item'
// import ASubMenu from '@/components/pratice/menu-page/a-sub-menu'
import ReSubMenu from '@/components/pratice/menu-page/re-sub-menu'
export default {
  name: 'view-menu-page',
  components: {
    AMenu,
    AMenuitem,
    // ASubMenu,
    ReSubMenu
  },
  data () {
    return {
      list: [
        {
          title: '111'
        },
        {
          title: '222'
        },
        {
          title: '333',
          children: [{ title: '333-1' }, {
            title: '333-2',
            children: [
              {
                title: '333-2-1'
              }
            ]
          }]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-box {
  height: 400px;
  width: 300px;
}
</style>
