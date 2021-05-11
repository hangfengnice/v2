<template>
  <div>
    <CountTo
      @on-animation-end="onAnimationEnd"
      ref="countTo"
      :startVal="0"
      :endVal="endVal"
      :duration="2"
    >
      <template slot="prefix">
        总金额
      </template>
      <template slot="suffix">
        元
      </template>
    </CountTo>
    <el-button @click="onClick" type="primary" size="mini">getCount</el-button>
    <el-button @click="onUpdate" type="primary" size="mini">update</el-button>
  </div>
</template>

<script>
import CountTo from '@/components/pratice/count-to'

export default {
  name: 'view-count-to',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 200
    }
  },
  methods: {
    onClick () {
      console.log(this.$refs.countTo.getCount())
    },
    onUpdate () {
      this.endVal = Math.random() * 100
    },
    onAnimationEnd (textContent) {
      console.log(textContent, 'textContent')
    }
  }
}
</script>

<style></style>
