class ToDoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(str) {
    this.id++
    const item = { id: this.id, task: str, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  getAll() {
    return this.items
  }

  searchBy(id) {
    const item = this.items.find((item) => item.id === id)
    if (!item) throw Error('Item not found')
    return item
  }

  setComplete(id) {
    const item = this.search(id)
    item.status = 'complete'
    return item
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  removeBy(id) {
    const item = this.search(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}

module.exports = ToDoList
