const TodoList = require('../src/todolist.js')

describe('todoList', () => {
  it('A new TodoList should be define', () => {
    const todoList = new TodoList()
    expect(todoList).toBeDefined()
  })
  it('Create a todo item that has an ID, text desciption, and starts off incomplete', () => {
    const todoList = new TodoList()
    const todoItem = 'Do something'
    expect(todoList.create(todoItem)).toEqual({
      id: 1,
      description: 'Do something',
      status: 'incomplete'
    })
  })
  it('Get all todo items', () => {
    const todoList = new TodoList()
    todoList.create('Do this thing')
    todoList.create('Then do this thing')
    expect(todoList.getItems()).toEqual([
      { id: 1, description: 'Do this thing', status: 'incomplete' },
      { id: 2, description: 'Then do this thing', status: 'incomplete' }
    ])
  })

  it('set a todo completed by its ID', () => {
    const todoList = new TodoList()
    todoList.create('Do this thing')
    todoList.create('Then Do this thing')
    expect(todoList.completeTodo(1)).toEqual({
      id: 1,
      description: 'Do this thing',
      status: 'completed'
    })
  })
  it('Get only todo items that are incomplete', () => {
    const todoList = new TodoList()
    todoList.create('Do this thing')
    todoList.create('Then do this thing')
    todoList.create('Also do this thing')
    todoList.completeTodo(3)
    expect(todoList.getIncompleteTodos()).toEqual([
      { id: 1, description: 'Do this thing', status: 'incomplete' },
      { id: 2, description: 'Then do this thing', status: 'incomplete' }
    ])
  })
  it('Get only todo items that are complete', () => {
    const todoList = new TodoList()
    todoList.create('Do this thing')
    todoList.create('Then do this thing')
    todoList.create('Also do this thing')
    todoList.completeTodo(3)
    expect(todoList.getCompleteTodos()).toEqual([
      { id: 3, description: 'Also do this thing', status: 'completed' }
    ])
  })
  it('Search and return a todo item by its ID, or return a message saying it doesn’t exist ', () => {
    const todoList = new TodoList()
    todoList.create('Do this thing')
    todoList.create('Then do this thing')
    expect(todoList.searchId(1)).toEqual({
      id: 1,
      description: 'Do this thing',
      status: 'incomplete'
    })
    expect(todoList.searchId(3)).toEqual('Does not exist')
  })
  it('Remove a todo item by its ID', () => {
    const todoList = new TodoList()
    todoList.create('Do this thing')
    todoList.create('Then do this thing')
    todoList.deleteId(2)
    expect(todoList.getItems()).toEqual([
      {
        id: 1,
        description: 'Do this thing',
        status: 'incomplete'
      }
    ])
    expect(todoList.deleteId(3)).toEqual('Does not exist')
  })
})
