<template>
  <Dropdown placement='right'>
    <div>
      <Icon :type='parent.icon' :color='iconColor' size='20'></Icon>
      <span>{{parent.title}}</span>
    </div>

    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown v-if="item.children" :key="item.title" :parent='item' :showTitle='showTitle' :iconColor='iconColor'></re-dropdown>
        <DropdownItem v-else :key="item.title" :name='item.title'>
          <Icon :type='item.icon' color='#515a6e' size='20'></Icon>
          {{item.title}}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 're-dropdown',
  props: {
    parent: {
      type: Object,
      default: () => {}
    },
    iconColor: {
      type: String,
      default: '#515a61'
    },
    showTitle: {
      type: Boolean
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
