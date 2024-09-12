const TodoList = require('../src/todolist.js')

describe('Todo list', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('creates a todo item', () => {
    const expected = {
      text: 'exercise',
      id: 1,
      status: 'incomplete'
    }

    const result = todoList.create('exercise')

    expect(result).toEqual(expected)
  })

  it('gets all items', () => {
    const item1 = {
      text: 'exercise',
      id: 1,
      status: 'incomplete'
    }
    const item2 = {
      text: 'wash pots',
      id: 2,
      status: 'incomplete'
    }

    const expected = [item1, item2]

    todoList.create('exercise')
    todoList.create('wash pots')

    expect(todoList.getAll()).toEqual(expected)
  })

  it('sets status of todo item as complete if found', () => {
    const item1 = todoList.create('exercise')
    const expected = {
      text: 'exercise',
      id: 1,
      status: 'complete'
    }

    const result = todoList.setComplete(item1.id)

    expect(result).toEqual(expected)
  })

  it('gets items with status complete', () => {
    // eslint-disable-next-line no-unused-vars
    const item1 = todoList.create('exercise')
    const item2 = todoList.create('wash the pots')
    const item3 = todoList.create('feed the cat')

    todoList.setComplete(item2.id)
    todoList.setComplete(item3.id)

    const expected = [item2, item3]
    const result = todoList.getByStatus('complete')

    expect(result).toEqual(expected)
  })

  it('gets items with status incomplete', () => {
    const item1 = todoList.create('exercise')
    const item2 = todoList.create('wash the pots')
    const item3 = todoList.create('feed the cat')

    todoList.setComplete(item3.id)

    const expected = [item1, item2]
    const result = todoList.getByStatus('incomplete')

    expect(result).toEqual(expected)
  })

  it('searches for item by id', () => {
    const item1 = todoList.create('exercise')
    const expected = {
      id: 1,
      text: 'exercise',
      status: 'incomplete'
    }

    const result = todoList.search(item1.id)

    expect(result).toEqual(expected)
  })

  it('search throws error if no item found', () => {
    expect(() => {
      todoList.search(1).toThrowError('Item not found')
    })
  })

  it('deletes item by id', () => {
    // eslint-disable-next-line no-unused-vars
    const item1 = todoList.create('exercise')
    const expected = {
      id: 1,
      text: 'exercise',
      status: 'incomplete'
    }

    const deletedItem = todoList.remove(1)

    expect(deletedItem).toEqual(expected)
    expect(todoList.getAll()).toEqual([])
  })

  it('remove throws error if no item found', () => {
    expect(() => {
      todoList.remove(1).toThrowError('Item not found')
    })
  })
})
