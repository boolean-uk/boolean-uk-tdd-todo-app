class TodoList {
  constructor() {
    this.id = 0
    this.status = 'incomplete'
    this.todoList = []
  }

  create(description) {
    // update the id value.
    this.id++

    const newTodo = {
      id: this.id,
      description: description,
      status: this.status
    }

    this.todoList.push(newTodo)
    return newTodo
  }

  getAll() {
    return this.todoList
  }

  setComplete(id) {
    const todo = this.getTodoById(id)
    if (todo) {
      todo.status = 'complete'
      return true
    } else {
      return false
    }
  }

  getTodoById(id) {
    return this.todoList.find((todo) => todo.id === id)
  }

  getIncomplete() {
    return this.todoList.filter((todo) => todo.status === 'incomplete')
  }

  getComplete() {
    return this.todoList.filter((todo) => todo.status === 'complete')
  }

  delete(id) {
    const index = this.todoList.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      this.todoList.splice(index, 1)
      return true
    } else {
      return false
    }
  }
}

const myTodoList = new TodoList() // Create a new instance of TodoList
myTodoList.create('Wash the dishes')
myTodoList.create('Complete the article')
// console.log(myTodoList.todoList)

myTodoList.getAll()
console.log(myTodoList.getTodoById(1))

// console.log(myTodoList.getIncomplete())

export default TodoList
