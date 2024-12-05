class ToDoList {
  constructor(text) {
    this.lastUsedId = 0
    this.itemsArray = []
  }

  createToDo(text) {
    const newItem = { id: this.lastUsedId, text: text, complete: false }
    this.itemsArray.push(newItem)
    this.lastUsedId++
  }

  getAllItems() {
    return this.itemsArray
  }

  setAsCompleted(todoID) {
    this.itemsArray[todoID].complete = true
  }

  getIncomplete() {
    const incompleteArray = []
    this.itemsArray.forEach((item) => {
      if (item.complete === false) incompleteArray.push(item)
    })
    return incompleteArray
  }

  getComplete() {
    const completeArray = []
    this.itemsArray.forEach((item) => {
      if (item.complete === true) completeArray.push(item)
    })
    return completeArray
  }

  getByID(id) {
    if (this.itemsArray[id] === undefined) return '404 task not found'
    else return this.itemsArray[id]
  }

  removeByID(id) {
    if (this.itemsArray[id] === undefined) return '404 task not found'
    else this.itemsArray.splice(id, 1)
  }
}

module.exports = ToDoList
