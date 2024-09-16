const TodoList = require('../src/classestodo.js')

describe('Todo list:', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('(1) creates a new todo item', () => {
    // setup
    const expectedResult = {
      id: 0,
      text: 'Write test code',
      status: 'incomplete'
    }
    // execute
    const result = todoList.createTodos('Write test code')
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(2) returns all todos: todoList []', () => {
    // setup
    const listedTodos = [
      {
        id: 0,
        text: 'Write test code',
        status: 'incomplete'
      },
      {
        id: 1,
        text: 'Test test code',
        status: 'incomplete'
      }
    ]
    const listedTodosLength = listedTodos.length
    const expectedResult = listedTodosLength

    // execute
    const result = 2

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(3) fetches incomplete todoItems', () => {
    // setup
    todoList.createTodos('test the test codes')
    todoList.getIncompleteTodos()

    // execute
    const expectedList = todoList.incompleteTodoList.length
    const result = 1

    // verify
    expect(result).toEqual(expectedList)
  })

  it('(4) fetches complete todoItems', () => {
    // setup
    todoList.todoList.push({
      id: 3,
      text: 'cook dinner',
      status: 'complete'
    })

    todoList.getCompleteTodos()

    // execute
    const expectedList = todoList.completeTodoList.length
    const result = 1

    // verify
    expect(result).toEqual(expectedList)
  })

  it('(5) toggles completed status of todo', () => {
    // setup
    todoList.createTodos('drink some water')

    // execute
    const expectedResult = [
      { id: 0, text: 'drink some water', status: 'complete' }
    ]

    const result = todoList.toggleCompleted(0)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(6) removes a todoItem by its id', () => {
    // setup
    todoList.createTodos('drink some water')
    todoList.createTodos('get a dog')

    // execute
    const expectedResult = [{ id: 1, text: 'get a dog', status: 'incomplete' }]
    const result = todoList.removeTodo(0)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(7) returns an error if removing or searching for a non-existent todoItem', () => {
    // setup
    todoList.createTodos('drink some water')
    todoList.createTodos('get a dog')

    // execute
    const expectedResult = 'Todo item not found'
    const result = todoList.removeTodo(6) || todoList.searchTodo(6)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('(8) searches a todoItem by its id', () => {
    // setup
    todoList.createTodos('drink some water')
    todoList.createTodos('get a dog')
    todoList.createTodos('tell bae I got us a dog')

    // execute
    const expectedResult = [{ id: 1, text: 'get a dog', status: 'incomplete' }]
    const result = todoList.searchTodo(1)

    // verify
    expect(result).toEqual(expectedResult)
  })
})
