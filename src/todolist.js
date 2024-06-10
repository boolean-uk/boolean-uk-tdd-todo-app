export default class TodoList {
  constructor() {
    this.id = 0
    this.todos = []
  }

  create(todo) {
    this.id++
    const item = {
      id: this.id,
      text: todo,
      isComplete: false
    }
    this.addTodo(item)
    return item
  }

  addTodo(todo) {
    return this.todos.push(todo)
  }

  getAll() {
    return this.todos
  }

  setComplete(id) {
    return (
      this.todos.find((todo) => {
        if (todo.id === id) {
          todo.isComplete = true
          return todo
        }
      }) ?? 'Todo item not found'
    )
  }

  getTodo(id) {
    return this.todos.find((todo) => todo.id === id) ?? 'Todo item not found'
  }

  getComplete() {
    return this.todos.filter((todo) => todo.isComplete)
  }

  getInComplete() {
    return this.todos.filter((todo) => !todo.isComplete)
  }

  removeTodo(id) {
    return (this.todos = this.todos.filter((todo) => todo.id !== id))
  }
}
