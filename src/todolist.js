const todos = []

const createTodo = (todoText) => {
  const todoItem = { task: todoText, complete: false, id: todos.length + 1 }

  todos.push(todoItem)

  return todoItem
}

const getAllTodos = () => {
  return todos
}

const setComplete = (id) => {
  const found = todos.find((todo) => todo.id === id)
  if (!found) return

  found.complete = true

  return getAllTodos()
}

const searchById = (id) => {
  const found = todos.find((todo) => todo.id === id)

  if (!found) return false

  return found
}

const filterByComplete = () => {
  return todos.filter((todo) => todo.complete === true)
}

const removeTodo = (id) => {
  return todos.filter((todo) => todo.id !== id)
}

// createTodo('Clean the kitchen')
// createTodo('Feed the local pigeons')
// createTodo('Fold laundry')
// setComplete(2)
// console.log(filterByComplete())

module.exports = {
  createTodo,
  todos,
  getAllTodos,
  setComplete,
  searchById,
  filterByComplete,
  removeTodo
}
