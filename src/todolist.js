const todoList = []
let ID = -1

const createTodos = (text) => {
  ID += 1
  const todo = {
    id: ID,
    text: text,
    completed: false
  }
  todoList.push(todo)
  return todo
}

function getAllTodos() {
  return todoList
}

let incompleteTodoList = []

function getIncompleteTodos() {
  // return todoList
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].completed === false) {
      incompleteTodoList.push(todoList[i])
    }
  }
  return incompleteTodoList
}

let completeTodoList = []
function getCompleteTodos() {
  // return todoList
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].completed === true) {
      completeTodoList.push(todoList[i])
    }
  }
  return completeTodoList
}

function toggleCompleted(id) {
  const target = todoList.find((todo) => todo.id === id)
  target.completed === false
    ? (target.completed = true)
    : (target.completed = false)

  return todoList
}

filteredList = []
function removeTodo(id) {
  const filteredTodoList = todoList.filter((todo) => todo.id !== id)
  const removedTodo = (todo) => todo.id === id

  const index = todoList.findIndex(removedTodo)

  if (index === -1) {
    console.log('Todo item not found')
    return 'Todo item not found'
  } else {
    const filteredList = filteredTodoList
    console.log(filteredList)
    return filteredList
  }
}

function searchItem(id) {
  const filteredTodoList = todoList.filter((todo) => todo.id === id)
  const searchedTodo = (todo) => todo.id === id

  const index = todoList.findIndex(searchedTodo)

  if (index === -1) {
    console.log('Search: Todo item not found')
    return 'Todo item not found'
  } else {
    const filteredList = filteredTodoList
    console.log('searched:', filteredList)
    return filteredList
  }
}

module.exports = {
  createTodos,
  getAllTodos,
  getIncompleteTodos,
  getCompleteTodos,
  toggleCompleted,
  removeTodo,
  // eslint-disable-next-line no-undef
  searchItem
}
