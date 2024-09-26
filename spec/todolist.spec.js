const CreateTodoList = require('../src/todolist.js')
// write tests

describe('Create Todo List', () => {
  let td
  beforeEach(() => {
    td = new CreateTodoList()
  })
  it('add a new todo item', () => {
    expect(td.createNewTodo('laundry')).toBeTrue()
  })
  it('add a new todo item without a description', () => {
    expect(td.createNewTodo('')).toBeFalse()
  })

  it('get list of todos when we have items on the list', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.getAllTodoItems()).toEqual([
      {
        id: 1,
        description: 'study',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'laundry',
        status: 'incomplete'
      }
    ])
  })
  it('get list of todos when we have no items on the list', () => {
    expect(td.getAllTodoItems()).toEqual([])
  })
  it('set item to complete when it exists', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.setTodoComplete(2)).toBeTrue()
  })
  it('try to set item to complete when it does not exists', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.setTodoComplete(3)).toBeFalse()
  })
  it('getting only incomplete todos', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.setTodoComplete(2)
    expect(td.getAlltodoIncompleteItems()).toEqual([
      {
        id: 1,
        description: 'study',
        status: 'incomplete'
      }
    ])
  })
  it('try to get only incomplete todos when there are no incomplete todos in todo list', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.setTodoComplete(2)
    td.setTodoComplete(1)
    expect(td.getAlltodoIncompleteItems()).toEqual([])
  })
  it('getting only incomplete todos', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    td.setTodoComplete(2)
    expect(td.getAlltodoCompleteItems()).toEqual([
      {
        id: 2,
        description: 'laundry',
        status: 'complete'
      }
    ])
  })
  it('try to get only complete todos when there are no complete todos in todo list', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.getAlltodoCompleteItems()).toEqual([])
  })
  it('searched todo when id exists', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.searchByToDoId(2)).toBeTrue()
  })
  it('searched todo when id does not exists', () => {
    td.createNewTodo('study')
    expect(td.searchByToDoId(3)).toBeFalse()
  })
  it('delete a todo with id when item exists', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.deleteTodo(1)).toBeTrue()
  })
  it('try to delete a todo with id when item does not exist', () => {
    td.createNewTodo('study')
    td.createNewTodo('laundry')
    expect(td.deleteTodo(7)).toBeFalse()
  })
})
