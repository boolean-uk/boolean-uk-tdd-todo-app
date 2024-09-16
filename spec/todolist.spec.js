const {
  createTodos,
  getAllTodos,
  getIncompleteTodos,
  getCompleteTodos,
  toggleCompleted,
  removeTodo,
  searchItem
} = require('../src/todolist.js')

describe('Todo list:', () => {
  let todoList

  beforeEach(() => {
    todoList = []
    delete require.cache[require.resolve('../src/todolist.js')]
  })

  fit('(1) returns created Todo', () => {
    // setup
    const todoItem = {
      id: 0,
      text: 'Write test code',
      completed: false
    }

    // verify
    expect(createTodos('Write test code')).toEqual(todoItem)
  })

  it('(2) fetches all todoItems', () => {
    // setup
    const todoList = [
      { id: 0, text: 'create test codes', completed: false },
      { id: 1, text: 'test the test codes', completed: false }
    ]
    getAllTodos(todoList)
    // execute
    const result = todoList
    // verify
    expect(result).toEqual(todoList)
  })

  it('(3) fetches incomplete todoItems', () => {
    // setup
    const todoList = [
      { id: 0, text: 'create test codes', completed: true },
      { id: 1, text: 'test the test codes', completed: false }
    ]
    // execute
    const expectedResult = [
      { id: 1, text: 'test the test codes', completed: false }
    ]
    const result = getIncompleteTodos(todoList)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(5) toggles completed status of todo', () => {
    // setup
    const todoList = [
      { id: 0, text: 'create test codes', completed: true },
      { id: 1, text: 'test the test codes', completed: false }
    ]

    const testId = todoList[0].id
    // execute
    const expectedResult = [
      { id: 0, text: 'create test codes', completed: false },
      { id: 1, text: 'test the test codes', completed: false }
    ]

    const result = toggleCompleted(testId)

    // verify
    expect(result).toEqual(expectedResult)
  })

  //this test has to come after test 5
  it('(4) fetches complete todoItems', () => {
    // setup
    const todoList = [
      { id: 0, text: 'create test codes', completed: true },
      { id: 1, text: 'test the test codes', completed: false }
    ]
    // execute
    const expectedResult = [
      { id: 0, text: 'create test codes', completed: true }
    ]
    const result = getCompleteTodos(todoList)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(6) removes a todoItem by its id', () => {
    // setup
    const todoList = [
      { id: 0, text: 'create test codes', completed: true },
      { id: 1, text: 'test the test codes', completed: false }
    ]
    // execute
    const expectedResult = [
      { id: 0, text: 'create test codes', completed: true }
    ]
    const result = removeTodo(1)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(7) returns an error if searching for a non-existent todoItem', () => {
    // setup
    const todoList = [
      { id: 0, text: 'create test codes', completed: true },
      { id: 1, text: 'test the test codes', completed: false }
    ]
    // execute
    const expectedResult = 'Todo item not found'
    // can I do result = removeTodo(3) || searchItem(3) instead of writing the same test twice?
    const result = removeTodo(3) || searchItem(3)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(8) searches a todoItem by its id', () => {
    // setup
    const todoList = [
      { id: 0, text: 'create test codes', completed: true },
      { id: 1, text: 'test the test codes', completed: false }
    ]
    // execute
    const expectedResult = [
      { id: 1, text: 'test the test codes', completed: false }
    ]
    const result = searchItem(1)

    // verify
    expect(result).toEqual(expectedResult)
  })
})
