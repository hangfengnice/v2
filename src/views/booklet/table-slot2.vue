<template>
  <div>
    <table-slot ref="table" :columns="columns" :data="data">
      <template v-slot:name="{ row, index }">
        <input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>
      <template v-slot:age="{ row, index }">
        <input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>
      <template v-slot:birthday="{ row, index }">
        <input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ getBirthday(row.birthday) }}</span>
      </template>
      <template v-slot:address="{ row, index }">
        <input type="text" v-model="editAddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>
      <template v-slot:action="{ row, index }">
        <div v-if="editIndex === index">
          <button @click="handleSave(index)">保存</button>
          <button @click="editIndex = -1">取消</button>
        </div>
        <div v-else>
          <button @click="handleEdit(row, index)">操作</button>
        </div>
      </template>
    </table-slot>
  </div>
</template>
<script>
import TableSlot from '../../components/table-slot2/table.vue'

export default {
  components: { TableSlot },
  data () {
    return {
      editName: '', // 第一列输入框
      editAge: '', // 第二列输入框
      editBirthday: '', // 第三列输入框
      editAddress: '', // 第四列输入框
      editIndex: -1, // 当前聚焦的输入框的行数
      columns: [
        {
          title: '姓名',
          render: (h, { row, index }) => {
            return h('div', [
              this.$refs.table.$scopedSlots.name({
                row,
                index
              })
            ])
          }
        },
        {
          title: '年龄',
          render: (h, { row, index }) => {
            return h('div', [
              this.$refs.table.$scopedSlots.age({
                row,
                index
              })
            ])
          }
        },
        {
          title: '出生日期',
          render: (h, { row, index }) => {
            return h('div', [
              this.$refs.table.$scopedSlots.birthday({
                row,
                index
              })
            ])
          }
        },
        {
          title: '地址',
          render: (h, { row, index }) => {
            return h('div', [
              this.$refs.table.$scopedSlots.address({
                row,
                index
              })
            ])
          }
        },
        {
          title: '操作',
          render: (h, { row, index }) => {
            return h('div', [
              this.$refs.table.$scopedSlots.action({
                row,
                index
              })
            ])
          }
        }
      ],
      data: []
    }
  },
  methods: {
    handleEdit (row, index) {
      this.editName = row.name
      this.editAge = row.age
      this.editAddress = row.address
      this.editBirthday = row.birthday
      this.editIndex = index
    },
    handleSave (index) {
      this.data[index].name = this.editName
      this.data[index].age = this.editAge
      this.data[index].birthday = this.editBirthday
      this.data[index].address = this.editAddress
      this.editIndex = -1
    },
    getBirthday (birthday) {
      const date = new Date(parseInt(birthday))
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      return `${year}-${month}-${day}`
    }
  },
  mounted () {
    this.data = [
      {
        name: '王小明',
        age: 18,
        birthday: '919526400000',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '张小刚',
        age: 25,
        birthday: '696096000000',
        address: '北京市海淀区西二旗'
      },
      {
        name: '李小红',
        age: 30,
        birthday: '563472000000',
        address: '上海市浦东新区世纪大道'
      },
      {
        name: '周小伟',
        age: 26,
        birthday: '687024000000',
        address: '深圳市南山区深南大道'
      }
    ]
  }
}
</script>
