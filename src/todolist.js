function createToDo(newTodo) {
  if (!newTodo.text || newTodo.text.length < 1) {
    return 'failed to create todo'
  }
  const todo = newTodo
  return todo.text
}
function getToDos(todoList) {
  if (!todoList || todoList.length < 1) {
    return 'no todos added yet'
  }
  return todoList
}
function setCompletionStatusToTrue(id, todoList) {
  const toDoToUpdate = todoList.find((item) => item.id === id)

  if (!toDoToUpdate) {
    return 'incorrect id - todo item does not exist'
  }

  const updatedTodo = { ...toDoToUpdate, complete: true }

  // or we might want to update the actual list:
  // const updatedTodoList = [...todoList, { ...toDoToUpdate, complete: true }]

  return updatedTodo
}

function getIncompleteToDos(todoList) {
  const listOfIncompleteToDos = todoList.filter(
    (item) => item.complete === false
  )
  if (listOfIncompleteToDos.length < 1) {
    return 'all done!'
  }
  return listOfIncompleteToDos
}

function getCompleteToDos(todoList) {
  const listOfCOmpleteToDos = todoList.filter((item) => item.complete === true)
  if (listOfCOmpleteToDos.length < 1) {
    return 'no todo completed yet!'
  }
  return listOfCOmpleteToDos
}
function findToDoById(id, todoList) {
  const foundTodo = todoList.find((item) => item.id === id)

  if (!foundTodo) {
    return 'no match found'
  }
  return foundTodo
}
function removeToDo(id, todoList) {
  const todoToRemove = todoList.find((item) => item.id === id)
  if (!todoToRemove) {
    return 'no match found, could not remove'
  }

  // in this case, this is uneccessary seeing as id and index are pretty much guaranteed to be the same - but this is to acknoledge that it may not always be the case
  const indexOfToDoToRemove = todoList.indexOf(todoToRemove)

  todoList.splice(indexOfToDoToRemove, 1)

  return todoList
}

module.exports = {
  createToDo,
  getToDos,
  setCompletionStatusToTrue,
  getIncompleteToDos,
  getCompleteToDos,
  findToDoById,
  removeToDo
}
