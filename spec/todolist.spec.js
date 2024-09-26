const {
  createToDo,
  getToDo,
  setToDoComplete,
  getToDoIncomplete,
  getToDoComplete,
  searchToDo,
  removeItem
} = require('../src/todolist.js')

describe('Create a new toDo Item', () => {
  it('create new item object with description', () => {
    const input = 'mow the grass'

    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = createToDo(input, toDoList)

    expect(result).toEqual({
      id: 4,
      description: 'mow the grass',
      complete: false
    })
  })

  it('return false if no description given', () => {
    // no input
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = createToDo(null, toDoList)

    expect(result).toBeFalse()
  })
})

describe('Get all toDo items', () => {
  it('returns all items in toDoList', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = getToDo(toDoList)

    expect(result).toEqual([
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ])
  })

  it('return false if toDoList contains no items', () => {
    const toDoList = []

    const result = getToDo(toDoList)

    expect(result).toBeFalse()
  })
})

describe('set a todo item as complete', () => {
  it('set toDoItem as complete', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = setToDoComplete(3, toDoList)
    expect(result).toBeTrue()
    expect(toDoList).toEqual([
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: true
      }
    ])
  })

  it('returns false if not valid id', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = setToDoComplete(4, toDoList)

    expect(result).toBeFalse()
  })

  it('returns false if no id', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = setToDoComplete(null, toDoList)

    expect(result).toBeFalse()
  })
})

describe('get incomplete toDoItems', () => {
  it('return incomplete items', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: true
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = getToDoIncomplete(toDoList)

    expect(result).toEqual([
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ])
  })

  it('return false if no incomplete items', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: true
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: true
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: true
      }
    ]

    const result = getToDoIncomplete(toDoList)

    expect(result).toBeFalse()
  })
})

describe('get complete toDoItems', () => {
  it('return complete items', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: true
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = getToDoComplete(toDoList)

    expect(result).toEqual([
      {
        id: 2,
        description: 'do the dishes',
        complete: true
      }
    ])
  })

  it('return false if no complete items', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = getToDoComplete(toDoList)

    expect(result).toBeFalse()
  })
})

describe('search toDoItem by id', () => {
  it('return toDoItem matching id', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = searchToDo(1, toDoList)

    expect(result).toEqual({
      id: 1,
      description: 'mow the grass',
      complete: false
    })
  })

  it('return "Item not found" if invalid id', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = searchToDo(5, toDoList)

    expect(result).toEqual('Item not found')
  })

  it('return false if empty input', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = searchToDo(null, toDoList)

    expect(result).toBeFalse()
  })
})

describe('remove toDoItem', () => {
  it('remove item with input id', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = removeItem(2, toDoList)

    expect(toDoList).toEqual([
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ])
    expect(result).toBeTrue()
  })

  it('return false if invalid id input', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = removeItem(7, toDoList)

    expect(result).toBeFalse()
  })

  it('return false if no id input', () => {
    const toDoList = [
      {
        id: 1,
        description: 'mow the grass',
        complete: false
      },
      {
        id: 2,
        description: 'do the dishes',
        complete: false
      },
      {
        id: 3,
        description: 'go to the gym',
        complete: false
      }
    ]

    const result = removeItem(null, toDoList)

    expect(result).toBeFalse()
  })
})
