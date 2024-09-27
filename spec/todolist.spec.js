const {
  createToDo,
  getToDos,
  setComplete,
  getIncompleteToDos,
  getCompleteToDos,
  findToDoById,
  removeToDo
} = require('../src/todolist.js')

describe('create new todo', () => {
  it('the todo item is created successfully', () => {
    const newToDo = { id: 1, text: 'do the dishes', complete: false }
    const result = createToDo(newToDo)
    expect(result).toEqual('do the dishes')
  })

  it('the todo item was not created - missing input!', () => {
    const newToDo = { id: 1, text: '', complete: false }
    const result = createToDo(newToDo)
    expect(result).toEqual('failed to create todo')
  })
})

describe('get todo list', () => {
  it('the todo list is shown as a string listing all its items', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const result = getToDos(todoList)

    const expected = [
      { id: 1, text: 'buy coffee beans', complete: false },
      { id: 2, text: 'make coffee', complete: false },
      { id: 3, text: 'drink coffe', complete: false },
      { id: 4, text: 'type some code', complete: false }
    ]

    expect(result).toEqual(expected)
  })

  it('the todo list is empty', () => {
    const todoList = []
    const result = getToDos(todoList)
    expect(result).toEqual('no todos added yet')
  })
})

describe('find and set a todo to complete', () => {
  it('item found and completion status set to true', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]
    const id = 3

    const result = setComplete(id, todoList)

    expect(result).toEqual({ id: 3, text: 'drink coffe', complete: true })
  })

  it('item not found', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const id = 7

    const result = setComplete(id, todoList)

    expect(result).toEqual('incorrect id - todo item does not exist')
  })
})

describe('get incomplete todos only', () => {
  it('all todos returned are incomplete', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: true }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: true }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const result = getIncompleteToDos(todoList)

    expect(result).toEqual([
      { id: 2, text: 'make coffee', complete: false },
      { id: 4, text: 'type some code', complete: false }
    ])
  })

  it('no incomplete todos found!', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: true }
    const todo2 = { id: 2, text: 'make coffee', complete: true }
    const todo3 = { id: 3, text: 'drink coffe', complete: true }
    const todo4 = { id: 4, text: 'type some code', complete: true }
    const todoList = [todo1, todo2, todo3, todo4]

    const result = getIncompleteToDos(todoList)

    expect(result).toEqual('all done!')
  })
})

describe('get complete todos only', () => {
  it('all todos returned are complete', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: true }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: true }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const result = getCompleteToDos(todoList)

    expect(result).toEqual([
      { id: 1, text: 'buy coffee beans', complete: true },
      { id: 3, text: 'drink coffe', complete: true }
    ])
  })

  it('no complete todos found!', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const result = getCompleteToDos(todoList)

    expect(result).toEqual('no todo completed yet!')
  })
})

describe('find a todo item by its id', () => {
  it('todo item found', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const id = 2

    const result = findToDoById(id, todoList)

    expect(result).toEqual({ id: 2, text: 'make coffee', complete: false })
  })

  it('no such todo item', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const id = 7

    const result = findToDoById(id, todoList)

    expect(result).toEqual('no match found')
  })
})

describe('delete a todo item', () => {
  it('todo found and removed', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const id = 2

    const result = removeToDo(id, todoList)

    expect(result).toEqual([
      { id: 1, text: 'buy coffee beans', complete: false },
      { id: 3, text: 'drink coffe', complete: false },
      { id: 4, text: 'type some code', complete: false }
    ])
  })

  it('no such todo item found', () => {
    const todo1 = { id: 1, text: 'buy coffee beans', complete: false }
    const todo2 = { id: 2, text: 'make coffee', complete: false }
    const todo3 = { id: 3, text: 'drink coffe', complete: false }
    const todo4 = { id: 4, text: 'type some code', complete: false }
    const todoList = [todo1, todo2, todo3, todo4]

    const id = 9

    const result = removeToDo(id, todoList)

    expect(result).toEqual('no match found, could not remove')
  })
})
