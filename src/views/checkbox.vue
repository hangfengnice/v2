<template>
  <div>
    <i-checkbox v-model="single" ></i-checkbox>

    <div>checkboxGroup</div>

    <i-checkbox-group v-model="multiple">
        <i-checkbox label="option1">选项 1</i-checkbox>
        <i-checkbox label="option2">选项 2</i-checkbox>
        <i-checkbox label="option3">选项 3</i-checkbox>
        <i-checkbox label="option4">选项 4</i-checkbox>
    </i-checkbox-group>
  </div>
</template>

<script>
import iCheckboxGroup from '@/components/checkbox/checkbox-group'
import iCheckbox from '@/components/checkbox/checkbox'
export default {
  name: 'checkbox',
  components: {
    iCheckboxGroup,
    iCheckbox
  },
  data () {
    return {
      single: true,
      multiple: ['option1']
    }
  }

}
</script>

<style>

</style>
