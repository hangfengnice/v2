<template>
  <div class="split-pane-wrapper" ref="outer">
    <div
      class="pane pane-left"
      :style="{ width: leftOffsetPercent, paddingRight: `${trigger / 2}px` }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="trigger"
      @mousedown="onMousedown"
      :style="{ left: triggerLeft, width: `${trigger}px` }"
    ></div>
    <div
      class="pane pane-right"
      :style="{ left: leftOffsetPercent, paddingLeft: `${trigger / 2}px` }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'split-pane',
  props: {
    offset: {
      type: Number,
      default: 0.3
    },
    trigger: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.offset * 100}%`
    },
    triggerLeft () {
      const { trigger, offset } = this
      return `calc(${offset * 100}% - ${trigger / 2}px)`
    }
  },
  methods: {
    onMousedown ({ target, pageX }) {
      this.initOffset = pageX - target.getBoundingClientRect().left
      document.addEventListener('mousemove', this.onMousemove)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', this.onMousemove)
      })
    },
    onMousemove (event) {
      const { initOffset, trigger, min, max } = this

      const outerRect = this.$refs.outer.getBoundingClientRect()

      const offset = event.pageX - outerRect.left - initOffset + trigger / 2
      let offsetPersent = offset / outerRect.width
      if (offsetPersent <= min) {
        offsetPersent = min
      } else if (offsetPersent >= max) {
        offsetPersent = max
      }
      this.$emit('update:offset', offsetPersent)
    }
  }
}
</script>

<style lang="scss" scoped>
.split-pane-wrapper {
  height: 100%;
  position: relative;
}
.pane {
  height: 100%;
}
.pane-left,
.pane-right {
  position: absolute;
}
.pane-left {
  background: palevioletred;
}
.pane-right {
  right: 0;
  left: 30%;
  top: 0;
  background: paleturquoise;
}
.trigger {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  background: red;
  user-select: none;
  cursor: col-resize;
}
</style>
