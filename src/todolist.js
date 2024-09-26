let idCounter = 1

const increaseId = (num) => {
  idCounter = num
}

class ToDoList {
  constructor() {
    this.list = []
  }

  addItem(item) {
    this.list.push(item)
  }

  getTodos() {
    if (this.list.length === 0) return 'No todo items'
    return this.list.map((item) => item.description)
  }

  setTodo(id) {
    const foundItem = this.list.find((item) => item.id === id)
    foundItem.completed = !foundItem.completed
  }

  getIncompleted() {
    const newList = this.list.filter((item) => item.completed === false)
    if (newList.length === 0) return false
    return newList.map((item) => item.description)
  }

  getCompleted() {
    const newList = this.list.filter((item) => item.completed === true)
    if (newList.length === 0) return false
    return newList.map((item) => item.description)
  }

  findTodo(id) {
    const foundItem = this.list.find((item) => item.id === id)
    if (!foundItem) return 'This todo does not exist'
    return foundItem.description
  }

  removeTodo(id) {
    if (!this.list.find((item) => item.id === id)) return false
    const newList = this.list.filter((item) => item.id !== id)
    this.list = newList
  }
}

class ToDoItem {
  constructor(description) {
    if (!description || description === '') {
      throw new Error('Please enter a todo!')
    }
    this.id = idCounter
    this.description = description
    this.completed = false
    increaseId(idCounter + 1)
  }
}

module.exports = {
  ToDoList,
  ToDoItem,
  increaseId
}
