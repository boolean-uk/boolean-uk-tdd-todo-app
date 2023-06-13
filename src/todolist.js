class CreateTodoList {
  constructor() {
    this.todoItems = []
    this.id = 1
  }

  createNewTodo(todo) {
    const todoItem = {
      id: this.id++,
      description: todo,
      status: 'incomplete'
    }
    this.todoItems.push(todoItem)
    return this.todoItems
  }

  getAllTodoItems() {
    return this.todoItems
  }

  setTodoComplete(id) {
    const setTodoComplete = this.todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: 'complete'
        }
      } else {
        return item
      }
    })
  }
}

const td = new CreateTodoList()
console.log(td)
td.createNewTodo('study')
console.log(td)
td.createNewTodo('laundry')
console.log(td)
td.createNewTodo('beaching')
console.log(td)
console.log('all todos', td.getAllTodoItems())
console.log('set complete', td.setTodoComplete(3))
console.log('all todos', td.getAllTodoItems())

module.exports = CreateTodoList
