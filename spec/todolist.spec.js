const {
  createTodo,
  todos,
  getAllTodos,
  setComplete,
  searchById,
  filterByComplete,
  removeTodo
} = require('../src/todolist')

describe('todos', () => {
  beforeEach(() => {
    todos.splice(0, todos.length)
  })

  it('createToDo should add an object to todos', () => {
    createTodo('Watch world cup')

    expect(todos).toEqual([{ task: 'Watch world cup', complete: false, id: 1 }])
  })

  it('getAllTodos should return todos list', () => {
    const allTodos = getAllTodos()

    expect(allTodos).toEqual(todos)
  })

  it('setComplete edits a todo item to change complete from false to true', () => {
    createTodo('Work on React project')
    setComplete(1)

    expect(todos[0]).toEqual({
      task: 'Work on React project',
      id: 1,
      complete: true
    })
  })

  it('setComplete returns updated todos', () => {
    createTodo('Work on React project')
    const updatedTodos = setComplete(1)

    expect(updatedTodos).toEqual(todos)
  })

  it('searchById returns matching todo item', () => {
    createTodo('Work on React project')
    const expected = createTodo('Watch world cup')
    const match = searchById(2)

    expect(match).toEqual(expected)
  })

  it('searchById returns false if no match', () => {
    const match = searchById(1)

    expect(match).toBeFalse()
  })

  it('filterByComplete should return a list of only completed todos', () => {
    createTodo('Clean the kitchen')
    const expected = createTodo('Feed the local pigeons')
    createTodo('Fold laundry')
    setComplete(2)
    const completeTodos = filterByComplete()

    expect(completeTodos).toEqual([expected])
  })

  it('removeToDo takes in an id then returns updated todos with that item removed', () => {
    const expected = createTodo('Do some exercise')
    createTodo('Read a book')
    const updatedTodos = removeTodo(2)

    expect(updatedTodos).toEqual([expected])
  })
})
