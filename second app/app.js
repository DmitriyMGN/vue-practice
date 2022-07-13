Vue.createApp({
  data() {
    return { 
      counter: 0,
      title: "Счетчик",
      myPlaceHolder: "Введите название задачи",
      inputValue: "",
      notes: []
    }
  },
  methods: {
    inputHandler(e)  {
      this.inputValue = e.target.value
    },
    submitHandler() {
      if(this.inputValue !== '') {
      this.notes.push(this.inputValue);
      this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  }
  
}
).mount('#app2')