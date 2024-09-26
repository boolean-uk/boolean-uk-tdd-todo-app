class TodoItem {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.status = 'incomplete'
  }
}

class TodoList {
  constructor(todos) {
    this.todos = todos
  }

  createNewTodo(text) {
    const newTodo = new TodoItem(this.todos[this.todos.length - 1].id + 1, text)
    this.todos.push(newTodo)
  }

  getAllTodos() {
    return this.todos
  }

  updateTodoStatus(id) {
    const target = this.todos.find((todo) => todo.id === id)
    target.status === 'incomplete'
      ? (target.status = 'complete')
      : (target.status = 'incomplete')
  }

  getCompletedTodos() {
    const arr = this.todos.filter((todo) => todo.status === 'complete')
    return arr
  }

  getIncompleteTodos() {
    const arr = this.todos.filter((todo) => todo.status === 'incomplete')
    return arr
  }

  getTodoById(id) {
    return this.todos.find((todo) => todo.id === id)
      ? this.todos.find((todo) => todo.id === id)
      : 'does not exist'
  }

  removeTodoById(id) {
    let removeIndex = null
    this.todos.find((todo, index) =>
      todo.id === id ? (removeIndex = index) : null
    )
    this.todos.splice(removeIndex, 1)
  }
}

module.exports = {
  TodoItem,
  TodoList
}
