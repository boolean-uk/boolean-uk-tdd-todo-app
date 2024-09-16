const { TodoItem, TodoList } = require('../src/todolist.js')

describe('TodoItem should', () => {
  it('have and id', () => {
    //SETUP
    const item = new TodoItem(1, 'test')

    //EXECUTION
    const expectedRes = 1

    //VERIFY
    expect(item.id).toEqual(expectedRes)
  })

  it('should have a text', () => {
    //SETUP
    const item = new TodoItem(1, 'test')

    //EXECUTION
    const expectedRes = 'test'

    //VERIFY
    expect(item.text).toEqual(expectedRes)
  })

  it('should have a status of incomplete', () => {
    //SETUP
    const item = new TodoItem(1, 'test')

    //EXECUTION
    const expectedRes = 'incomplete'

    //VERIFY
    expect(item.status).toEqual(expectedRes)
  })
})

describe('TodoList should', () => {
  it('have todos be an array of TodoItem', () => {
    //SETUP
    const items = [new TodoItem(1, 'test')]

    //EXECUTE
    const expectedRes = [new TodoItem(1, 'test')]
    const list = new TodoList(items)

    //VERIFY
    expect(list.todos).toEqual(expectedRes)
  })

  it('be able to create a new todo and add it to the list', () => {
    //SETUP
    const items = [new TodoItem(1, 'test')]
    const list = new TodoList(items)

    //EXECUTE
    const expectedRes = [new TodoItem(1, 'test'), new TodoItem(2, 'test')]
    list.createNewTodo('test')

    //VERIFY
    expect(list.todos).toEqual(expectedRes)
  })

  it('be able to get all todos', () => {
    //SETUP
    const items = [
      new TodoItem(1, 'test'),
      new TodoItem(2, 'test'),
      new TodoItem(3, 'test')
    ]
    const list = new TodoList(items)

    //EXECUTE
    const expectedRes = [
      new TodoItem(1, 'test'),
      new TodoItem(2, 'test'),
      new TodoItem(3, 'test')
    ]
    const res = list.getAllTodos()

    //VERIFY
    expect(res).toEqual(expectedRes)
  })

  it('be able to get incomplete todos ', () => {
    //SETUP
    const items = [
      new TodoItem(1, 'test'),
      new TodoItem(2, 'test'),
      new TodoItem(3, 'test')
    ]
    const list = new TodoList(items)

    //EXECUTE
    const expectedRes = [new TodoItem(2, 'test'), new TodoItem(3, 'test')]
    list.updateTodoStatus(1)
    const res = list.getIncompleteTodos()

    //VERIFY
    expect(res).toEqual(expectedRes)
  })

  it('be able to get a todo by id', () => {
    //SETUP
    const items = [
      new TodoItem(1, 'test'),
      new TodoItem(2, 'test'),
      new TodoItem(3, 'test')
    ]
    const list = new TodoList(items)

    //EXECUTE
    const expectedRes = new TodoItem(2, 'test')
    const res = list.getTodoById(2)

    //VERIFY
    expect(res).toEqual(expectedRes)
  })

  it('be able to get a todo by id', () => {
    //SETUP
    const items = [
      new TodoItem(1, 'test'),
      new TodoItem(2, 'test'),
      new TodoItem(3, 'test')
    ]
    const list = new TodoList(items)

    //EXECUTE
    const expectedRes = 'does not exist'
    const res = list.getTodoById(4)

    //VERIFY
    expect(res).toEqual(expectedRes)
  })

  it('be able to remove a todo by id', () => {
    //SETUP
    const items = [
      new TodoItem(1, 'test'),
      new TodoItem(2, 'test'),
      new TodoItem(3, 'test')
    ]
    const list = new TodoList(items)

    //EXECUTE
    const expectedRes = [new TodoItem(1, 'test'), new TodoItem(3, 'test')]
    list.removeTodoById(2)
    console.log(list.todos)

    //VERIFY
    expect(list.todos).toEqual(expectedRes)
  })
})
