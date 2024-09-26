// - Get only todo items that are incomplete

// - Get only todo items that are complete

// - Search and return a todo item by its ID,
// or return a message saying it doesn’t exist

// - Remove a todo item by its ID

class TodoList {
  constructor() {
    this.id = 0
    this.items = []
  }
  // - Create a todo item that has an ID,
  // text description, and starts off incomplete
  create(str) {
    this.id++
    const item = { id: this.id, text: str, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  // - Get all todo items
  showAll() {
    return this.items
  }
  // - Set a todo completed by its ID
  setComplete(id) {
    const item = this.findBy(id)
    item.status = 'complete'
    return item
  }
  // - Set a todo completed by its ID
  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }
  // if not found throughs error msg
  findBy(id) {
    const item = this.items.find((item) => item.id === id)
    if (item === undefined) throw new Error('Item not found')
    return item
  }

  deleteBy(id) {
    const item = this.findBy(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}

module.exports = TodoList
