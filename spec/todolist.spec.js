const ToDoList = require('../src/TodoList.js')

describe('A to-do list', () => {
  let tdl = ToDoList()
  beforeEach(() => {
    tdl = ToDoList()
  })

  it('creates a new to-do item on the list', () => {
    const result = tdl.create('do the dishes')

    const expect = {
      id: 1,
      task: 'do the dishes',
      status: 'incomplete'
    }
    expect(result).toEqual(expect)
  })

  it('returns all to-do item on the list', () => {
    tdl.create('do the dishes')
    tdl.create('fold laudry')
    const result = tdl.getAll()

    const expect = [
      {
        id: 1,
        task: 'do the dishes',
        status: 'incomplete'
      },
      {
        id: 2,
        task: 'fold laudry',
        status: 'incomplete'
      }
    ]
    expect(result).toEqual(expect)
  })
  it('returns task with complete status if found', () => {
    const item1 = tdl.create('exercise')
    const expected = {
      text: 'exercise',
      id: 1,
      status: 'complete'
    }

    const result = tdl.setComplete(item1.id)

    expect(result).toEqual(expected)
  })

  it('gets items with status complete', () => {
    tdl.create('exercise')
    const item2 = tdl.create('wash the pots')
    const item3 = tdl.create('feed the cat')

    tdl.setComplete(item2.id)
    tdl.setComplete(item3.id)

    const expected = [item2, item3]
    const result = tdl.getByStatus('complete')

    expect(result).toEqual(expected)
  })

  it('gets items with status incomplete', () => {
    const item1 = tdl.create('exercise')
    const item2 = tdl.create('wash the pots')
    const item3 = tdl.create('feed the cat')

    tdl.setComplete(item3.id)

    const expected = [item1, item2]
    const result = tdl.getByStatus('incomplete')

    expect(result).toEqual(expected)
  })

  it('searches for item by id', () => {
    const item1 = tdl.create('exercise')
    const expected = {
      id: 1,
      text: 'exercise',
      status: 'incomplete'
    }

    const result = tdl.search(item1.id)

    expect(result).toEqual(expected)
  })

  it('search throws error if no item found', () => {
    expect(() => {
      tdl.search(1).toThrowError('Item not found')
    })
  })

  it('deletes item by id', () => {
    tdl.create('exercise')
    const expected = {
      id: 1,
      text: 'exercise',
      status: 'incomplete'
    }

    const deletedItem = tdl.remove(1)

    expect(deletedItem).toEqual(expected)
    expect(tdl.getAll()).toEqual([])
  })

  it('remove throws error if no item found', () => {
    expect(() => {
      tdl.remove(1).toThrowError('Item not found')
    })
  })
  it('returns removes item on the list', () => {})
  it('returns all complete item on the list', () => {})
  it('returns all incomplete item on the list', () => {})
  it('returns item with the matching Id from the list', () => {})
})
