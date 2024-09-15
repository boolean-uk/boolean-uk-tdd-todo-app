const { Todos } = require('../src/todolist.js')

describe('Todos', () => {
  let todo

  beforeEach(() => {
    todo = new Todos()
  })

  describe('Create new Todo', () => {
    it('returns new todo item as an object', () => {
      const text = 'new todo'
      const result = todo.createTodo(text)
      expect(result).toEqual({ id: 1, text: 'new todo', completed: false })
    })

    it('user can only enter a string as the todo text description', () => {
      const text = 1
      const result = todo.createTodo(text)
      expect(result).toEqual('text value must be a valid string')
    })
  })

  describe('Get All Todos', () => {
    it('returns full list of todo items', () => {
      const newToDo1 = todo.createTodo('Do the laundry')
      const newToDo2 = todo.createTodo('Make the bed')
      const todoList = [newToDo1, newToDo2]
      const result = todo.getAllTodos()
      expect(result).toEqual(todoList)
    })

    it('returns empty array when there are no todo items in list', () => {
      const result = todo.getAllTodos()
      expect(result).toEqual([])
    })
  })

  describe('Set Todo As Complete', () => {
    it('return todo item as completed', () => {
      todo.createTodo('Do the laundry')
      const completedTodo = { id: 1, text: 'Do the laundry', completed: true }
      const result = todo.completeTodo(1)
      expect(result).toEqual(completedTodo)
    })

    it('there is no valid id submitted', () => {
      const result = todo.completeTodo()
      expect(result).toEqual('id is not valid')
    })
  })

  describe('Get Incomplete Todos', () => {
    it('return all incomplete todo items', () => {
      todo.createTodo('Do the laundry')
      todo.createTodo('Make the bed')
      todo.completeTodo(1)
      const incompleteTodo = [{ id: 2, text: 'Make the bed', completed: false }]
      const result = todo.getIncompleteTodos(false)
      expect(result).toEqual(incompleteTodo)
    })

    it('getIncompleteTodos function can only accept a false boolean parameter', () => {
      const result = todo.getIncompleteTodos()
      expect(result).toEqual('completed status is not valid')
    })
  })

  describe('Get Complete Todos', () => {
    it('return all complete todo items', () => {
      todo.createTodo('Do the laundry')
      todo.createTodo('Make the bed')
      todo.completeTodo(1)
      const completedTodo = [{ id: 1, text: 'Do the laundry', completed: true }]
      const result = todo.getCompleteTodos(true)
      expect(result).toEqual(completedTodo)
    })

    it('getCompleteTodos function can only accept a true boolean parameter', () => {
      const result = todo.getCompleteTodos()
      expect(result).toEqual('completed status is not valid')
    })
  })

  describe('Search For Todo By Id', () => {
    it('return todo items when id of item matches searched for id', () => {
      todo.createTodo('Do the laundry')
      todo.createTodo('Make the bed')
      const foundTodo = { id: 1, text: 'Do the laundry', completed: false }
      const result = todo.searchTodoById(1)
      expect(result).toEqual(foundTodo)
    })

    it('unable to locate todo item with this id, id does not exist', () => {
      const result = todo.searchTodoById()
      expect(result).toEqual('id does not exist')
    })
  })

  describe('Remove Todo By Id', () => {
    it('return list of todo items after items selected by id is removed', () => {
      todo.createTodo('Do the laundry')
      todo.createTodo('Make the bed')
      const updatedTodos = [{ id: 1, text: 'Do the laundry', completed: false }]
      const result = todo.removeTodoById(2)
      expect(result).toEqual(updatedTodos)
    })

    it('unable to locate todo item to remove using this id, id does not exist', () => {
      const result = todo.removeTodoById()
      expect(result).toEqual('id does not exist')
    })
  })
})