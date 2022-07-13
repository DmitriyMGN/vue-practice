Vue.component('todo-item', {
  props: ['oop'],
  template: '<li>{{ oop.text }}</li>'
})

let app = new Vue ({
  el: '#app4',
  data: {
      groceryList: [
      {id: 0, text: 'Огурец'},
      {id: 1, text: 'Помидор'},
      {id: 2, text: 'Тыква'}
    ],
    style: 'color: blue'
    }
})
