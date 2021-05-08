# slot 插槽的实现

## 普通插槽

```js
const AppLayout = {
  template: `<div class="container">
    <header><slot name='header'></slot></header>
    <main><slot>默认内容</slot></main>
    <footer><slot name='footer'></slot></footer>
  </div>`
}

Vue.config.productionTip = false

new Vue({
  template: `<div>
    <AppLayout>
      <h1 slot='header'>{{title}}</h1>
      <p>{{msg}}</p>
      <p slot="footer">{{desc}}</p>
    </AppLayout>
  </div>`,
  data () {
    return {
      title: '我是标题',
      msg: '我是内容',
      desc: '其它信息'
    }
  },
  components: {
    AppLayout
  }
}).$mount('#app')
```

```html
// 最终的dom
<div>
  <div class="container">
    <header><h1>我是标题</h1></header>
    <main><p>我是内容</p></main>
    <footer><p>其它信息</p></footer>
  </div>
</div>
```

编译

parse 阶段

processSlotContent() `src/compiler/parser/index.js`

codegen 阶段

genData() `src/compiler/codegen/index.js`

子组件

parse 阶段

processSlotOutlet()

codegen 阶段

genSlot()

renderSlot() `src/core/instance/render-heplpers/render-slot.js`

`src/core/instance/render.js`

作用域插槽