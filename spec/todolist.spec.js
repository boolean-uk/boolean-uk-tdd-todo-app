// import here
const { TodoList } = require('../src/todolist.js')

describe('TodoList', () => {
  it('Creates a new task with the user putting in a string', () => {
    // Given
    const newTodoList = new TodoList()
    const task = 'make the bed'
    // When
    const result = newTodoList.create(task)
    // Then
    expect(result).toEqual({
      id: 1,
      text: 'make the bed',
      status: 'incomplete'
    })
  })

  it('User puts in something besides a string', () => {
    // Given
    const newTodoList = new TodoList()
    const task = 123
    // When
    const result = newTodoList.create(task)
    // Then
    expect(result).toEqual(`ERROR: Input is not a string`)
  })

  it('If input is null, undefined, or an empty string', () => {
    // Given
    const newTodoList = new TodoList()
    const task = undefined
    // When
    const result = newTodoList.create(task)
    // Then
    expect(result).toEqual(`ERROR: Please provide an input`)
  })

  it('Get all ToDos', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    const result = newTodoList.getAll()
    // Then
    expect(result).toEqual([
      {
        id: 1,
        text: 'make the bed',
        status: 'incomplete'
      },
      { id: 2, text: 'cook dinner', status: 'incomplete' }
    ])
  })

  it('Get all but there are no tasks', () => {
    // Given
    const newTodoList = new TodoList()
    // When
    const result = newTodoList.getAll()
    // Then
    expect(result).toEqual(`ERROR: No todo items exist`)
  })

  it('Set ToDo list items to complete', () => {
    // Given
    const newTodoList = new TodoList()
    const task = 'make the bed'
    // When
    newTodoList.create(task)
    const result = newTodoList.setComplete(1)
    // Then
    expect(result).toEqual({
      id: 1,
      text: 'make the bed',
      status: 'complete'
    })
  })

  it('Set ToDo list items to complete, but id does not exist', () => {
    // Given
    const newTodoList = new TodoList()
    const task = 'make the bed'
    // When
    newTodoList.create(task)
    const result = newTodoList.setComplete(2)
    // Then
    expect(result).toEqual(`ERROR: Id does not exist`)
  })

  it('Set ToDo list items to complete, but id is already complete', () => {
    // Given
    const newTodoList = new TodoList()
    const task = 'make the bed'
    // When
    newTodoList.create(task)
    newTodoList.setComplete(1)
    const result = newTodoList.setComplete(1)
    // Then
    expect(result).toEqual(`ERROR: Id is already complete`)
  })
  
  it('Get all incomplete tasks', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    newTodoList.setComplete(3)
    const result = newTodoList.getIncomplete()
    // Then
    expect(result).toEqual([
      {
        id: 1,
        text: 'make the bed',
        status: 'incomplete'
      },
      { id: 2, text: 'cook dinner', status: 'incomplete' }
    ])
  })

  it('Get all incomplete tasks but non are incomplete', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    newTodoList.setComplete(1)
    newTodoList.setComplete(2)
    newTodoList.setComplete(3)

    const result = newTodoList.getIncomplete()
    // Then
    expect(result).toEqual('ERROR: No incomplete tasks exist')
  })

  it('Get all complete tasks', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    newTodoList.setComplete(3)
    const result = newTodoList.getComplete()
    // Then
    expect(result).toEqual([{
      id: 3,
      text: 'do the washing up',
      status: 'complete'
    }])
  });

  it('Get all complete tasks but non are complete', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    const result = newTodoList.getComplete()
    // Then
    expect(result).toEqual('ERROR: No complete tasks exist')
  });

  it('Search task by id', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    const result = newTodoList.search(3)
    // Then
    expect(result).toEqual(
      {
        id: 3,
        text: 'do the washing up',
        status: 'incomplete'
      },
    )
  });

  it('Search task by id but id does not exist', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    const result = newTodoList.search(4)
    // Then
    expect(result).toEqual(`ERROR: Id does not exist`)
  });

  it('Remove task by id', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    const result = newTodoList.remove(3)
    // Then
    expect(result).toEqual(`task of id 3 has been deleted`)
  })

  it('Remove task by id but id does not exist', () => {
    // Given
    const newTodoList = new TodoList()
    const task1 = 'make the bed'
    const task2 = 'cook dinner'
    const task3 = 'do the washing up'
    // When
    newTodoList.create(task1)
    newTodoList.create(task2)
    newTodoList.create(task3)
    const result = newTodoList.remove(5)
    // Then
    expect(result).toEqual(`ERROR: Id does not exist`)
  })
})
