const {
  todo,
  newTodo,
  getAllTodos,
  setCompleted,
  getIncomplete,
  getComplete,
  findTodo,
  removeTodo
} = require('../src/todolist.js')

describe('Create a todolist', () => {
  beforeEach(() => {
    todo.splice(0, todo.length)
  })
  it('should add a task in the list', () => {
    const updatedTodoList = newTodo('clean the dishes')
    expect(updatedTodoList).toEqual([
      {
        id: 1,
        description: 'clean the dishes',
        status: 'incomplete'
      }
    ])
  })

  it('should get all todos', () => {
    newTodo('clean the dishes')
    newTodo('mop the floor')
    const allTodos = getAllTodos()
    expect(allTodos).toEqual([
      {
        id: 1,
        description: 'clean the dishes',
        status: 'incomplete'
      },
      { id: 2, description: 'mop the floor', status: 'incomplete' }
    ])
  })

  it('Set a todo completed by its ID', () => {
    newTodo('clean the dishes')
    const updatedTodoList = setCompleted(1)
    expect(updatedTodoList).toEqual([
      {
        id: 1,
        description: 'clean the dishes',
        status: 'complete'
      }
    ])
  })

  it('Get only todo items that are incomplete', () => {
    newTodo('clean the dishes')
    newTodo('mop the floor')
    setCompleted(1)
    const onlyIncompleteStatus = getIncomplete()
    expect(onlyIncompleteStatus).toEqual([
      {
        id: 2,
        description: 'mop the floor',
        status: 'incomplete'
      }
    ])
  })

  it('Get only todo items that are complete', () => {
    newTodo('clean the dishes')
    newTodo('mop the floor')
    setCompleted(1)
    const onlyIncompleteStatus = getComplete()
    expect(onlyIncompleteStatus).toEqual([
      {
        id: 1,
        description: 'clean the dishes',
        status: 'complete'
      }
    ])
  })

  it('Search and return a todo item by its ID', () => {
    newTodo('clean the dishes')
    newTodo('mop the floor')
    const found = findTodo(1)
    expect(found).toEqual({
      id: 1,
      description: 'clean the dishes',
      status: 'incomplete'
    })
  })
  it("return a message saying it doesn't exist", () => {
    newTodo('clean the dishes')
    newTodo('mop the floor')
    const notfound = findTodo(5)
    expect(notfound).toEqual('No more task to do')
  })

  it('Remove a todo item by its ID', () => {
    newTodo('do something')
    expect(removeTodo(1)).toHaveSize(0)
  })
})
