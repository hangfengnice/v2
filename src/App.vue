<template>
  <div id="app">
    <div>
      <h4>vue 小册</h4>
      <router-link to='/form'>form.vue</router-link>
      <router-link to='/checkbox'>checkbox.vue</router-link>
      <router-link to='/radio'>radio.vue</router-link>
      <router-link to='/display'>display.vue</router-link>
      <router-link to='/table-render'>table-render.vue</router-link>

      <el-button type="primary" size="mini">
        <router-link class="link" to="/table-render">table-render</router-link>
      </el-button>
      <el-button type="primary" size="mini">
        <router-link class="link" to="/table-slot">table-slot</router-link>
      </el-button>
       <el-button type="primary" size="mini">
        <router-link class="link" to="/table-slot2">table-slot2</router-link>
      </el-button>
      <el-button type="primary" size="mini">
        <router-link class="link" to="/table-slot3">table-slot3</router-link>
      </el-button>
      <el-button type="primary" size="mini">
        <router-link class="link" to="/tree">tree</router-link>
      </el-button>
    </div>

    <div>
      <h4>实战</h4>
      <el-button v-for="item in practice" :key="item.to" type="primary" size="mini">
        <router-link class="link" :to="item.to">{{item.name}}</router-link>
      </el-button>
    </div>

    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      practice: [
        {
          name: 'count-to',
          to: '/count-to'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h4 {
  margin: 8px 0;
}
.link {
  color: #fff;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
