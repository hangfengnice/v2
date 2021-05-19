# Vue2

## python -m SimpleHTTPServer

## 响应式数据

1. 初始化实例的时候 定义了 $data $props `/vue/src/core/instance/state.js`
   Object.defineProperty(Vue.prototype, '$data', dataDef)
  Object.defineProperty(Vue.prototype, '$props', propsDef)

2. \$options `/vue/src/core/instance/init.js`

3. vm.\_data `/vue/src/core/instance/state.js`

4. observe `src/core/observer/index.js`

5. Observer `src/core/observer/index.js`

// 对象 5.1 数组 5.2

5.1 walk

5.2 defineReactive
**`这里 使用了 let childOb = !shallow && observe(val)`**
**递归**

5.3 依赖收集 Dep `src/core/observer/dep.js`

5.4 Wather `src/core/observer/watcher.js`

| 步骤                 |            Dep            |               Watcher                   |
| 渲染函数执行          |                           |   this.get() => pushTarget(this)        |
|                     |         pushTarget        |                                         |
|                     |                           |   value = this.getter.call(vm, vm)      |
|                     |                           |   vm.\_update(vm.\_render(), hydrating) |
                            --defineReactive--
|                     |      dep.depend()         |                                         |
|                     |                           |        Dep.target.addDep(this)          |
|                     |                           |                addDep                   |
|                     |     dep.addSub(this)      |                                         |

5.5 派发更新

childOb = !shallow && observe(newVal)
dep.notify()

dep: subs[i].update()
wather: update()

nexttick ()

queueWatcher

## nexttick

2.6.11

timerFunc

Promise >> MutationObserver >> setImmediate >> setTimeout
