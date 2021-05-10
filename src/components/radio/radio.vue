<template>
  <label>
    <span>
      <input
        v-if="group"
        type="radio"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change"
      />
      <input
        v-else
        type="radio"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change"
      />
    </span>
    <slot></slot>
  </label>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
import { findComponentUpward } from '@/util/assist.js'

export default {
  name: 'iCheckbox',
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      group: false,
      parent: null
    }
  },
  computed: {
    model: {
      get () {
        if (this.group) {
          return this.parent.value
        } else {
          return this.value
        }
      },
      setter () {

      }
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'iRadioGroup')

    if (this.parent) {
      this.group = true
    }
    if (this.parent) {
      this.parent.updateModel(true)
    }
  },
  methods: {
    change (event) {
      if (this.disabled) return false
      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue

      this.$emit('input', value)

      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    }
  }
}
</script>

<style></style>
