export default {
  functional: true,
  props: {
    row: {
      type: Object
    },
    column: {
      type: Object
    },
    index: {
      type: Number
    },
    render: {
      type: Function
    }
  },
  render: (h, ctx) => {
    const { row, column, index, render } = ctx.props
    const params = {
      row,
      column,
      index
    }
    return render(h, params)
  }
}
