// eslint-disable-next-line no-unused-vars
class TodoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(todo) {
    this.id++
    const todoItem = {
      id: this.id,
      description: todo,
      status: 'incomplete'
    }
    this.items.push(todoItem)
    return todoItem
  }

  getItems() {
    return this.items
  }

  completeTodo(id) {
    if (this.items[id - 1]) {
      this.items.find((item) => item.id === id).status = 'completed'
      return this.items[id - 1]
    }
    return 'Todo item not found'
  }

  getIncompleteTodos() {
    return this.items.filter((item) => item.status === 'incomplete')
  }

  getCompleteTodos() {
    return this.items.filter((item) => item.status === 'completed')
  }

  searchId(id) {
    if (this.items[id - 1]) {
      return this.items[id - 1]
    }
    return 'Does not exist'
  }

  deleteId(id) {
    if (this.items[id - 1]) {
      return this.items.splice(id - 1, 1)
    }
    return 'Does not exist'
  }
}
module.exports = TodoList
