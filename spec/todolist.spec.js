// The Red, Green, Refactor method consists of three phases: Red - write a test that fails. Green - implement the test-supporting functionality to pass the test. Refactor - improve the production code AND the tests to absolute perfection.

import TodoList from '../src/todolist.js'

describe('TodoList Application', () => {
  let myTodoList

  beforeEach(() => {
    myTodoList = new TodoList()
  })

  // 001. Create a todo item that has an ID, text description, and starts off incomplete
  it('should create a todo', () => {
    expect(myTodoList.create('Go to the market')).toEqual({
      id: 1,
      description: 'Go to the market',
      status: 'incomplete'
    })
  })

  // 002. Get all todo items
  it('should show all the todos', () => {
    const todos = [
      { id: 1, description: 'Wash the dishes', status: 'incomplete' },
      { id: 2, description: 'Complete the article', status: 'incomplete' },
      { id: 3, description: 'Go to the shop', status: 'incomplete' }
    ]

    todos.forEach((todo) => {
      myTodoList.create(todo)
    })

    expect(myTodoList.getAll().length).toEqual(todos.length)
  })

  // 003. Set a todo completed by its ID
  it('should mark a todo as complete', () => {
    const todo = { id: 1, description: 'Todo 1', status: 'incomplete' }

    myTodoList.create(todo)
    myTodoList.setComplete(1)

    expect(myTodoList.getTodoById(1).status).toBe('complete')
  })

  // 004. Get only todo items that are incomplete
  it('should return only incomplete todo items', () => {
    const todos = [
      { id: 1, description: 'Wash the dishes', status: 'incomplete' },
      { id: 2, description: 'Complete the article', status: 'incomplete' },
      { id: 3, description: 'Go to the shop', status: 'incomplete' }
    ]

    todos.forEach((todo) => {
      myTodoList.create(todo)
    })

    myTodoList.setComplete(3)

    expect(myTodoList.getIncomplete().length).toEqual(2)
  })

  // 005. Get only todo items that are complete
  it('should return only incomplete todo items', () => {
    const todos = [
      { id: 1, description: 'Wash the dishes', status: 'incomplete' },
      { id: 2, description: 'Complete the article', status: 'incomplete' },
      { id: 3, description: 'Go to the shop', status: 'incomplete' }
    ]

    todos.forEach((todo) => {
      myTodoList.create(todo)
    })

    myTodoList.setComplete(3)

    expect(myTodoList.getComplete().length).toEqual(1)
  })

  // 006. Search and return a todo item by its ID, or return a message saying it doesn’t exist.
  it('Search and return a todo item by its ID, or return a message saying it doesn’t exist', () => {
    const todos = [
      { id: 1, description: 'Wash the dishes', status: 'incomplete' },
      { id: 2, description: 'Complete the article', status: 'incomplete' },
      { id: 3, description: 'Go to the shop', status: 'incomplete' }
    ]

    todos.forEach((todo) => {
      myTodoList.create(todo)
    })

    const todo = myTodoList.getTodoById(3).description

    expect(todo).toEqual({
      id: 3,
      description: 'Go to the shop',
      status: 'incomplete'
    })
  })

  it("should return a message saying todo doesn't exist for invalid ID", () => {
    const todo = myTodoList.getTodoById(4)

    expect(todo).toBe(undefined)
  })

  // 007. Remove a todo item by its ID
  it('should remove a todo from the list', () => {
    // Test removing a todo from the list
    const todo = { id: 1, description: 'Todo 1', status: 'incomplete' }
    myTodoList.create(todo)
    myTodoList.delete(1)
    expect(myTodoList.getAll()).not.toEqual(todo)
  })
})
