class toDoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  createItem(title) {
    this.id++
    const item = { id: this.id, text: title, status: 'incomplete' }
    this.items.push(item)
    return item
  }

  getItems() {
    return this.items
  }

  setComplete(id) {
    const item = this.findBy(id)
    item.status = 'complete'
    return item
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  findBy(id) {
    const item = this.item.find((item) => item.id === id)
    if (this.items === undefined) throw new Error('Item not found')
    return item
  }

  deleteBy(id) {
    const item = this.findBy(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}

module.exports = toDoList
