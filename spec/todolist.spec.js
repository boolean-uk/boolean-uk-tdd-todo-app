const {
  createToDo,
  getAll,
  setStatus,
  getIncomplete,
  getComplete,
  findTodo,
  removeItem
} = require('./../src/todolist.js')
describe('Todo list', () => {
  it('should create a todo list item with and id description and status', () => {
    const expectedItem = {
      id: 1,
      description: 'this is a test',
      status: 'incomplete'
    }
    const description = 'this is a test'
    const status = 'incomplete'
    const addToDo = createToDo(1, description, status)
    expect(addToDo).toEqual(expectedItem)
  })
  it("gets all Todo's in the todoList array", () => {
    const toDolist = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' },
      { id: 3, description: 'cooking', status: 'complete' },
      { id: 2, description: 'go for a run', status: 'complete' }
    ]
    const getTodos = getAll(toDolist)
    expect(getTodos).toEqual(toDolist)
  })
  it('get all todos but todo list is empty', () => {
    const toDoList = []
    const getTodos = getAll(toDoList)
    expect(getTodos).toEqual("no todo's")
  })
  it('set staus by id', () => {
    const toDolist = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' },
      { id: 3, description: 'cooking', status: 'complete' },
      { id: 4, description: 'go for a run', status: 'complete' }
    ]
    const id = 2
    const expectedResult = {
      id: 2,
      description: 'ironing',
      status: 'complete'
    }
    const changeStatus = setStatus(id, toDolist)
    expect(changeStatus).toEqual(expectedResult)
  })
  it('getIncomplete todos', () => {
    const toDolist = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' },
      { id: 3, description: 'cooking', status: 'complete' },
      { id: 4, description: 'go for a run', status: 'complete' }
    ]
    const expectedResult = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' }
    ]
    const findincomplete = getIncomplete(toDolist)
    expect(findincomplete).toEqual(expectedResult)
  })
  it('get complete', () => {
    const toDolist = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' },
      { id: 3, description: 'cooking', status: 'complete' },
      { id: 4, description: 'go for a run', status: 'complete' }
    ]
    const expectedResult = [
      { id: 3, description: 'cooking', status: 'complete' },
      { id: 4, description: 'go for a run', status: 'complete' }
    ]
    const findComplete = getComplete(toDolist)
    expect(findComplete).toEqual(expectedResult)
  })
  it('find by id', () => {
    const toDolist = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' },
      { id: 3, description: 'cooking', status: 'complete' },
      { id: 4, description: 'go for a run', status: 'complete' }
    ]
    const expectedResult = { id: 3, description: 'cooking', status: 'complete' }
    const findbyid = findTodo(3, toDolist)
    expect(findbyid).toEqual(expectedResult)
  })
  it('remove to do', () => {
    const toDolist = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' },
      { id: 3, description: 'cooking', status: 'complete' },
      { id: 4, description: 'go for a run', status: 'complete' }
    ]
    const expectedResult = [
      { id: 1, description: 'laundry', status: 'incomplete' },
      { id: 2, description: 'ironing', status: 'incomplete' },
      { id: 3, description: 'cooking', status: 'complete' }
    ]
    const removebyid = removeItem(4, toDolist)
    expect(removebyid).toEqual(expectedResult)
  })
})
