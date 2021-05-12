export default {
  functional: true,
  props: {
    name: {
      type: String
    },
    number: {
      type: Number
    },
    renderFunc: {
      type: Function
    }
  },
  render: (h, { props: { name, number, renderFunc } }) => {
    return renderFunc(h, number)
  }
}
