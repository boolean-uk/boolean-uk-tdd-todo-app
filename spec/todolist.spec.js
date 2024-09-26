const { TodoList, TodoItem } = require('../src/todolist.js')

describe('Checking the todoItem constructor', () => {
  it('TodoItem has ID', () => {
    // Setup
    const testItem = new TodoItem(1, 'text')
    // Execution
    const result = 1
    // Check
    expect(testItem.id).toEqual(result)
  })

  it('TodoItem has text', () => {
    // Setup
    const testItem = new TodoItem(1, 'text')
    // Execution
    const result = 'text'
    // Check
    expect(testItem.text).toEqual(result)
  })

  it('TodoItem has completed === false', () => {
    // Setup
    const testItem = new TodoItem(1, 'text')
    // Execution
    const result = false
    // Check
    expect(testItem.completed).toEqual(result)
  })
})

describe('Get All TodoItems', () => {
  it('TodoList has items', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.getAllTodos()

    // Check
    expect(result).toEqual(testItems)
  })

  it('TodoList has no items', () => {
    // Setup
    const testList = new TodoList([])
    // Execution
    const result = testList.getAllTodos()
    // Check
    expect(result).toEqual(false)
  })
})

describe('create a new Todo', () => {
  it('Does not fail to add a new todoItem to an existing empty todoList', () => {
    // Setup
    const testTodoList = new TodoList([])
    // Execution
    const result = testTodoList.createItem('Take out the bins')
    // Check
    expect(result).toEqual(true)
    expect(testTodoList.todoItems[0].text).toEqual('Take out the bins')
  })

  it('Add todoItem to a non-empty todoList', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)
    testList.createItem('text4')

    // Execution
    const result = testList.getAllTodos()

    // Check
    expect(result[3].text).toEqual('text4')
  })
})

describe('set a todoItem as completed', () => {
  it('The todoList contains the specified ID', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.setTodoCompleted(1)

    // Check
    expect(result).toEqual(true)
    expect(testList.todoItems[0].completed).toEqual(true)
  })

  it('The todoList does not contain the specified ID', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.setTodoCompleted(4)

    // Check
    expect(result).toEqual(false)
  })
})

describe('get completed todos', () => {
  it('at least one todoItem exists', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)
    testList.setTodoCompleted(1)
    testList.setTodoCompleted(2)

    // Execution
    const result = testList.getCompletedTodos()
    // Check
    expect(typeof result[0]).toEqual('object')
  })

  it('no completed todoItem exists', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.getCompletedTodos()

    // Check
    expect(result.length).toEqual(0)
  })
})

describe('get incomplete todos', () => {
  it('todoList contains no incomplete todos', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    testList.setTodoCompleted(1)
    testList.setTodoCompleted(2)
    testList.setTodoCompleted(3)
    const result = testList.getIncompleteTodos()

    // Check
    expect(result.length).toEqual(0)
  })

  it('todoList contains incomplete todos', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    testList.setTodoCompleted(1)
    const result = testList.getIncompleteTodos()

    // Check
    expect(result.length).toEqual(2)
  })
})

describe('get todoItem by id', () => {
  it('gets a todoItem when its id exists', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.getTodoById(2)

    // Check
    expect(result.id).toEqual(2)
  })

  it('a todoItem ID does not exist', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.getTodoById(4)

    // Check
    expect(result).toEqual({})
  })
})

describe('remove todoItem by ID', () => {
  it('ID does not exist in the list', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.removeTodoById(4)

    // Check
    expect(result).toEqual(false)
  })

  it('ID exists in the list', () => {
    // Setup
    const testItems = [
      new TodoItem(1, 'text1'),
      new TodoItem(2, 'text2'),
      new TodoItem(3, 'text3')
    ]
    const testList = new TodoList(testItems)

    // Execution
    const result = testList.removeTodoById(2)
    // const result = testList.getAllTodos()

    // Check
    expect(result).toEqual(true)
    expect(testList.todoItems.length).toEqual(testItems.length - 1)
  })
})
