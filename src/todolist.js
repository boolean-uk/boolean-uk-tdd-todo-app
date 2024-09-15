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
  const filterdList = toDoList.filter((x) => x.status === 'incomplete')
  return filterdList
}

function getComplete(toDoList) {
  const filterdList = toDoList.filter((x) => x.status === 'complete')
  return filterdList
}

function findTodo(id, toDoList) {
  const todoItem = toDoList.find((x) => x.id === id)
  return todoItem
}

function removeItem(id, todoList) {
  const filterdList = todoList.filter((x) => x.id !== id)
  return filterdList
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
