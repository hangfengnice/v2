<template>
  <div>
    <i-form :model='formValidate' :rules='ruleValidate'>
      <i-form-item label='用户名' prop='name'>
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
    </i-form>
  </div>
</template>

<script>
import iForm from '@/components/form/form'
import iFormItem from '@/components/form/form-item'
import iInput from '@/components/input/input'

export default {
  name: 'view-form',
  components: {
    iForm,
    iFormItem,
    iInput
  },
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
      }
      // ruleValidate: {
      //   name: [
      //     {require: }
      //   ],
      //   mail: [
      //     {}
      //   ]
      // }
    }
  }
}
</script>

<style>

</style>
