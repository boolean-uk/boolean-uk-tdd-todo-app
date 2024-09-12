const {
  newTodo,
  toDoList,
  getAllTodos,
  setAsCompleted,
  getIncomplete,
  getComplete,
  findTodo
} = require('../src/todolist.js')

describe('create new todo', () => {
  beforeEach(() => {
    toDoList.splice(0, toDoList.length)
  })
  it('should create todo/add to list', () => {
    const updatedTodos = newTodo('clean dishes')
    expect(updatedTodos).toEqual([
      {
        id: 1,
        description: 'clean dishes',
        status: 'incomplete'
      }
    ])
  })
  it('should create unique id', () => {
    newTodo('clean dishes')
    const updatedTodos = newTodo('feed cat')
    expect(updatedTodos).toEqual([
      {
        id: 1,
        description: 'clean dishes',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'feed cat',
        status: 'incomplete'
      }
    ])
  })
  it('should get all todos', () => {
    newTodo('clean dishes')
    newTodo('feed cat')
    const allTodos = getAllTodos()
    expect(allTodos).toEqual([
      {
        id: 1,
        description: 'clean dishes',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'feed cat',
        status: 'incomplete'
      }
    ])
  })
  it('should set todo as completed', () => {
    newTodo('clean dishes')
    newTodo('feed cat')
    const updatedTodos = setAsCompleted(1)
    expect(updatedTodos).toEqual([
      {
        id: 1,
        description: 'clean dishes',
        status: 'complete'
      },
      {
        id: 2,
        description: 'feed cat',
        status: 'incomplete'
      }
    ])
  })
  it('should get only incomplete todos', () => {
    newTodo('clean dishes')
    newTodo('feed cat')
    setAsCompleted(1)
    const filteredTodos = getIncomplete()
    expect(filteredTodos).toEqual([
      {
        id: 2,
        description: 'feed cat',
        status: 'incomplete'
      }
    ])
  })
  it('should get only complete todos', () => {
    newTodo('clean dishes')
    newTodo('feed cat')
    setAsCompleted(1)
    const filteredTodos = getComplete()
    expect(filteredTodos).toEqual([
      {
        id: 1,
        description: 'clean dishes',
        status: 'complete'
      }
    ])
  })
  it('should find todo by id', () => {
    newTodo('clean dishes')
    newTodo('feed cat')
    const foundTodo = findTodo(1)
    expect(foundTodo).toEqual({
      id: 1,
      description: 'clean dishes',
      status: 'incomplete'
    })
  })
  it('should say if non-existing id', () => {
    newTodo('clean dishes')
    newTodo('feed cat')
    const foundTodo = findTodo(6)
    expect(foundTodo).toEqual(
      'well now, thought you had more todo than you actually DO. Try and relax friend ;)'
    )
  })
})
