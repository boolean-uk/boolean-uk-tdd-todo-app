let toDoList = []

function newTodo(description) {
  toDoList.push({
    id: toDoList.length + 1,
    description: description,
    status: 'incomplete'
  })
  return toDoList
}

function getAllTodos() {
  return toDoList
}

function setAsCompleted(id) {
  const targetIndex = toDoList.findIndex((todo) => todo.id === id)
  toDoList[targetIndex].status = 'complete'
  return toDoList
}

function getIncomplete() {
  return toDoList.filter((todo) => todo.status === 'incomplete')
}

function getComplete() {
  return toDoList.filter((todo) => todo.status === 'complete')
}

function findTodo(id) {
  const found = toDoList.find((todo) => todo.id === id)
  if (found) {
    return found
  }
  return 'well now, thought you had more todo than you actually DO. Try and relax friend ;)'
}

module.exports = {
  newTodo,
  toDoList,
  getAllTodos,
  setAsCompleted,
  getIncomplete,
  getComplete,
  findTodo
}
