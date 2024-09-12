class TodoList {
  constructor() {
    this.todos = []
  }

  createUniqueId() {
    let uniqueId = this.todos.length + 1

    while (this.todos.filter((todo) => todo.id === uniqueId)[0]) {
      uniqueId += 1
    }

    return uniqueId
  }

  newTodo(text) {
    if (!text || text === '') return false

    const newId = this.createUniqueId()
    const newTodo = {
      id: newId,
      text: text,
      checked: false
    }

    this.todos.push(newTodo)
    return newTodo
  }

  getAllTodos() {
    return this.todos
  }

  getIncompleteTodos() {
    const incompleteList = this.todos.filter((todo) => !todo.checked)
    return incompleteList
  }

  getCompleteTodos() {
    const completeList = this.todos.filter((todo) => todo.checked)
    return completeList
  }

  updateTodo(id, checked) {
    if (typeof id !== 'number') return false

    const todo = this.todos.filter((todo) => todo.id === id)[0]
    if (!todo) return false
    const todoIndex = this.todos.indexOf(todo)

    if (this.todos[todoIndex] === undefined) return false
    if (typeof checked !== 'boolean') return false

    this.todos[todoIndex].checked = checked
  }

  searchById(id) {
    if (typeof id !== 'number') return false

    const todo = this.todos.filter((todo) => todo.id === id)[0]
    if (!todo) return false
    const todoIndex = this.todos.indexOf(todo)

    if (this.todos[todoIndex] === undefined) return false
    return this.todos[todoIndex]
  }

  removeTodo(id) {
    if (typeof id !== 'number') return false

    const todo = this.todos.filter((todo) => todo.id === id)[0]
    if (!todo) return false
    const todoIndex = this.todos.indexOf(todo)

    this.todos.splice(todoIndex, 1)
    return this.todos
  }
}

module.exports = {
  TodoList
}
