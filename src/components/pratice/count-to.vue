<template>
  <div>
    <slot name="prefix"></slot>
    <span ref="count" :id="eleId"></span>
    <slot name="suffix"></slot>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
  name: 'count-to',
  computed: {
    eleId () {
      return `count-up-${this._uid}`
    }
  },
  props: {
    delay: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    startVal: {
      type: Number,
      default: 0
    },
    decimalPlaces: {
      type: Number,
      default: 2
    },
    duration: {
      type: Number,
      default: 2
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    smartEasingThreshold: {
      type: Number,
      default: 999
    },
    separator: {
      type: String,
      default: ','
    },
    decimal: {
      type: String,
      default: '.'
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      counter: null
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.counter.update(newVal)
      }
    }
  },
  mounted () {
    this.initial()
  },
  methods: {
    getCount () {
      return this.$refs.count.textContent
    },
    initial () {
      const {
        delay,
        endVal,
        startVal,
        decimalPlaces,
        duration,
        useGrouping,
        useEasing,
        smartEasingThreshold,
        prefix,
        suffix,
        eleId
      } = this

      const counter = (this.counter = new CountUp(eleId, endVal, {
        startVal,
        decimalPlaces,
        duration,
        useGrouping,
        useEasing,
        smartEasingThreshold,
        prefix,
        suffix
      }))
      setTimeout(() => {
        counter.start(() => {
          this.complete()
        })
      }, delay)
    },
    complete () {
      this.$emit('on-animation-end', this.getCount())
    }
  }
}
</script>

<style></style>
