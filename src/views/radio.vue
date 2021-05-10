<template>
  <div>
    <div>radio</div>

    <div>radio-</div>
    <i-radio v-model="radio"></i-radio>

     <el-radio v-model="radio" label="1">备选项</el-radio>
      <!-- <el-radio v-model="radio" label="2">备选项</el-radio> -->

    <div>radio-group</div>
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import iRadio from '@/components/radio/radio'

export default {
  name: 'radio-vue',
  components: {
    iRadio
  },
  data () {
    return {
      radio: ''
    }
  }
}
</script>

<style>

</style>
