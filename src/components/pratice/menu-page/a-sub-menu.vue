<template>
  <ul class="sub-menu">
    <div class="sub-title" @click="onClick">
      <slot name="title"></slot>
      <span class="icon" :class="{rotate: !showChild}">^</span>
    </div>
    <div v-show="showChild" class='child'>
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'a-sbu-menu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    onClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang='scss' scoped>
.sub-menu {

}
.sub-title {
  background-color: lightblue;
  color: #fff;
  position: relative;
}
.icon {
  position: absolute;
  right: 10px;
  top: 4px;
}
.rotate {
  transform: translateY(-4px) rotateZ(180deg);
}
.child {
  padding-left: 20px;
}
</style>
