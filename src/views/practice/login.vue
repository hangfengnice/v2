<template>
  <div>
    userName: <input type="text" v-model="userName">
    password: <input type="password" v-model="password">
    <p>
      <el-button type="primary" size="mini" @click="submit">登录</el-button>
    </p>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'view-login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    submit () {
      const { userName, password } = this
      this.login({ userName, password }).then(() => {
        this.$router.push({
          name: 'count-to'
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>
