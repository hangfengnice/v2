<template>
  <Layout class="outer">
    <Sider collapsible hide-trigger v-model="collapsed">
      <SideMenu :collapsed='collapsed' :list='list'></SideMenu>
    </Sider>
    <Layout>
      <Header class="header">
        <Icon :class="collaseClass" @click.native="onCollapsed" type='md-menu' size='32'></Icon>
      </Header>
      <Content></Content>
    </Layout>
  </Layout>
</template>

<script>
import SideMenu from '@/components/pratice/side-menu/side-menu'
export default {
  name: 'view-layout',
  components: {
    SideMenu
  },
  data () {
    return {
      collapsed: false,
      list: [
        {
          title: '111',
          icon: 'ios-alarm'
        },
        {
          title: '222',
          icon: 'ios-alarm'
        },
        {
          title: '333',
          icon: 'ios-alarm',
          children: [
            {
              title: '333-1',
              icon: 'ios-alarm',
              children: [
                {
                  title: '333-1-1',
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    collaseClass () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  },
  methods: {
    onCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang='scss' scoped>
.outer {
  height: 200px;
}
.header {
  padding: 0 22px;
  background: #fff;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
}
.trigger-icon {
  transition: transform .3s ease;
  cursor: pointer;
}
.rotate {
  transform: rotate(90deg);
}
</style>
