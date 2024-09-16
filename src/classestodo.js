class TodoList {
  constructor() {
    this.id = -1
    this.todoList = []
    this.incompleteTodoList = []
    this.completeTodoList = []
  }

  createTodos(text) {
    this.id++
    const todo = {
      id: this.id,
      text: text,
      status: 'incomplete'
    }
    this.todoList.push(todo)

    return todo
  }

  getAllTodos() {
    return this.todoList
  }

  getIncompleteTodos() {
    // return todoList
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].status === 'incomplete') {
        this.incompleteTodoList.push(this.todoList[i])
      }
    }
    return this.incompleteTodoList
  }

  getCompleteTodos() {
    // return todoList
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].status === 'complete') {
        this.completeTodoList.push(this.todoList[i])
      }
    }
    return this.completeTodoList
  }

  toggleCompleted(id) {
    const target = this.todoList.find((todo) => todo.id === id)
    target.status === 'complete'
      ? (target.status = 'incomplete')
      : (target.status = 'complete')

    return this.todoList
  }

  removeTodo(id) {
    const filteredTodoList = this.todoList.filter((todo) => todo.id !== id)
    const removedTodo = (todo) => todo.id === id

    const index = this.todoList.findIndex(removedTodo)

    if (index === -1) {
      return 'Todo item not found'
    } else {
      const filteredList = filteredTodoList
      return filteredList
    }
  }

  searchTodo(id) {
    const filteredTodoList = this.todoList.filter((todo) => todo.id === id)
    const searchedTodo = (todo) => todo.id === id

    const index = this.todoList.findIndex(searchedTodo)

    if (index === -1) {
      return 'Todo item not found'
    } else {
      const filteredList = filteredTodoList
      console.log('searched:', filteredList)
      return filteredList
    }
  }
}

module.exports = TodoList
