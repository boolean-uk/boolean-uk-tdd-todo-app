class TodoItem {
  constructor(id, text) {
    this.id = id
    this.text = text
    this.completed = false
  }
}

class TodoList {
  constructor(todoItems) {
    this.todoItems = [...todoItems]
  }

  getAllTodos() {
    if (this.todoItems.length === 0) {
      return false
    } else {
      return this.todoItems
    }
  }

  createItem(text) {
    let newID
    if (this.todoItems.length === 0) {
      newID = 1
    } else {
      newID = this.todoItems[this.todoItems.length - 1].id + 1
    }
    const newTodo = new TodoItem(newID, text)
    this.todoItems.push(newTodo)
    return true
  }

  setTodoCompleted(id) {
    if (this.todoItems.findIndex((x) => x.id === id) !== -1) {
      this.todoItems[
        this.todoItems.findIndex((x) => x.id === id)
      ].completed = true
      return true
    }
    return false
  }

  getCompletedTodos() {
    return this.todoItems.filter((el) => el.completed)
  }

  getIncompleteTodos() {
    return this.todoItems.filter((el) => !el.completed)
  }

  getTodoById(id) {
    if (this.todoItems.findIndex((x) => x.id === id) !== -1) {
      return this.todoItems[this.todoItems.findIndex((x) => x.id === id)]
    }
    return {}
  }

  removeTodoById(id) {
    if (this.todoItems.findIndex((x) => x.id === id) !== -1) {
      this.todoItems.splice(
        this.todoItems.findIndex((x) => x.id === id),
        1
      )
      return true
    }
    return false
  }
}

module.exports = { TodoItem, TodoList }
