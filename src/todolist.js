const toDoList = []
let id = 1

const create = (todo) => {
  const obj = {
    id: id++,
    text: todo,
    status: 'incomplete'
  }

  toDoList.push(obj)

  return obj
}

const get = () => {
  return toDoList
}

const setDone = (id) => {
  const arr = toDoList.filter((object) => {
    return object.id === id
  })

  arr[0].status = 'complete'
  toDoList.splice(toDoList.indexOf(arr[0]), 1, arr[0])

  return arr[0]
}

const getIncomplete = () => {
  const incompleteArr = toDoList.filter((object) => {
    return object.status === 'incomplete'
  })

  return incompleteArr
}

const getComplete = () => {
  const completeArr = toDoList.filter((object) => {
    return object.status === 'complete'
  })

  return completeArr
}

const getById = (id) => {
  const arr = toDoList.filter((object) => {
    return object.id === id
  })

  if (arr[0] === undefined) {
    return 'The todo does not exist'
  }
  return arr[0]
}

const deleteTodo = (id) => {
  const arr = toDoList.filter((object) => {
    return object.id === id
  })

  toDoList.splice(toDoList.indexOf(arr[0]), 1)

  return toDoList
}

module.exports = {
  create,
  get,
  setDone,
  getIncomplete,
  getComplete,
  getById,
  deleteTodo
}
