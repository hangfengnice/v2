<template>
  <div>
    <slot></slot>
    <!-- <Menu style="width: auto" theme='dark'>
      <template v-for="item in list">
        <ReSubmenu :parent='item' v-if="item.children" :key="item.title"></ReSubmenu>
        <MenuItem v-else :key="item.title" :name='item.title'>
          <Icon :type='item.icon'></Icon>
          {{item.title}}
        </MenuItem>
      </template>
    </Menu> -->
    <div>
      <template v-for="item in list">
        <ReDropdown v-if="item.children" :key="item.title" :parent='item'>

        </ReDropdown>
        <Tooltip v-else transfer :content='item.title' placement='right' :key="item.title">
          <div class="widht">
            <Icon :type='item.icon' size='20'></Icon>
          </div>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
// import ReSubmenu from './re-submenu'
import ReDropdown from './re-dropdown'
export default {
  name: 'side-menu',
  components: {
    // ReSubmenu,
    ReDropdown
  },
  props: {
    collpased: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang='scss' scoped>
.ivu-tooltip {
  color: #fff;
  text-align: center;
  display: block;
  padding: 5px 0;
}
/deep/ .ivu-tooltip-rel {
  display: block;
}
.widht {
  width: 100%;
}
</style>
