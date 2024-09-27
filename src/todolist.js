const todo = []
function newTodo(description) {
  todo.push({
    id: todo.length + 1,
    description: description,
    status: 'incomplete'
  })
  return todo
}

function getAllTodos() {
  return todo
}

function setCompleted(id) {
  const findID = todo.findIndex((todo) => todo.id === id)
  todo[findID].status = 'complete'
  return todo
}
function getIncomplete() {
  return todo.filter((todo) => todo.status === 'incomplete')
}
function getComplete() {
  return todo.filter((todo) => todo.status === 'complete')
}

function findTodo(id) {
  const found = todo.find((todo) => todo.id === id)
  if (found) {
    return found
  }
  return 'No more task to do'
}
function removeTodo(id) {
  const todoIndex = id - 1
  todo.splice(todoIndex, 1)
  return todo
}

module.exports = {
  newTodo,
  todo,
  getAllTodos,
  setCompleted,
  getIncomplete,
  getComplete,
  findTodo,
  removeTodo
}
