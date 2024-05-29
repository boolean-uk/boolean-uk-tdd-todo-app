class TodoItem {
  constructor(id, todo, status) {
    this.id = id
    this.todo = todo
    this.status = status
  }

  setComplete(status) {
    this.status = 'incomplete'
    if (!status) {
      this.status = 'complete'
    }
    return this.status
  }
}

class TodoList {
  constructor() {
    this.todos = []
  }

  add(todo) {
    this.todos.push(todo)
    return this.todos
  }

  find(status) {
    return this.todos.find((todo) => todo.status === status)
  }

  search(id) {
    const getId = this.todos.find((todo) => todo.id === id)
    if (getId === undefined) {
      return 'Todo item not found'
    }
    return getId
  }
}

export { TodoItem, TodoList }
