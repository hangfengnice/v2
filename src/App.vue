<template>
  <div id="app">
    <SlotComponent>
      <template v-slot:default='{item}'>
        {{msg}} item: {{item}}
      </template>
    </SlotComponent>
    <!-- <div v-for="(item, index) in items" :key="index">
      {{item}}
    </div>
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

    <p>
      <el-button type="primary" size="mini" @click="logout">注销</el-button>
    </p>
    <div>
      <h4>实战</h4>
      <el-button v-for="item in practice" :key="item.to" type="primary" size="mini">
        <router-link class="link" :to="item.to">{{item.name}}</router-link>
      </el-button>
    </div> -->

    <router-view></router-view>

  </div>

</template>

<script>
import { setToken } from '@/util/index.js'
import SlotComponent from '@/views/slot-component.vue'

export default {
  name: 'app',
  components: {
    SlotComponent
  },
  data () {
    return {
      practice: [
        {
          name: 'count-to',
          to: '/count-to'
        },
        {
          name: 'split-pane',
          to: '/split-pane'
        },
        {
          name: 'render-page',
          to: '/render-page'
        },
        {
          name: 'menu-page',
          to: '/menu-page'
        },
        {
          name: 'login',
          to: '/login'
        },
        {
          name: 'layout',
          to: '/layout'
        }
      ],
      items: {
        naem: 1,
        age: 1
      },
      msg: 'hell oslot'
    }
  },
  methods: {
    logout () {
      setToken('')
      this.$router.push({ name: 'login' })
    }
  },
  mounted () {
    console.log('env', process.env)
    this.$delete(this.items, 'age')
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
ul {
  padding: 0;
}
li {
  list-style: none;
}
</style>
