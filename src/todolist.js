class TodoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(title) {
    this.id++
    const item = { id: this.id, text: title, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  getAllTodos() {
    return this.items
  }

  setToComplete(id) {
    const item = this.findTodo(id)
    item.status = 'complete'
    return item
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  findTodo(id) {
    const item = this.items.find((item) => item.id === id)
    if (item === undefined) throw new Error('Item not found')
    return item
  }

  deleteTodoItem(id) {
    const item = this.findTodo(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}

module.exports = TodoList
