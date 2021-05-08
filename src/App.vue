<template>
  <div id="app">

  </div>

</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      tableData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }]
    }
  },
  mounted () {
    // console.log(this.$refs.table)
    const tr = this.$refs.table.$el.querySelector('.el-table__footer-wrapper tbody tr')
    this.$nextTick(() => {
      const first = tr.firstElementChild
      first.setAttribute('colspan', 2)
      const next = first.nextElementSibling
      tr.removeChild(next)
    })
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      // console.log(row, column, rowIndex, columnIndex)
    }
    // summaryMethod (eve) {
    //   console.log(eve)
    //   // console.log(row, column, rowIndex, columnIndex)
    //   console.log('hello')
    // }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
