<template>
  <Dropdown placement='right'>
    <div>
      <Icon :type='parent.icon' size='20'></Icon>
      <span>{{parent.title}}</span>
    </div>

    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown v-if="item.children" :key="item.title" :parent='item'></re-dropdown>
        <DropdownItem v-else :key="item.title" :name='item.title'>
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
    }
  }
}
</script>

<style>

</style>
