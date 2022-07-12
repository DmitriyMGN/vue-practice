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
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
    deleteNote() {
      
    }
  }
  
}
).mount('#app2')