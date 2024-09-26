const { ToDoList, ToDoItem, increaseId } = require('../src/todolist.js')

describe('Todo Functions:', () => {
  describe('To Do Item', () => {
    it('/ creates a new item, starts off as complete', () => {
      increaseId(1)
      const newItem = new ToDoItem('Do the laundry')
      expect(newItem.description).toEqual('Do the laundry')
    })
    it('/ if param is left empty', () => {
      increaseId(1)
      expect(() => new ToDoItem('')).toThrowError('Please enter a todo!')
    })
  })

  describe('To Do List', () => {
    it('/ addItem should push item to list', () => {
      const toDoList = new ToDoList()
      increaseId(1)
      toDoList.list = []
      const item1 = new ToDoItem('Do laundry')
      const item2 = new ToDoItem('Pet the cat')

      toDoList.addItem(item1)
      toDoList.addItem(item2)

      expect(toDoList.list.length).toEqual(2)
      expect(toDoList.list[0].id).toEqual(1)
      expect(toDoList.list[1].id).toEqual(2)
    })

    it('/ Get Todo List should display all items descriptions in list', () => {
      const toDoList = new ToDoList()
      increaseId(1)
      toDoList.list = []
      const item1 = new ToDoItem('Do laundry')
      const item2 = new ToDoItem('Pet the cat')

      toDoList.addItem(item1)
      toDoList.addItem(item2)

      const result = toDoList.getTodos()
      expect(result).toEqual(['Do laundry', 'Pet the cat'])
    })
    it('/ getTodos list should return "No todo items" if ToDoList is empty', () => {
      const toDoList = new ToDoList()
      const result = toDoList.getTodos()
      expect(result).toEqual('No todo items')
    })
    it('/ set todo completed status to true', () => {
      const toDoList = new ToDoList()
      increaseId(1)
      toDoList.list = []
      const newItem = new ToDoItem('Go walking')
      toDoList.addItem(newItem)
      toDoList.setTodo(1)
      expect(toDoList.list[0].completed).toEqual(true)
    })
    it('/ set tofo completed status to false', () => {
      const toDoList = new ToDoList()
      increaseId(1)
      toDoList.list = [
        {
          id: 1,
          description: 'Go walking',
          completed: true
        }
      ]
      toDoList.setTodo(1)
      expect(toDoList.list[0].completed).toEqual(false)
    })
  })
  describe('/ Getting incompleted and completed todo items', () => {
    const todoList = new ToDoList()
    beforeEach(() => {
      todoList.list = [
        {
          id: 1,
          description: 'Go walking',
          completed: false
        },
        {
          id: 2,
          description: 'Go biking',
          completed: true
        },
        {
          id: 3,
          description: 'Go swimming',
          completed: false
        },
        {
          id: 4,
          description: 'Go climbing',
          completed: true
        }
      ]
    })
    it('/ should return a list of incompleted items descriptions', () => {
      const result = todoList.getIncompleted()
      expect(result).toEqual(['Go walking', 'Go swimming'])
    })
    it('/ get incompleted returns false if there are no incompleted items"', () => {
      todoList.list = [
        {
          id: 1,
          description: 'Go walking',
          completed: true
        },
        {
          id: 2,
          description: 'Go biking',
          completed: true
        },
        {
          id: 3,
          description: 'Go swimming',
          completed: true
        },
        {
          id: 4,
          description: 'Go climbing',
          completed: true
        }
      ]
      const result = todoList.getIncompleted()
      expect(result).toEqual(false)
    })
    it('/ get completed todo items. Should return list of descriptions of todo items.', () => {
      const result = todoList.getCompleted()
      expect(result).toEqual(['Go biking', 'Go climbing'])
    })
    it('/ get completed returns false if no completed items exist.', () => {
      todoList.list = [
        {
          id: 1,
          description: 'Go walking',
          completed: false
        },
        {
          id: 2,
          description: 'Go biking',
          completed: false
        },
        {
          id: 3,
          description: 'Go swimming',
          completed: false
        },
        {
          id: 4,
          description: 'Go climbing',
          completed: false
        }
      ]
      const result = todoList.getCompleted()
      expect(result).toEqual(false)
    })
  })
  describe('/ find todo list items', () => {
    const todoList = new ToDoList()
    beforeEach(() => {
      todoList.list = [
        {
          id: 1,
          description: 'Change bed sheets',
          completed: false
        },
        {
          id: 2,
          description: 'Sweep kitchen',
          completed: true
        },
        {
          id: 3,
          description: 'Do a grocery shop',
          completed: false
        },
        {
          id: 4,
          description: 'Help neighbour with move',
          completed: true
        }
      ]
    })
    it('/ if ID exists return description', () => {
      const result = todoList.findTodo(2)
      expect(result).toEqual('Sweep kitchen')
    })
    it('/ if ID does not exist, return "This todo does not exist"', () => {
      const result = todoList.findTodo(5)
      expect(result).toEqual('This todo does not exist')
    })
  })
  describe('/ Remove todo', () => {
    const todoList = new ToDoList()
    beforeEach(() => {
      todoList.list = [
        {
          id: 1,
          description: 'Change bed sheets',
          completed: true
        },
        {
          id: 2,
          description: 'Sweep kitchen',
          completed: true
        },
        {
          id: 3,
          description: 'Do a grocery shop',
          completed: false
        },
        {
          id: 4,
          description: 'Help neighbour with move',
          completed: true
        }
      ]
    })
    it('/ if id does match one in todo list, return list without said item', () => {
      todoList.removeTodo(3)
      const result = [
        {
          id: 1,
          description: 'Change bed sheets',
          completed: true
        },
        {
          id: 2,
          description: 'Sweep kitchen',
          completed: true
        },
        {
          id: 4,
          description: 'Help neighbour with move',
          completed: true
        }
      ]
      expect(todoList.list).toEqual(result)
    })
    it('/ if no ID exists', () => {
      const result = todoList.removeTodo(5)
      expect(result).toEqual(false)
    })
  })
})
