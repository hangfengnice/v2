<template>
  <div class="split-pane">
    <SplitPane :offset.sync="offset">
      <template slot="left">
        leftvalue是
      </template>
      <template slot="right">
        right
      </template>
    </SplitPane>
  </div>
</template>

<script>
import SplitPane from '@/components/pratice/split-pane'
export default {
  name: 'view-split-pane',
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.8
    }
  }
}
</script>

<style lang="css" scoped>
.split-pane {
  width: 400px;
  height: 200px;
  background-color: papayawhip;
}
</style>
