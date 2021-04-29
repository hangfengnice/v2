# 一些疑难点

## 响应式数据理解

由于 Vue 执行一个组件的 render 函数是由 Watcher 去代理执行的，Watcher 在执行前会把 Watcher 自身先赋值给 Dep.target 这个全局变量，等待响应式属性去收集它
这样在哪个组件执行 render 函数时访问了响应式属性，响应式属性就会精确的收集到当前全局存在的 Dep.target 作为自身的依赖
在响应式属性发生更新时通知 Watcher 去重新调用 vm._update(vm._render()) 进行组件的视图更新

## Vue如何检测数组的变化

## Vue中的模版编译

  `src/platforms/web/entry-runtime-with-compiler.js`
  `src/platforms/web/compiler/index.js`
  baseOptions **src/platforms/web/compiler/options**
  createCompiler

  `createCompilerCreator`

  `src/compiler/index.js` 关键

  parseHTML 

## 生命周期钩子怎么实现的

callHook `src/core/instance/lifecycle`

`src/core/instance/init.js`




## Vue.mixin 使用场景跟原理

## Vue.nexttick 在哪里使用, 原理是什么

  为什么 Vue 采用异步渲染 [Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！]( https://segmentfault.com/a/1190000008589736)
  let pending = false
// 存放需要异步调用的任务
const callbacks = []
function flushCallbacks() {
  pending = false
  // 循环执行队列
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]()
  }
  // 清空
  callbacks.length = 0
}

function nextTick(cb) {
  callbacks.push(cb)
  if (!pending) {
    pending = true
    // 利用Promise的then方法 在下一个微任务队列中把函数全部执行
    // 在微任务开始之前 依然可以往callbacks里放入新的回调函数
    Promise.resolve().then(flushCallbacks)
  }
}
测试一下：

// 第一次调用 then方法已经被调用了 但是 flushCallbacks 还没执行
nextTick(() => 🤔console.log(1))
// callbacks里push这个函数
nextTick(() => 🤔console.log(2))
// callbacks里push这个函数
nextTick(() => 🤔console.log(3))

// 同步函数优先执行
console.log(4)

// 此时调用栈清空了，浏览器开始检查微任务队列，发现了 flushCallbacks 方法，执行。
// 此时 callbacks 里的 3 个函数被依次执行。

// 4
// 1
// 2
// 3

## 为什么需要虚拟dom

  轻量和简单  VNode 是对真实 DOM 的一种抽象描述

  几个关键属性，标签名、数据、子节点、键值

## vue中的diff算法原理

  diff算法的时间复杂度

## Vue set 的实现方式， 为什么$set能够进行数据更新

## directive

  vue.directive 源码实现
  如何理解自定义指令

## slot 的实现原理

## keep-alive的原理

## vue 组件之间的传值方式跟区别

## $refs如何实现的

## $attrs 为啥出现 实现 privide inject 不能替代吗

## vue.use 的 原理

## 函数式组件的 优势跟原理

## v-for 跟 v-if 的优先级

## 组件中的name 有什么作用

## vue修饰符 有那些

## vue中使用了啥设计模式

## vue中的computed特定

## vue的事件绑定原理

  processAttrs() `node_modules/vue/src/compiler/parser/index.js`
  addHandler() `src/compiler/helpers.js`

  codegen() `src/compiler/codegen/index.js`

  dom `src/platforms/web/runtime/modules`

  updateDOMListeners ``

  vnode.data.hook 

  initMethods 

## watch中的deep:true 的实现

## vue中的 v-html 会导致什么问题

## v-model的实现原理 以及如何自定义 v-model

`<div><input type="text" placeholder='edit me' v-model='message' /><p>message is: {{message}}</p>
</div>`

## 组件渲染跟更新过程

  _init()
  `src/platform/web/runtime/index.js` 原型上的
  `src/platform/web/entry-runtime-with-compiler.js` 修改了 添加了 编译的部分
  vm.$mount()
  mountComponent() `src/core/instance/lifecycle.js`
  _render() `src/core/instance/render.js`
  createElement() `src/core/vdom/create-element.js`
  _createElement()

  Vue.prototype.__patch__
  `src/platforms/web/runtime/index.js`
  `src/platforms/web/runtime/patch.js`

  patch `src/core/vdom/patch.js`
  
## vue中常见的性能优化

## vue优点

  [网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？](https://www.zhihu.com/question/31809713/answer/53544875)

## checkProp
