const state = {
    todos: []
  }

  
let todos = state.todos

const createTodo = (string) => {
  const todo = {
    id: todos.length + 1,
    text: string,
    status: 'incomplete'
  }

  todos.push(todo)

  return todo
}

const getAllTodos = () => {
  return todos
}

const setTodoCompleted = (id) => {
  const todoById = todos[id - 1]

  if (!todoById) {
    return 'Todo item not found'
  } else {
    todoById.status = 'complete'

    return todoById
  }
}

const setTodoUncompleted = (id) => {
  const todoById = todos[id - 1]

  if (!todoById) {
    return 'Todo item not found'
  } else {
    todoById.status = 'incomplete'

    return todoById
  }
}

const getCompletedTodos = () => {
  return todos.filter((todo) => todo.status === 'complete')
}

const getUncompletedTodos = () => {
  return todos.filter((todo) => todo.status !== 'complete')
}

const getTodoById = (id) => {
  return todos[id - 1]
}

const removeTodoById = (id) => {
  todos = todos.filter((todo) => todo.id !== id)
}

module.exports = {
  createTodo,
  getAllTodos,
  setTodoCompleted,
  setTodoUncompleted,
  getCompletedTodos,
  getUncompletedTodos,
  getTodoById,
  removeTodoById
}


  
