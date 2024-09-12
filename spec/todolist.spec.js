const { TodoList } = require('../src/todolist')

describe('Test of TodoList class', () => {
  let todoList
  beforeEach(() => {
    todoList = new TodoList()
  })

  // createUniqueId
  it('expects a unique id to be returned', () => {
    todoList.newTodo('first') // 1
    todoList.newTodo('second') // 2 REM
    todoList.newTodo('third') // 3
    todoList.removeTodo(2)
    expect(todoList.newTodo('forth').id).not.toBe(3)
  })

  // newTodo
  it('expects newTodo to return nothing if empty value is given to it', () => {
    todoList.newTodo('')
    todoList.newTodo(null)
    expect(todoList.todos).toHaveSize(0)
  })
  it('expects newId of newTodo() to always be new', () => {
    todoList.newTodo('first todo')
    todoList.newTodo('second todo')
    const secondTodo = todoList.todos[1]
    expect(secondTodo.id).toBe(2)
  })
  it('expects newTodo to push to this.todos', () => {
    todoList.newTodo('do something')
    todoList.newTodo('do second something')
    expect(todoList.todos).toHaveSize(2)
  })

  // getAllTodos
  it('expects the array with all todos inside', () => {
    todoList.newTodo('do something')
    todoList.newTodo('do second something')
    expect(todoList.getAllTodos()).toHaveSize(2)
  })

  // getIncompleteTodos
  it('expects to receive list of incompleted todos', () => {
    todoList.newTodo('jump')
    todoList.updateTodo(1, true)
    todoList.newTodo('jump')
    todoList.updateTodo(2, true)
    todoList.newTodo('travel')
    expect(todoList.getIncompleteTodos()).toEqual([
      { id: 3, text: 'travel', checked: false }
    ])
  })
  it('expects incompleteList returned to be empty if no todos stored', () => {
    expect(todoList.getIncompleteTodos()).toHaveSize(0)
  })

  // getCompleteTodos
  it('expects to receive list of completed todos', () => {
    todoList.newTodo('dream')
    todoList.updateTodo(1, true)
    todoList.newTodo('jump')
    todoList.newTodo('travel')
    expect(todoList.getCompleteTodos()).toEqual([
      { id: 1, text: 'dream', checked: true }
    ])
  })
  it('expects completeList returned to be empty if no todos stored', () => {
    expect(todoList.getCompleteTodos()).toHaveSize(0)
  })

  // updateTodo
  it('expects false when id is not equal to type Number', () => {
    expect(todoList.updateTodo('robert', true)).toBeFalse()
    expect(todoList.updateTodo(false, true)).toBeFalse()
    expect(todoList.updateTodo([1], true)).toBeFalse()
  })
  it('expects the updateTodo to return false if id does not exist', () => {
    expect(todoList.updateTodo(1, true)).toBeFalse()
  })
  it('expects false if checked is not of type bool', () => {
    todoList.newTodo('do something')
    expect(todoList.updateTodo(1, 1234)).toBeFalse()
  })
  it('expects updateTodo to work after an item is removed', () => {
    todoList.newTodo('do something') // 1
    todoList.newTodo('do something') // 2 REM
    todoList.newTodo('do something') // 3
    todoList.removeTodo(2)
    todoList.newTodo('do something') // 2or4
  })

  // searchById
  it('expects false when id is not equal to type Number', () => {
    expect(todoList.searchById('robert')).toBeFalse()
    expect(todoList.searchById(false)).toBeFalse()
    expect(todoList.searchById([1])).toBeFalse()
  })
  it('expects a todo item to be returned when its id is passed', () => {
    todoList.newTodo('do something')
    todoList.newTodo('do something')
    expect(todoList.searchById(2)).toEqual({
      id: 2,
      text: 'do something',
      checked: false
    })
  })
  it('expects return of false when called with an id that does not exist', () => {
    expect(todoList.searchById(3)).toBeFalse()
  })

  // removeTodo
  it('expects false when id is not equal to type Number', () => {
    expect(todoList.removeTodo('robert')).toBeFalse()
    expect(todoList.removeTodo(false)).toBeFalse()
    expect(todoList.removeTodo([1])).toBeFalse()
  })
  it('expects the removeTodo to return false if id does not exist', () => {
    expect(todoList.removeTodo(1)).toBeFalse()
  })
  it('expects the return of removeTodo to have length of 0 due to the removal by id', () => {
    todoList.newTodo('do something')
    expect(todoList.removeTodo(1)).toHaveSize(0)
  })
})
