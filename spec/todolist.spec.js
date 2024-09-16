const ToDoList = require(`../src/todolist.js`)

describe('ToDoList class', () => {
  let todoList
  let expectedArray

  beforeEach(() => {
    todoList = new ToDoList()
    expectedArray = []
  })

  it('should add a todo', () => {
    todoList.createToDo('do the laundry')

    expectedArray.push({ id: 0, text: 'do the laundry', complete: false })
    expect(todoList.itemsArray).toEqual(expectedArray)
  })

  it('should return the full list of items', () => {
    // setup
    todoList.createToDo('do the laundry')
    todoList.createToDo('make my bed')
    todoList.createToDo('Feed the dog')
    expectedArray.push({ id: 0, text: 'do the laundry', complete: false })
    expectedArray.push({ id: 1, text: 'make my bed', complete: false })
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
    todoList.createToDo('do the laundry')
    // execute
    todoList.setAsCompleted(0)
    // verify
    expect(todoList.getAllItems()).toEqual([
      { id: 0, text: 'do the laundry', complete: true }
    ])
  })

  // testing getting all incompletes
  it('should return only incomplete', () => {
    // setup
    todoList.createToDo('do the laundry')
    todoList.createToDo('make my bed')
    todoList.createToDo('Feed the dog')
    todoList.createToDo('Clean the table')
    todoList.setAsCompleted(0)
    todoList.setAsCompleted(2)
    expectedArray.push({ id: 1, text: 'make my bed', complete: false })
    expectedArray.push({ id: 3, text: 'Clean the table', complete: false })
    // execute
    const result = todoList.getIncomplete()
    // verify
    expect(result).toEqual(expectedArray)
  })

  // testing getting all completes
  it('should return only complete', () => {
    // setup
    todoList.createToDo('do the laundry')
    todoList.createToDo('make my bed')
    todoList.createToDo('Feed the dog')
    todoList.createToDo('Clean the table')
    todoList.setAsCompleted(0)
    todoList.setAsCompleted(2)
    expectedArray.push({ id: 0, text: 'do the laundry', complete: true })
    expectedArray.push({ id: 2, text: 'Feed the dog', complete: true })
    // execute
    const result = todoList.getComplete()
    // verify
    expect(result).toEqual(expectedArray)
  })

  // testing getting an item by its ID
  it('should return the correct task', () => {
    // setup
    todoList.createToDo('do the laundry')
    todoList.createToDo('make my bed')
    todoList.createToDo('Feed the dog')
    todoList.setAsCompleted(0)
    const expectedResult = { id: 1, text: 'make my bed', complete: false }
    // execute
    const result = todoList.getByID(1)
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('should return an error message', () => {
    // setup
    todoList.createToDo('do the laundry')
    todoList.createToDo('make my bed')
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
    todoList.createToDo('do the laundry')
    todoList.createToDo('make my bed')
    todoList.createToDo('Feed the dog')
    todoList.setAsCompleted(0)
    expectedArray.push({ id: 0, text: 'do the laundry', complete: true })
    expectedArray.push({ id: 2, text: 'Feed the dog', complete: false })

    todoList.removeByID(1)

    expect(todoList.getAllItems()).toEqual(expectedArray)
  })
})
