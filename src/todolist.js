const createToDo = (input, toDoList) => {
  if (typeof input !== 'string') {
    return false
  }

  const num = toDoList.length + 1

  const toDoItem = {
    id: num,
    description: input,
    complete: false
  }

  return toDoItem
}

const getToDo = (toDoList) => {
  return toDoList.length > 0 ? toDoList : false
}

const setToDoComplete = (id, toDoList) => {
  const itemToEdit = searchToDo(id, toDoList)

  if (typeof itemToEdit === 'object') {
    itemToEdit.complete = true
    return true
  }

  return false
}

const getToDoIncomplete = (toDoList) => {
  const incompleteItems = toDoList.filter((item) => !item.complete)

  return incompleteItems.length > 0 ? incompleteItems : false
}

const getToDoComplete = (toDoList) => {
  const completeItems = toDoList.filter((item) => item.complete)

  return completeItems.length > 0 ? completeItems : false
}

const searchToDo = (id, toDoList) => {
  if (typeof id !== 'number') {
    return false
  }

  const itemToFind = toDoList.find((item) => item.id === id)

  return typeof itemToFind === 'object' ? itemToFind : 'Item not found'
}

const removeItem = (id, toDoList) => {
  const indexToDelete = toDoList.findIndex((item) => item.id === id)

  if (indexToDelete === -1) {
    return false
  }

  toDoList.splice(indexToDelete, 1)
  return true
}

module.exports = {
  createToDo,
  getToDo,
  setToDoComplete,
  getToDoIncomplete,
  getToDoComplete,
  searchToDo,
  removeItem
}
