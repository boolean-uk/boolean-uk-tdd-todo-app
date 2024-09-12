class TodoList {
  constructor() {
    this.items = []
    this.id = 0
  }

  create(title) {
    this.id++
    const item = { text: title, id: this.id, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  getAll() {
    return this.items
  }

  setComplete(id) {
    const item = this.search(id)
    item.status = 'complete'
    return item
  }

  search(id) {
    const item = this.items.find((item) => item.id === id)
    if (!item) throw Error('Item not found')
    return item
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  remove(id) {
    const item = this.search(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}

module.exports = TodoList
