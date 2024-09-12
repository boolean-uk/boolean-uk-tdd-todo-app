const toDoList = []
function createToDo(id, description, status) {
  const toDoItem = {
    id: id,
    description: description,
    status: status
  }
  toDoList.push(toDoItem)
  return toDoItem
}
function getAll(toDoList) {
  if (toDoList.length === 0) {
    return "no todo's"
  } else {
    return toDoList
  }
}
function setStatus(id, toDoList) {
  const todoItem = toDoList.find((x) => x.id === id)
  todoItem.status = 'complete'
  return todoItem
}
function getIncomplete(toDoList) {
  const filteredList = toDoList.filter((x) => x.status === 'incomplete')
  return filteredList
}
function getComplete(toDoList) {
  const filteredList = toDoList.filter((x) => x.status === 'complete')
  return filteredList
}
function findTodo(id, toDoList) {
  const todoItem = toDoList.find((x) => x.id === id)
  return todoItem
}
function removeItem(id, todoList) {
  const filteredList = todoList.filter((x) => x.id !== id)
  return filteredList
}
module.exports = {
  createToDo,
  getAll,
  setStatus,
  getIncomplete,
  getComplete,
  findTodo,
  removeItem
}
