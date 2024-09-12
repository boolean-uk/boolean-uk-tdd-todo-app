class TodoList {
  constructor() {
    this.todos = []
    this.currentId = 1
  }

  createTodo(description) {
    const todo = {
      id: this.currentId++,
      description,
      completed: false
    }
    this.todos.push(todo)
    return todo
  }

  getAllTodos() {
    return this.todos
  }

  getTodoById(id) {
    return (
      this.todos.find((todo) => todo.id === id) || 'Todo item does not exist'
    )
  }

  setTodoCompleted(id) {
    const todo = this.getTodoById(id)
    if (todo !== 'Todo item does not exist') {
      todo.completed = true
    }
    return todo
  }

  getIncompleteTodos() {
    return this.todos.filter((todo) => !todo.completed)
  }

  getCompleteTodos() {
    return this.todos.filter((todo) => todo.completed)
  }

  removeTodoById(id) {
    const index = this.todos.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      this.todos.splice(index, 1)
      return true
    }
    return false
  }
}

module.exports = TodoList
