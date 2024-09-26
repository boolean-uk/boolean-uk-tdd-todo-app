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
    if (todo === '') {
      return false
    }
    console.log(this.todoItems)
    return true
  }

  getAllTodoItems() {
    return this.todoItems
  }

  setTodoComplete(id) {
    const todoItem = this.todoItems.find((item) => item.id === id)
    if (todoItem) {
      todoItem.status = 'complete'
      return true
    } else {
      console.log('the item your are trying to set to complete does not extist')
      return false
    }
  }

  getAlltodoIncompleteItems() {
    return this.todoItems.filter((item) => item.status === 'incomplete')
  }

  getAlltodoCompleteItems() {
    return this.todoItems.filter((item) => item.status === 'complete')
  }

  searchByToDoId(id) {
    if (this.todoItems.find((item) => item.id === id)) {
      console.log(this.todoItems)
      return true
    }
    return false
  }

  deleteTodo(id) {
    if (this.todoItems.find((item) => item.id === id)) {
      this.todoItems = this.todoItems.filter((item) => item.id !== id)
      return true
    }
    return false
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
console.log('set complete:', td.setTodoComplete(3))
console.log('set complete:', td.setTodoComplete(4))
console.log('all todos', td.getAllTodoItems())
console.log('all incomplete', td.getAlltodoIncompleteItems())
console.log('all todos', td.getAllTodoItems())
console.log('all complete', td.getAlltodoCompleteItems())
console.log('search', td.searchByToDoId(1))
console.log('second search', td.searchByToDoId(7))
console.log('delete', td.deleteTodo(1))
console.log('all todos', td.getAllTodoItems())

module.exports = CreateTodoList
