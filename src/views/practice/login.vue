<template>
  <div>
    <input type="text" v-model="userName">
    <input type="password" v-model="password">
    <el-button type="primary" size="mini" @click="submit">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'view-login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    submit () {
      const { userName, password } = this
    }
  }
}
</script>

<style>

</style>
