import vue from 'vue'

const mixins = {
  methods: {
    Error_Message(title, text, type) {
      vue.notify({
        title: title,
        text: text,
        type: type
      })
    },
  }
}

export default mixins;
