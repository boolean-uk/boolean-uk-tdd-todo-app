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
    this.todos.find((todo) => todo.id === id).status === 'incomplete'
      ? (this.todos.find((todo) => todo.id === id).status = 'complete')
      : (this.todos.find((todo) => todo.id === id).status = 'incomplete')
  }

  getCompleteTodos() {
    return this.todos.filter((todo) => todo.status === 'complete')
  }

  getIncompleteTodos() {
    return this.todos.filter((todo) => todo.status === 'incomplete')
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
