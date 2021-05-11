export default {
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    column: Object,
    index: Number
  },
  render: (h, { props: { row, column, index }, injections: { tableRoot } }) => {
    return h('div', tableRoot.$scopedSlots[column.slot]({
      row,
      index
    }))
  }

}
