const TodoList = require('../src/todolist.js')

describe('TodoList', () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it('should create a todo item', () => {
    const todo = todoList.createTodo('Test Todo')
    expect(todo).toEqual({ id: 1, description: 'Test Todo', completed: false })
  })

  it('should get all todo items', () => {
    todoList.createTodo('First Todo')
    todoList.createTodo('Second Todo')
    expect(todoList.getAllTodos().length).toBe(2)
  })

  it('should set a todo completed by its ID', () => {
    todoList.createTodo('Test Todo')
    const updatedTodo = todoList.setTodoCompleted(1)
    expect(updatedTodo.completed).toBe(true)
  })

  it('should get only incomplete todo items', () => {
    todoList.createTodo('Incomplete Todo')
    todoList.createTodo('Complete Todo')
    todoList.setTodoCompleted(2)
    expect(todoList.getIncompleteTodos()).toEqual([
      { id: 1, description: 'Incomplete Todo', completed: false }
    ])
  })

  it('should get only complete todo items', () => {
    todoList.createTodo('Incomplete Todo')
    todoList.createTodo('Complete Todo')
    todoList.setTodoCompleted(2)
    expect(todoList.getCompleteTodos()).toEqual([
      { id: 2, description: 'Complete Todo', completed: true }
    ])
  })

  it('should search and return a todo item by its ID', () => {
    todoList.createTodo('Find Me')
    expect(todoList.getTodoById(1)).toEqual({
      id: 1,
      description: 'Find Me',
      completed: false
    })
  })

  it('should return a message if todo item doesn’t exist', () => {
    expect(todoList.getTodoById(999)).toBe('Todo item does not exist')
  })

  it('should remove a todo item by its ID', () => {
    todoList.createTodo('Delete Me')
    expect(todoList.removeTodoById(1)).toBe(true)
    expect(todoList.getTodoById(1)).toBe('Todo item does not exist')
  })

  it('should return false if trying to remove a non-existent todo', () => {
    expect(todoList.removeTodoById(999)).toBe(false)
  })
})
