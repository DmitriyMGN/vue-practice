Vue.createApp({
  data() {
    return { 
     myHtml: "<h1>Я ГРУТ</h1>",
     title: "Я есть Грут",
     items: [1,2,3,4,5,6,7]
    }
  },
  computed: {
    eventItems() {
      return this.items.filter(i => i % 2 === 0);
    }
  }
  }
  
).mount('#app3')