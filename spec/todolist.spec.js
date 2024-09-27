const {
  createTodo,
  getAllTodos,
  setTodoCompleted,
  setTodoUncompleted,
  getCompletedTodos,
  getUncompletedTodos,
  getTodoById,
  removeTodoById
} = require('../src/todolist.js')

beforeEach(() => {
  getAllTodos().length = 0
})

describe('Create Todo', () => {
  it('with ID, text and status properties', () => {
    const result = createTodo('Make the bed')

    expect(result).toEqual({
      id: 1,
      text: 'Make the bed',
      status: 'incomplete'
    })
  })
})

describe('Set todo', () => {
  it('to completed by ID', () => {
    createTodo('Make the bed')

    const result = setTodoCompleted(1)

    expect(result).toEqual({
      id: 1,
      text: 'Make the bed',
      status: 'complete'
    })
  })

  it('to incomplete by ID', () => {
    createTodo('Make the bed')
    setTodoCompleted(1)

    const result = setTodoUncompleted(1)

    expect(result).toEqual({
      id: 1,
      text: 'Make the bed',
      status: 'incomplete'
    })
  })
})

describe('Get', () => {
  it('all todo items', () => {
    createTodo('Make the bed')
    createTodo('Water the plants')

    const result = getAllTodos()

    expect(result).toEqual([
      {
        id: 1,
        text: 'Make the bed',
        status: 'incomplete'
      },
      {
        id: 2,
        text: 'Water the plants',
        status: 'incomplete'
      }
    ])
  })

  it('all incomplete todos', () => {
    createTodo('Make the bed')
    createTodo('Water the plants')

    const result = getUncompletedTodos()

    expect(result).toEqual([
      {
        id: 1,
        text: 'Make the bed',
        status: 'incomplete'
      },
      {
        id: 2,
        text: 'Water the plants',
        status: 'incomplete'
      }
    ])
  })

  it('all completed todos', () => {
    createTodo('Make the bed')
    createTodo('Water the plants')
    setTodoCompleted(2)

    const result = getCompletedTodos()

    expect(result).toEqual([
      {
        id: 2,
        text: 'Water the plants',
        status: 'complete'
      }
    ])
  })

  it('todo by ID', () => {
    createTodo('Make the bed')
    createTodo('Water the plants')

    const result = getTodoById(2)

    expect(result).toEqual({
      id: 2,
      text: 'Water the plants',
      status: 'incomplete'
    })
  })
})

describe('Remove todo', () => {
  it('by ID', () => {
    createTodo('Make the bed')
    createTodo('Water the plants')
    removeTodoById(1)

    const result = getAllTodos()

    expect(result).toEqual([
      {
        id: 2,
        text: 'Water the plants',
        status: 'incomplete'
      }
    ])
  })
})
