const ToDoList = require(`../src/todolist.js`)

describe('ToDoList class', () => {
  let todoList
  let expectedArray
  beforeEach(() => {
    todoList = new ToDoList()
    expectedArray = []
  })
  // testing adding new todos
  it('should add a todo', () => {
    // setup
    // execute
    todoList.createToDo('Check the mailbox')
    // verify
    expectedArray.push({ id: 0, text: 'Check the mailbox', complete: false })
    expect(todoList.itemsArray).toEqual(expectedArray)
  })

  // testing getting all todos
  it('should return the full list of items', () => {
    // setup
    todoList.createToDo('Check the mailbox')
    todoList.createToDo('Feed the cat')
    todoList.createToDo('Feed the dog')
    expectedArray.push({ id: 0, text: 'Check the mailbox', complete: false })
    expectedArray.push({ id: 1, text: 'Feed the cat', complete: false })
    expectedArray.push({ id: 2, text: 'Feed the dog', complete: false })
    // execute
    const result = todoList.getAllItems()
    // verify
    expect(result.length).toEqual(3)
    expect(result).toEqual(expectedArray)
  })

  // testing changing to complete
  it('should flag a todo as completed', () => {
    // setup
    todoList.createToDo('Check the mailbox')
    // execute
    todoList.setAsCompleted(0)
    // verify
    expect(todoList.getAllItems()).toEqual([
      { id: 0, text: 'Check the mailbox', complete: true }
    ])
  })

  // testing  getting all incompletes
  it('should return only incomplete', () => {
    // setup
    todoList.createToDo('Check the mailbox')
    todoList.createToDo('Feed the cat')
    todoList.createToDo('Feed the dog')
    todoList.createToDo('Clean the fridge')
    todoList.setAsCompleted(0)
    todoList.setAsCompleted(2)
    expectedArray.push({ id: 1, text: 'Feed the cat', complete: false })
    expectedArray.push({ id: 3, text: 'Clean the fridge', complete: false })
    // execute
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expectedArray)
  })

  // testing  getting all completes
  it('should return only complete', () => {
    // setup
    todoList.createToDo('Check the mailbox')
    todoList.createToDo('Feed the cat')
    todoList.createToDo('Feed the dog')
    todoList.createToDo('Clean the fridge')
    todoList.setAsCompleted(0)
    todoList.setAsCompleted(2)
    expectedArray.push({ id: 0, text: 'Check the mailbox', complete: true })
    expectedArray.push({ id: 2, text: 'Feed the dog', complete: true })
    // execute
    const result = todoList.getComplete()
    // verify
    expect(result).toEqual(expectedArray)
  })
  // testing  getting an item by its ID
  it('should return the correct task', () => {
    // setup
    todoList.createToDo('Check the mailbox')
    todoList.createToDo('Feed the cat')
    todoList.createToDo('Feed the dog')
    todoList.setAsCompleted(0)
    const expectedResult = { id: 1, text: 'Feed the cat', complete: false }
    // execute
    const result = todoList.getByID(1)
    // verify
    expect(result).toEqual(expectedResult)
  })
  it('should return an error message', () => {
    // setup
    todoList.createToDo('Check the mailbox')
    todoList.createToDo('Feed the cat')
    todoList.createToDo('Feed the dog')
    todoList.setAsCompleted(0)
    const expectedResult = '404 task not found'
    // execute
    const result = todoList.getByID(3)
    // verify
    expect(result).toEqual(expectedResult)
  })

  // testing removal via ID
  it('should remove the task', () => {
    // setup
    todoList.createToDo('Check the mailbox')
    todoList.createToDo('Feed the cat')
    todoList.createToDo('Feed the dog')
    todoList.setAsCompleted(0)
    expectedArray.push({ id: 0, text: 'Check the mailbox', complete: true })
    expectedArray.push({ id: 2, text: 'Feed the dog', complete: false })
    // execute
    todoList.removeByID(1)
    // verify
    expect(todoList.getAllItems()).toEqual(expectedArray)
  })
})
