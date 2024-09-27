class Todos {
  constructor() {
    this.todoList = []
  }

  getAllTodos() {
    if (this.todoList.length === 0) {
      return []
    } else {
      return this.todoList
    }
  }

  createTodo(text) {
    if (typeof text !== 'string') {
      return 'text value must be a valid string'
    } else {
      const newToDo = {
        id: this.todoList.length + 1,
        text,
        completed: false
      }
      this.todoList.push(newToDo)
      return newToDo
    }
  }

  completeTodo(id) {
    const todoToComplete = this.todoList.filter((todo) => todo.id === id)
    if (!id) {
      return 'id is not valid'
    } else {
      todoToComplete[0].completed = true
      return todoToComplete[0]
    }
  }

  getIncompleteTodos(completed) {
    const incompleteTodos = this.todoList.filter(
      (todo) => todo.completed === completed
    )
    if (completed !== false) {
      return 'completed status is not valid'
    } else {
      return incompleteTodos
    }
  }

  getCompleteTodos(completed) {
    const completetodos = this.todoList.filter(
      (todo) => todo.completed === completed
    )
    if (completed !== true) {
      return 'completed status is not valid'
    } else {
      return completetodos
    }
  }

  searchTodoById(id) {
    const foundTodo = this.todoList.find((todo) => todo.id === id)
    if (!foundTodo) {
      return 'id does not exist'
    } else {
      return foundTodo
    }
  }

  removeTodoById(id) {
    const todosBefore = this.todoList
    const updatedTodos = this.todoList.filter((todo) => todo.id !== id)
    if (todosBefore.length - updatedTodos.length === 1) {
      return updatedTodos
    } else {
      return 'id does not exist'
    }
  }
}

// CONSOLE.LOG TESTS
// INITIAL
const todo = new Todos()

// GET ALL TODOS
console.log(todo.getAllTodos())

// CREATE TODO
todo.createTodo('clean')
todo.createTodo('tidy')
todo.createTodo('hoover')
todo.createTodo('mop')
console.log(todo.getAllTodos())

// COMPLETE TODO
todo.completeTodo(2)
todo.completeTodo(4)
console.log(todo.getAllTodos())

// GET INCOMPLETE TODOS
console.log(todo.getIncompleteTodos(false))

// GET COMPLETE TODOS
console.log(todo.getCompleteTodos(true))

// SEARCH TODO BY ID
console.log(todo.searchTodoById(2))

// REMOVE TODO BY ID
console.log(todo.removeTodoById(2))

module.exports = { Todos }
